/*eslint max-lines: ["warn", {"max": 300, "skipBlankLines": true, "skipComments": true}]*/
require('./brewRenderer.less');
const React = require('react');
const { useState, useRef, useEffect } = React;
const _ = require('lodash');

const MarkdownLegacy = require('naturalcrit/markdownLegacy.js');
const Markdown = require('naturalcrit/markdown.js');
const ErrorBar = require('./errorBar/errorBar.jsx');
const ToolBar  = require('./toolBar/toolBar.jsx');

//TODO: move to the brew renderer
const RenderWarnings = require('homebrewery/renderWarnings/renderWarnings.jsx');
const NotificationPopup = require('./notificationPopup/notificationPopup.jsx');
const Frame = require('react-frame-component').default;
const dedent = require('dedent-tabs').default;
const { printCurrentBrew } = require('../../../shared/helpers.js');

const DOMPurify = require('dompurify');
const purifyConfig = { FORCE_BODY: true, SANITIZE_DOM: false };

const Themes = require('themes/themes.json');

const PAGE_HEIGHT = 1056;

const INITIAL_CONTENT = dedent`
	<!DOCTYPE html><html><head>
	<link href="//use.fontawesome.com/releases/v6.5.1/css/all.css" rel="stylesheet" type="text/css" />
	<link href="//fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" rel="stylesheet" type="text/css" />
	<link href='/homebrew/bundle.css' type="text/css" rel='stylesheet' />
	<base target=_blank>
	</head><body style='overflow: hidden'><div></div></body></html>`;

//v=====----------------------< Brew Page Component >---------------------=====v//
const BrewPage = (props)=>{
	props = {
		contents : '',
		index    : 0,
		...props
	};
	const cleanText = DOMPurify.sanitize(props.contents, purifyConfig);
	return <div className={props.className} id={`p${props.index + 1}`} >
	         <div className='columnWrapper' dangerouslySetInnerHTML={{ __html: cleanText }} />
	       </div>;
};


//v=====--------------------< Brew Renderer Component >-------------------=====v//
const renderedPages = [];
let rawPages      = [];

const BrewRenderer = (props)=>{
	props = {
		text              : '',
		style             : '',
		renderer          : 'legacy',
		theme             : '5ePHB',
		lang              : '',
		errors            : [],
		currentEditorPage : 0,
		...props
	};

	const [state, setState] = useState({
		viewablePageNumber : 0,
		height             : PAGE_HEIGHT,
		isMounted          : false,
		visibility         : 'hidden',
		zoom			   : 100,
		currentPageNumber  : 1,
	});

	const mainRef  = useRef(null);

	if(props.renderer == 'legacy') {
		rawPages = props.text.split('\\page');
	} else {
		rawPages = props.text.split(/^\\page$/gm);
	}

	useEffect(()=>{ // Unmounting steps
		return ()=>{window.removeEventListener('resize', updateSize);};
	}, []);

	const scrollToPage = (pageNumber) => {
		const iframe = document.getElementById('BrewRenderer');
        if (iframe && iframe.contentWindow) {
            const brewRenderer =
                iframe.contentWindow.document.querySelector('.brewRenderer');
            if (brewRenderer) {
                const pages = brewRenderer.querySelectorAll('.page');
				console.log(`Attempting to scroll to page ${pageNumber} of ${pages.length}`);
                if (pageNumber + 1 > pages.length || pageNumber < 0) {
					console.log(pageNumber, pages.length);
                    console.log('page not found');
                } else {
					console.log(`Scrolling to page: ${pages[pageNumber].id}`);
                    pages[pageNumber].scrollIntoView({ block: 'start' });
                }
            }
        }
    };
	
	const updateSize = ()=>{
		setState((prevState)=>({
			...prevState,
			height : mainRef.current.parentNode.clientHeight,
		}));
	};

	const handleScroll = (e)=>{
		const target = e.target;
		setState((prevState)=>({
			...prevState,
			viewablePageNumber : Math.floor(target.scrollTop / target.scrollHeight * rawPages.length)
		}));

		getCurrentPage(e);
	};

	const getCurrentPage = (e) => {
		const target = e.target;
		const { scrollTop, clientHeight, scrollHeight } = target;
		const totalScrollableHeight = scrollHeight - clientHeight;
		
		const currentPageNumber = Math.ceil((scrollTop / totalScrollableHeight) * rawPages.length);
		
		setState((prevState) => ({
			...prevState,
			currentPageNumber: currentPageNumber || 1
		}));
	};

	const isInView = (index)=>{
		if(!state.isMounted)
			return false;

		if(index == props.currentEditorPage)	//Already rendered before this step
			return false;

		if(Math.abs(index - state.viewablePageNumber) <= 3)
			return true;

		return false;
	};

	const renderPageInfo = ()=>{
		return <div className='pageInfo' ref={mainRef}>
			<div>
				{props.renderer}
			</div>
			<div>
				{state.viewablePageNumber + 1} / {rawPages.length}
			</div>
		</div>;
	};

	const renderDummyPage = (index)=>{
		return <div className='phb page' id={`p${index + 1}`} key={index}>
			<i className='fas fa-spinner fa-spin' />
		</div>;
	};

	const renderStyle = ()=>{
		if(!props.style) return;
		const cleanStyle = DOMPurify.sanitize(props.style, purifyConfig);
		//return <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<style>@layer styleTab {\n${sanitizeScriptTags(props.style)}\n} </style>` }} />;
		return <div style={{ display: 'none' }} dangerouslySetInnerHTML={{ __html: `<style> ${cleanStyle} </style>` }} />;
	};

	const renderPage = (pageText, index)=>{
		if(props.renderer == 'legacy') {
			const html = MarkdownLegacy.render(pageText);
			return <BrewPage className='page phb' index={index} key={index} contents={html} />;
		} else {
			pageText += `\n\n&nbsp;\n\\column\n&nbsp;`; //Artificial column break at page end to emulate column-fill:auto (until `wide` is used, when column-fill:balance will reappear)
			const html = Markdown.render(pageText, index);
			return <BrewPage className='page' index={index} key={index} contents={html} />;
		}
	};

	const renderPages = ()=>{
		if(props.errors && props.errors.length)
			return renderedPages;

		if(rawPages.length != renderedPages.length) // Re-render all pages when page count changes
			renderedPages.length = 0;

		// Render currently-edited page first so cross-page effects (variables, links) can propagate out first
		renderedPages[props.currentEditorPage] = renderPage(rawPages[props.currentEditorPage], props.currentEditorPage);

		_.forEach(rawPages, (page, index)=>{
			if((isInView(index) || !renderedPages[index]) && typeof window !== 'undefined'){
				renderedPages[index] = renderPage(page, index); // Render any page not yet rendered, but only re-render those in PPR range
			}
		});
		return renderedPages;
	};

	const handleControlKeys = (e)=>{
		if(!(e.ctrlKey || e.metaKey)) return;
		const P_KEY = 80;
		if(e.keyCode == P_KEY && props.allowPrint) printCurrentBrew();
		if(e.keyCode == P_KEY) {
			e.stopPropagation();
			e.preventDefault();
		}
	};

	const frameDidMount = ()=>{	//This triggers when iFrame finishes internal "componentDidMount"
		setTimeout(()=>{	//We still see a flicker where the style isn't applied yet, so wait 100ms before showing iFrame
			updateSize();
			window.addEventListener('resize', updateSize);
			renderPages(); //Make sure page is renderable before showing
			setState((prevState)=>({
				...prevState,
				isMounted  : true,
				visibility : 'visible'
			}));
		}, 100);
	};

	const emitClick = ()=>{ // Allow clicks inside iFrame to interact with dropdowns, etc. from outside
		if(!window || !document) return;
		document.dispatchEvent(new MouseEvent('click'));
	};

	const rendererPath  = props.renderer == 'V3' ? 'V3' : 'Legacy';
	const themePath     = props.theme ?? '5ePHB';
	const baseThemePath = Themes[rendererPath][themePath].baseTheme;


	//Toolbar settings:

	const updateZoom = (newZoom) => {
		setState((prevState)=>({
			...prevState,
			zoom : newZoom
		}));
	};

	const makeZoom = () => {

		return(
			<style id='zoomStyle'>
        {`
          .pages {
            zoom: ${state.zoom}%;
			margin-bottom: 5cm;
          }
        `}
      </style>
		);
	}

	const handlePageChange = (pageNumber) => {
        // Scroll to the desired page
        scrollToPage(pageNumber);
    };

	return (
		<>
			{/*render dummy page while iFrame is mounting.*/}
			{!state.isMounted
				? <div className='brewRenderer' onScroll={handleScroll}>
					<div className='pages'>
						{renderDummyPage(1)}
					</div>
				</div>
				: null}

			{/*render in iFrame so broken code doesn't crash the site.*/}
			<Frame id='BrewRenderer' initialContent={INITIAL_CONTENT}
				style={{ width: '100%', height: '100%', visibility: state.visibility }}
				contentDidMount={frameDidMount}
				onClick={()=>{emitClick();}}
			>
				<ToolBar updateZoom={updateZoom} currentPage={state.currentPageNumber} onPageChange={handlePageChange} totalPages={rawPages.length}/>
				<div className={'brewRenderer'}
					onScroll={handleScroll}
					onKeyDown={handleControlKeys}
					tabIndex={-1}
					style={{ height: state.height }}>

					<ErrorBar errors={props.errors} />
					<div className='popups'>
						<RenderWarnings />
						<NotificationPopup />
					</div>
					<link href={`/themes/${rendererPath}/Blank/style.css`} type='text/css' rel='stylesheet'/>
					{baseThemePath &&
						<link href={`/themes/${rendererPath}/${baseThemePath}/style.css`} type='text/css' rel='stylesheet'/>
					}
					<link href={`/themes/${rendererPath}/${themePath}/style.css`} type='text/css' rel='stylesheet'/>
					{makeZoom()}

					{/* Apply CSS from Style tab and render pages from Markdown tab */}
					{state.isMounted
						&&
						<>
							{renderStyle()}
							<div className='pages' lang={`${props.lang || 'en'}`}>
								{renderPages()}
							</div>
						</>
					}
				</div>
			</Frame>
			{renderPageInfo()}
		</>
	);
};

module.exports = BrewRenderer;

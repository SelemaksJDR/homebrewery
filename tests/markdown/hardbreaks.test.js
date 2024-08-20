/* eslint-disable max-lines */

const Markdown = require('naturalcrit/markdown.js');

describe('Hard Breaks', ()=>{
	test('Single Break', function() {
		const source = ':\n\n';
		const rendered = Markdown.render(source).trim();
		expect(rendered, `Input:\n${source}`, { showPrefix: false }).toBe('<div class=\'blank\'></div>');
	});

	test('Double Break', function() {
		const source = '::\n\n';
		const rendered = Markdown.render(source).trim();
		expect(rendered, `Input:\n${source}`, { showPrefix: false }).toBe('<div class=\'blank\'></div>\n<div class=\'blank\'></div>');
	});

	test('Triple Break', function() {
		const source = ':::\n\n';
		const rendered = Markdown.render(source).trim();
		expect(rendered, `Input:\n${source}`, { showPrefix: false }).toBe('<div class=\'blank\'></div>\n<div class=\'blank\'></div>\n<div class=\'blank\'></div>');
	});
});

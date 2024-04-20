// regex used: \.([^:-]*)-([^:]*)(.*)
// substitution: "$1$2" : "$1-$2",

const raRedux = {
	"gizigzag-leaf" : "gi zigzag-leaf",
	"gizebra-shield" : "gi zebra-shield",
	"gix-mark" : "gi x-mark",
	"giwyvern" : "gi wyvern",
	"giwrench" : "gi wrench",
	"giwooden-sign" : "gi wooden-sign",
	"giwolf-howl" : "gi wolf-howl",
	"giwolf-head" : "gi wolf-head",
	"giwireless-signal" : "gi wireless-signal",
	"giwifi" : "gi wifi",
	"giwater-drop" : "gi water-drop",
	"givirgo" : "gi virgo",
	"givine-whip" : "gi vine-whip",
	"givial" : "gi vial",
	"givest" : "gi vest",
	"givenomous-snake" : "gi venomous-snake",
	"givase" : "gi vase",
	"giunplugged" : "gi unplugged",
	"giunderhand" : "gi underhand",
	"giuncertainty" : "gi uncertainty",
	"gitwo-hearts" : "gi two-hearts",
	"gitwo-dragons" : "gi two-dragons",
	"giturd" : "gi turd",
	"gitrophy" : "gi trophy",
	"gitriforce" : "gi triforce",
	"gitrident" : "gi trident",
	"gitrefoil-lily" : "gi trefoil-lily",
	"gitrail" : "gi trail",
	"gitower" : "gi tower",
	"gitorch" : "gi torch",
	"gitooth" : "gi tooth",
	"gitombstone" : "gi tombstone",
	"gitoast" : "gi toast",
	"gitic-tac-toe" : "gi tic-tac-toe",
	"githree-keys" : "gi three-keys",
	"githorny-vine" : "gi thorny-vine",
	"githorn-arrow" : "gi thorn-arrow",
	"gitesla" : "gi tesla",
	"gitentacle" : "gi tentacle",
	"gitelescope" : "gi telescope",
	"gitaurus" : "gi taurus",
	"gitargeted" : "gi targeted",
	"gitarget-laser" : "gi target-laser",
	"gitarget-arrows" : "gi target-arrows",
	"gisyringe" : "gi syringe",
	"gisurveillance-camera" : "gi surveillance-camera",
	"gisupersonic-arrow" : "gi supersonic-arrow",
	"gisuper-mushroom" : "gi super-mushroom",
	"gisunbeams" : "gi sunbeams",
	"gisun" : "gi sun",
	"gisun-symbol" : "gi sun-symbol",
	"gisuits" : "gi suits",
	"gisuckered-tentacle" : "gi suckered-tentacle",
	"gistopwatch" : "gi stopwatch",
	"gisprout" : "gi sprout",
	"gisprout-emblem" : "gi sprout-emblem",
	"gispray-can" : "gi spray-can",
	"gisplash" : "gi splash",
	"gispiral-shell" : "gi spiral-shell",
	"gispinning-sword" : "gi spinning-sword",
	"gispiked-tentacle" : "gi spiked-tentacle",
	"gispiked-mace" : "gi spiked-mace",
	"gispikeball" : "gi spikeball",
	"gispider-face" : "gi spider-face",
	"gispeech-bubbles" : "gi speech-bubbles",
	"gispeech-bubble" : "gi speech-bubble",
	"gispear-head" : "gi spear-head",
	"gispawn-node" : "gi spawn-node",
	"gispades" : "gi spades",
	"gispades-card" : "gi spades-card",
	"gisoccer-ball" : "gi soccer-ball",
	"gisnowflake" : "gi snowflake",
	"gisnorkel" : "gi snorkel",
	"gisnake" : "gi snake",
	"gisnail" : "gi snail",
	"gismall-fire" : "gi small-fire",
	"gislash-ring" : "gi slash-ring",
	"giskull" : "gi skull",
	"giskull-trophy" : "gi skull-trophy",
	"gisite" : "gi site",
	"gisideswipe" : "gi sideswipe",
	"gisickle" : "gi sickle",
	"gishuriken" : "gi shuriken",
	"gishovel" : "gi shovel",
	"gishotgun-shell" : "gi shotgun-shell",
	"gishot-through-the-heart" : "gi shot-through-the-heart",
	"gishoe-prints" : "gi shoe-prints",
	"giship-emblem" : "gi ship-emblem",
	"gishield" : "gi shield",
	"gisheriff" : "gi sheriff",
	"gisheep" : "gi sheep",
	"gishark" : "gi shark",
	"giseagull" : "gi seagull",
	"gisea-serpent" : "gi sea-serpent",
	"giscythe" : "gi scythe",
	"giscroll-unfurled" : "gi scroll-unfurled",
	"giscorpio" : "gi scorpio",
	"gisave" : "gi save",
	"gisatellite" : "gi satellite",
	"gisapphire" : "gi sapphire",
	"gisagittarius" : "gi sagittarius",
	"girune-stone" : "gi rune-stone",
	"girss" : "gi rss",
	"giround-shield" : "gi round-shield",
	"giround-bottom-flask" : "gi round-bottom-flask",
	"girobot-arm" : "gi robot-arm",
	"giroast-chicken" : "gi roast-chicken",
	"giringing-bell" : "gi ringing-bell",
	"girifle" : "gi rifle",
	"girevolver" : "gi revolver",
	"gireverse" : "gi reverse",
	"girepair" : "gi repair",
	"girelic-blade" : "gi relic-blade",
	"giregeneration" : "gi regeneration",
	"girecycle" : "gi recycle",
	"gireactor" : "gi reactor",
	"giraven" : "gi raven",
	"giradioactive" : "gi radioactive",
	"giradial-balance" : "gi radial-balance",
	"giradar-dish" : "gi radar-dish",
	"girabbit" : "gi rabbit",
	"giquill-ink" : "gi quill-ink",
	"giqueen-crown" : "gi queen-crown",
	"gipyramids" : "gi pyramids",
	"gipotion" : "gi potion",
	"gipoison-cloud" : "gi poison-cloud",
	"gipodium" : "gi podium",
	"giplayer" : "gi player",
	"giplayer-thunder-struck" : "gi player-thunder-struck",
	"giplayer-teleport" : "gi player-teleport",
	"giplayer-shot" : "gi player-shot",
	"giplayer-pyromaniac" : "gi player-pyromaniac",
	"giplayer-pain" : "gi player-pain",
	"giplayer-lift" : "gi player-lift",
	"giplayer-king" : "gi player-king",
	"giplayer-dodge" : "gi player-dodge",
	"giplayer-despair" : "gi player-despair",
	"giplain-dagger" : "gi plain-dagger",
	"gipisces" : "gi pisces",
	"giping-pong" : "gi ping-pong",
	"gipine-tree" : "gi pine-tree",
	"gipills" : "gi pills",
	"gipill" : "gi pill",
	"giperspective-dice-three" : "gi perspective-dice-three",
	"giperspective-dice-six" : "gi perspective-dice-six",
	"giperspective-dice-six-two" : "gi perspective-dice-six-two",
	"giperspective-dice-random" : "gi perspective-dice-random",
	"giperspective-dice-one" : "gi perspective-dice-one",
	"giperspective-dice-four" : "gi perspective-dice-four",
	"giperspective-dice-five" : "gi perspective-dice-five",
	"gipawprint" : "gi pawprint",
	"gipawn" : "gi pawn",
	"gipalm-tree" : "gi palm-tree",
	"giovermind" : "gi overmind",
	"gioverhead" : "gi overhead",
	"giophiuchus" : "gi ophiuchus",
	"gion-target" : "gi on-target",
	"giomega" : "gi omega",
	"gioctopus" : "gi octopus",
	"giocean-emblem" : "gi ocean-emblem",
	"giocarina" : "gi ocarina",
	"ginuclear" : "gi nuclear",
	"ginoose" : "gi noose",
	"ginodular" : "gi nodular",
	"ginails" : "gi nails",
	"gimusket" : "gi musket",
	"gimuscle-up" : "gi muscle-up",
	"gimuscle-fat" : "gi muscle-fat",
	"gimp5" : "gi mp5",
	"gimoon-sun" : "gi moon-sun",
	"gimontains" : "gi montains",
	"gimonster-skull" : "gi monster-skull",
	"gimirror" : "gi mirror",
	"gimining-diamonds" : "gi mining-diamonds",
	"gimine-wagon" : "gi mine-wagon",
	"gimicrophone" : "gi microphone",
	"gimetal-gate" : "gi metal-gate",
	"gimedical-pack" : "gi medical-pack",
	"gimeat" : "gi meat",
	"gimeat-hook" : "gi meat-hook",
	"gimatch" : "gi match",
	"gimass-driver" : "gi mass-driver",
	"gimagnet" : "gi magnet",
	"gimaggot" : "gi maggot",
	"gilove-howl" : "gi love-howl",
	"gilocked-fortress" : "gi locked-fortress",
	"giload" : "gi load",
	"gilit-candelabra" : "gi lit-candelabra",
	"gilion" : "gi lion",
	"gilightning" : "gi lightning",
	"gilightning-trio" : "gi lightning-trio",
	"gilightning-sword" : "gi lightning-sword",
	"gilightning-storm" : "gi lightning-storm",
	"gilightning-bolt" : "gi lightning-bolt",
	"gilighthouse" : "gi lighthouse",
	"gilight-bulb" : "gi light-bulb",
	"gilibra" : "gi libra",
	"gilever" : "gi lever",
	"gilevel-two" : "gi level-two",
	"gilevel-two-advanced" : "gi level-two-advanced",
	"gilevel-three" : "gi level-three",
	"gilevel-three-advanced" : "gi level-three-advanced",
	"gilevel-four" : "gi level-four",
	"gilevel-four-advanced" : "gi level-four-advanced",
	"gileo" : "gi leo",
	"gileaf" : "gi leaf",
	"gilava" : "gi lava",
	"gilaser-site" : "gi laser-site",
	"gilaser-blast" : "gi laser-blast",
	"gilarge-hammer" : "gi large-hammer",
	"gilantern-flame" : "gi lantern-flame",
	"gikunai" : "gi kunai",
	"giknight-helmet" : "gi knight-helmet",
	"giknife" : "gi knife",
	"giknife-fork" : "gi knife-fork",
	"gikitchen-knives" : "gi kitchen-knives",
	"gikey" : "gi key",
	"gikey-basic" : "gi key-basic",
	"gikettlebell" : "gi kettlebell",
	"gikaleidoscope" : "gi kaleidoscope",
	"gijigsaw-piece" : "gi jigsaw-piece",
	"gijetpack" : "gi jetpack",
	"giinterdiction" : "gi interdiction",
	"giinsect-jaws" : "gi insect-jaws",
	"giincense" : "gi incense",
	"giimplosion" : "gi implosion",
	"giice-cube" : "gi ice-cube",
	"gihydra" : "gi hydra",
	"gihydra-shot" : "gi hydra-shot",
	"gihourglass" : "gi hourglass",
	"gihot-surface" : "gi hot-surface",
	"gihospital-cross" : "gi hospital-cross",
	"gihorseshoe" : "gi horseshoe",
	"gihorns" : "gi horns",
	"gihorn-call" : "gi horn-call",
	"gihood" : "gi hood",
	"gihoneycomb" : "gi honeycomb",
	"gihole-ladder" : "gi hole-ladder",
	"gihive-emblem" : "gi hive-emblem",
	"gihelp" : "gi help",
	"gihelmet" : "gi helmet",
	"giheavy-shield" : "gi heavy-shield",
	"giheavy-fall" : "gi heavy-fall",
	"giheat-haze" : "gi heat-haze",
	"gihearts" : "gi hearts",
	"gihearts-card" : "gi hearts-card",
	"giheartburn" : "gi heartburn",
	"giheart-tower" : "gi heart-tower",
	"giheart-bottle" : "gi heart-bottle",
	"gihealth" : "gi health",
	"gihealth-increase" : "gi health-increase",
	"gihealth-decrease" : "gi health-decrease",
	"giharpoon-trident" : "gi harpoon-trident",
	"gihand" : "gi hand",
	"gihand-saw" : "gi hand-saw",
	"gihand-emblem" : "gi hand-emblem",
	"gihammer" : "gi hammer",
	"gihammer-drop" : "gi hammer-drop",
	"gihalberd" : "gi halberd",
	"giguillotine" : "gi guillotine",
	"giguarded-tower" : "gi guarded-tower",
	"gigroundbreaker" : "gi groundbreaker",
	"gigrenade" : "gi grenade",
	"gigrass" : "gi grass",
	"gigrass-patch" : "gi grass-patch",
	"gigrappling-hook" : "gi grappling-hook",
	"gigold-bar" : "gi gold-bar",
	"gigloop" : "gi gloop",
	"giglass-heart" : "gi glass-heart",
	"gigemini" : "gi gemini",
	"gigem" : "gi gem",
	"gigem-pendant" : "gi gem-pendant",
	"gigecko" : "gi gecko",
	"gigears" : "gi gears",
	"gigear-heart" : "gi gear-heart",
	"gigear-hammer" : "gi gear-hammer",
	"gigavel" : "gi gavel",
	"gigamepad-cross" : "gi gamepad-cross",
	"gifrozen-arrow" : "gi frozen-arrow",
	"gifrostfire" : "gi frostfire",
	"gifrost-emblem" : "gi frost-emblem",
	"gifox" : "gi fox",
	"giforward" : "gi forward",
	"giforging" : "gi forging",
	"gifootprint" : "gi footprint",
	"gifood-chain" : "gi food-chain",
	"gifocused-lightning" : "gi focused-lightning",
	"gifluffy-swirl" : "gi fluffy-swirl",
	"giflowers" : "gi flowers",
	"giflower" : "gi flower",
	"giflat-hammer" : "gi flat-hammer",
	"giflask" : "gi flask",
	"giflaming-trident" : "gi flaming-trident",
	"giflaming-claw" : "gi flaming-claw",
	"giflaming-arrow" : "gi flaming-arrow",
	"giflame-symbol" : "gi flame-symbol",
	"gifizzing-flask" : "gi fizzing-flask",
	"gifish" : "gi fish",
	"gifireball-sword" : "gi fireball-sword",
	"gifire" : "gi fire",
	"gifire-symbol" : "gi fire-symbol",
	"gifire-shield" : "gi fire-shield",
	"gifire-ring" : "gi fire-ring",
	"gifire-breath" : "gi fire-breath",
	"gifire-bomb" : "gi fire-bomb",
	"gifedora" : "gi fedora",
	"gifeathered-wing" : "gi feathered-wing",
	"gifeather-wing" : "gi feather-wing",
	"gifast-ship" : "gi fast-ship",
	"gifalling" : "gi falling",
	"gifall-down" : "gi fall-down",
	"gifairy" : "gi fairy",
	"gifairy-wand" : "gi fairy-wand",
	"gieyeball" : "gi eyeball",
	"gieye-shield" : "gi eye-shield",
	"gieye-monster" : "gi eye-monster",
	"giexplosive-materials" : "gi explosive-materials",
	"giexplosion" : "gi explosion",
	"gienergise" : "gi energise",
	"giemerald" : "gi emerald",
	"gieggplant" : "gi eggplant",
	"giegg" : "gi egg",
	"giegg-pod" : "gi egg-pod",
	"giduel" : "gi duel",
	"gidroplets" : "gi droplets",
	"gidroplet" : "gi droplet",
	"gidroplet-splash" : "gi droplet-splash",
	"gidripping-sword" : "gi dripping-sword",
	"gidripping-knife" : "gi dripping-knife",
	"gidripping-blade" : "gi dripping-blade",
	"gidrill" : "gi drill",
	"gidragonfly" : "gi dragonfly",
	"gidragon" : "gi dragon",
	"gidragon-wing" : "gi dragon-wing",
	"gidragon-breath" : "gi dragon-breath",
	"gidoubled" : "gi doubled",
	"gidouble-team" : "gi double-team",
	"gidiving-dagger" : "gi diving-dagger",
	"gidivert" : "gi divert",
	"gidinosaur" : "gi dinosaur",
	"gidice-two" : "gi dice-two",
	"gidice-three" : "gi dice-three",
	"gidice-six" : "gi dice-six",
	"gidice-one" : "gi dice-one",
	"gidice-four" : "gi dice-four",
	"gidice-five" : "gi dice-five",
	"gidiamonds" : "gi diamonds",
	"gidiamonds-card" : "gi diamonds-card",
	"gidiamond" : "gi diamond",
	"gidesert-skull" : "gi desert-skull",
	"gidervish-swords" : "gi dervish-swords",
	"gidemolish" : "gi demolish",
	"gidefibrillate" : "gi defibrillate",
	"gidecapitation" : "gi decapitation",
	"gideath-skull" : "gi death-skull",
	"gidead-tree" : "gi dead-tree",
	"gidaisy" : "gi daisy",
	"gidaggers" : "gi daggers",
	"gicycle" : "gi cycle",
	"gicut-palm" : "gi cut-palm",
	"gicubes" : "gi cubes",
	"gicrystals" : "gi crystals",
	"gicrystal-wand" : "gi crystal-wand",
	"gicrystal-cluster" : "gi crystal-cluster",
	"gicrystal-ball" : "gi crystal-ball",
	"gicrush" : "gi crush",
	"gicrowned-heart" : "gi crowned-heart",
	"gicrown" : "gi crown",
	"gicrown-of-thorns" : "gi crown-of-thorns",
	"gicrossed-swords" : "gi crossed-swords",
	"gicrossed-sabres" : "gi crossed-sabres",
	"gicrossed-pistols" : "gi crossed-pistols",
	"gicrossed-bones" : "gi crossed-bones",
	"gicrossed-axes" : "gi crossed-axes",
	"gicrossbow" : "gi crossbow",
	"gicroc-sword" : "gi croc-sword",
	"gicracked-shield" : "gi cracked-shield",
	"gicracked-helm" : "gi cracked-helm",
	"gicrab-claw" : "gi crab-claw",
	"gicorked-tube" : "gi corked-tube",
	"gicompass" : "gi compass",
	"gicold-heart" : "gi cold-heart",
	"gicog" : "gi cog",
	"gicog-wheel" : "gi cog-wheel",
	"gicoffee-mug" : "gi coffee-mug",
	"gicluster-bomb" : "gi cluster-bomb",
	"giclovers" : "gi clovers",
	"giclovers-card" : "gi clovers-card",
	"giclover" : "gi clover",
	"giclockwork" : "gi clockwork",
	"gicloak-and-dagger" : "gi cloak-and-dagger",
	"gicircular-shield" : "gi circular-shield",
	"gicircular-saw" : "gi circular-saw",
	"gicircle-of-circles" : "gi circle-of-circles",
	"gichicken-leg" : "gi chicken-leg",
	"gichessboard" : "gi chessboard",
	"gichemical-arrow" : "gi chemical-arrow",
	"gicheese" : "gi cheese",
	"gichain" : "gi chain",
	"gicat" : "gi cat",
	"gicastle-flag" : "gi castle-flag",
	"gicastle-emblem" : "gi castle-emblem",
	"gicarrot" : "gi carrot",
	"gicapricorn" : "gi capricorn",
	"gicapitol" : "gi capitol",
	"gicannon-shot" : "gi cannon-shot",
	"gicandle" : "gi candle",
	"gicandle-fire" : "gi candle-fire",
	"gicancer" : "gi cancer",
	"gicancel" : "gi cancel",
	"gicampfire" : "gi campfire",
	"gibutterfly" : "gi butterfly",
	"giburst-blob" : "gi burst-blob",
	"giburning-meteor" : "gi burning-meteor",
	"giburning-eye" : "gi burning-eye",
	"giburning-embers" : "gi burning-embers",
	"giburning-book" : "gi burning-book",
	"gibullets" : "gi bullets",
	"gibubbling-potion" : "gi bubbling-potion",
	"gibroken-skull" : "gi broken-skull",
	"gibroken-shield" : "gi broken-shield",
	"gibroken-heart" : "gi broken-heart",
	"gibroken-bottle" : "gi broken-bottle",
	"gibroken-bone" : "gi broken-bone",
	"gibroadsword" : "gi broadsword",
	"gibroadhead-arrow" : "gi broadhead-arrow",
	"gibridge" : "gi bridge",
	"gibrandy-bottle" : "gi brandy-bottle",
	"gibrain-freeze" : "gi brain-freeze",
	"gibowling-pin" : "gi bowling-pin",
	"gibowie-knife" : "gi bowie-knife",
	"gibottom-right" : "gi bottom-right",
	"gibottled-bolt" : "gi bottled-bolt",
	"gibottle-vapors" : "gi bottle-vapors",
	"giboot-stomp" : "gi boot-stomp",
	"giboomerang" : "gi boomerang",
	"gibook" : "gi book",
	"gibone-knife" : "gi bone-knife",
	"gibone-bite" : "gi bone-bite",
	"gibombs" : "gi bombs",
	"gibomb-explosion" : "gi bomb-explosion",
	"gibolt-shield" : "gi bolt-shield",
	"gibleeding-hearts" : "gi bleeding-hearts",
	"gibleeding-eye" : "gi bleeding-eye",
	"giblaster" : "gi blaster",
	"giblast" : "gi blast",
	"giblade-bite" : "gi blade-bite",
	"gibird-mask" : "gi bird-mask",
	"gibird-claw" : "gi bird-claw",
	"gibiohazard" : "gi biohazard",
	"gibell" : "gi bell",
	"gibeetle" : "gi beetle",
	"gibeer" : "gi beer",
	"gibear-trap" : "gi bear-trap",
	"gibeam-wake" : "gi beam-wake",
	"gibatwings" : "gi batwings",
	"gibattery-white" : "gi battery-white",
	"gibattery-positive" : "gi battery-positive",
	"gibattery-negative" : "gi battery-negative",
	"gibattery-black" : "gi battery-black",
	"gibattery-75" : "gi battery-75",
	"gibattery-50" : "gi battery-50",
	"gibattery-25" : "gi battery-25",
	"gibattery-100" : "gi battery-100",
	"gibattery-0" : "gi battery-0",
	"gibatteries" : "gi batteries",
	"gibattered-axe" : "gi battered-axe",
	"gibat-sword" : "gi bat-sword",
	"gibarrier" : "gi barrier",
	"gibarbed-arrow" : "gi barbed-arrow",
	"giball" : "gi ball",
	"giaxe" : "gi axe",
	"giaxe-swing" : "gi axe-swing",
	"giaware" : "gi aware",
	"giaura" : "gi aura",
	"giarson" : "gi arson",
	"giarrow-flights" : "gi arrow-flights",
	"giarrow-cluster" : "gi arrow-cluster",
	"giaries" : "gi aries",
	"giarena" : "gi arena",
	"giarchery-target" : "gi archery-target",
	"giarcher" : "gi archer",
	"giarcane-mask" : "gi arcane-mask",
	"giaquarius" : "gi aquarius",
	"giapple" : "gi apple",
	"gianvil" : "gi anvil",
	"giankh" : "gi ankh",
	"giangel-wings" : "gi angel-wings",
	"gianchor" : "gi anchor",
	"giammo-bag" : "gi ammo-bag",
	"gialligator-clip" : "gi alligator-clip",
	"giall-for-one" : "gi all-for-one",
	"gialien-fire" : "gi alien-fire",
	"giacorn" : "gi acorn",
	"giacid" : "gi acid"
}

module.exports = raRedux;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Input,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e0e4ae3 = require("../../chunks/index-1e0e4ae3.js");
var import_env_14926626 = require("../../chunks/env-14926626.js");
var import_Header_svelte_svelte_type_style_lang_e3e77909 = require("../../chunks/Header.svelte_svelte_type_style_lang-e3e77909.js");
var input_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container-content.svelte-19hpk57{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;background-color:var(--background-color);height:100vh}h1.svelte-19hpk57{position:sticky;top:60px;padding-bottom:0.5em;opacity:1;width:100%;background-color:var(--background-color);transition:background-color 1s ease}h2.svelte-19hpk57{position:sticky;top:100px;padding-bottom:0.5em;text-align:center;opacity:1;width:100%;background-color:var(--background-color);transition:background-color 1s ease}",
  map: null
};
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = true;
const Input = (0, import_index_1e0e4ae3.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>ingwon.io | input</title>`, ""}`, ""}

<div class="${"container-content svelte-19hpk57"}" id="${"input"}"><div class="${"content"}" id="${"about-input"}"><br>
		<h1 class="${"svelte-19hpk57"}">input (io)</h1>
		<br>
		<p>input/output (io) is a fundamental concept in computing. inputs - the signals and data received by the system - determine outputs. here are some collections of particularly meaningful inputs throughout my life.
		</p>
		<br></div>
		<br>
	<div class="${"content"}" id="${"writing"}"><br>
		<h1 class="${"svelte-19hpk57"}">Writing</h1>
		<br>
		<h2 class="${"svelte-19hpk57"}">Short Stories</h2>
		<br>
			<h3><a href="${"https://wordsunlimited.typepad.com/files/bullet.pdf"}" target="${"_blank"}">Bullet in the Brain - Tobias Wolff</a></h3>
		<br>
			<h3><a href="${"https://www.youmightfindyourself.com/post/22131227213/on-seeing-the-100-perfect-girl-one-beautiful"}" target="${"_blank"}">On Seeing the 100% Perfect Girl One Beautiful April Morning - Haruki Murakami</a></h3>
		<br>
			<h3><a href="${"https://americanliterature.com/author/virginia-woolf/short-story/a-haunted-house"}" target="${"_blank"}">A Haunted House - Virginia Woolf</a></h3>
		<br>
			<h3>Under Construction...
			</h3>
		<br>
		<h2 class="${"svelte-19hpk57"}">Poems</h2>
		<br>
			<h3>Under Construction...</h3>
		<br>
		<h2 class="${"svelte-19hpk57"}">Essays</h2>
		<br>
			<h3><a href="${"http://writing.upenn.edu/library/Sontag-Susan-Photography.pdf"}" target="${"_blank"}">On Photography - Susan Sontag
				</a></h3>
		<br>
			<h3><a href="${"http://s.spachman.tripod.com/Woolf/streethaunting.htm"}" target="${"_blank"}">Street Haunting: A London Adventure (1930) - Virginia Woolf
				</a></h3>
		<br>         
			<h3><a href="${"http://art.arts.usf.edu/content/articlefiles/2330-Excerpt%20from%20Remembrance%20of%20Things%20Past%20by%20Marcel%20Proust.pdf"}" target="${"_blank"}">The One About the Madeleine - Marcel Proust
				</a></h3>
		<br>
			<h3>Under Construction..
		  	</h3>
		<br></div> 
		<br>
		<div class="${"content"}" id="${"films"}"><br>
			<h1 class="${"svelte-19hpk57"}">Films</h1>
			<br>
			<h2 class="${"svelte-19hpk57"}">Richard Linklater</h2>
			<br>
				<h3><a href="${"/"}" target="${"_blank"}">Dazed and Confused</a></h3>
			<br>
				<h3><a href="${"/"}" target="${"_blank"}">Before Sunrise</a></h3>
			<br>
				<h3><a href="${"/"}" target="${"_blank"}">Before Sunset</a></h3>
			<br>
				<h3><a href="${"/"}" target="${"_blank"}">Before Midnight</a></h3>
			<br>
			<h2 class="${"svelte-19hpk57"}">Lee Chang Dong</h2>
			<br>
				<h3><a href="${"/"}" target="${"_blank"}">Poetry</a></h3>
			<br>
				<h3><a href="${"/"}" target="${"_blank"}">Peppermint Candy</a></h3>
			<br>
				<h3><a href="${"/"}" target="${"_blank"}">Burning</a></h3>
			<br>
				<h3><a href="${"/"}" target="${"_blank"}">Secret Sunshine</a></h3>
			<br>
				<h3><a href="${"/"}" target="${"_blank"}">Under Construction....</a></h3>
			<br></div> 

	
	
</div>`;
});

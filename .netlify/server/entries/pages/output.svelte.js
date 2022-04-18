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
  default: () => Output,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e0e4ae3 = require("../../chunks/index-1e0e4ae3.js");
var import_env_14926626 = require("../../chunks/env-14926626.js");
var import_Header_svelte_svelte_type_style_lang_e3e77909 = require("../../chunks/Header.svelte_svelte_type_style_lang-e3e77909.js");
var output_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container-content.svelte-e13yar{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;background-color:var(--background-color);height:100vh}h1.svelte-e13yar{position:sticky;top:60px;padding-bottom:0.5em;opacity:1;width:100%;background-color:var(--background-color);transition:background-color 1s ease}h2.svelte-e13yar{position:sticky;top:100px;padding-bottom:0.5em;text-align:center;opacity:1;width:100%;background-color:var(--background-color);transition:background-color 1s ease}",
  map: null
};
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = true;
const Output = (0, import_index_1e0e4ae3.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>ingwon.io | output</title>`, ""}`, ""}

<div class="${"container-content svelte-e13yar"}" id="${"output"}"><div class="${"content"}" id="${"about-output"}"><br>
		<h1 class="${"svelte-e13yar"}">output (io)</h1>
		<br>
		<p>drawing from the concept of input/output (io) in computing, here are some of my outputs, which reflect all the inputs (people, experiences, ideas) that i have processed throughout my life.
		</p>
		<br></div>
		<br>
	<div class="${"content"}" id="${"selected-writing"}"><br>
		<h1 class="${"svelte-e13yar"}">Selcted Writing</h1>
		<br>
		<h2 class="${"svelte-e13yar"}">Essays</h2>
		<br>
			<h3><a href="${"https://medium.com/@ingwon/for-father-e5197b764d95"}" target="${"_blank"}">For Father</a></h3>
		<br>
			<h3><a href="${"https://medium.com/@ingwon/for-mother-5dda20e13e6c"}" target="${"_blank"}">For Mother</a></h3>
		<br>
			<h3><a href="${"https://medium.com/@ingwon/requiem-for-notre-dame-4db44e70ba8a"}" target="${"_blank"}">Requiem For Notre Dame</a></h3>
		<br>
			<h3>Under Construction...
			</h3>
		<br>
		<h2 class="${"svelte-e13yar"}">Poems</h2>
		<br>
			<h3>Under Construction...</h3>
		<br>
		<h2 class="${"svelte-e13yar"}">Short Stories</h2>
			<h3>Under Construction..
		  	</h3>
		<br></div> 
		<br>
		<div class="${"content"}" id="${"selected-photos"}"><br>
			<h1 class="${"svelte-e13yar"}">Selected Photos</h1>
			<br>
			<h2 class="${"svelte-e13yar"}">.</h2>
			<br>
				<h3>Under Construction...
				</h3>
			<br>
			<h2 class="${"svelte-e13yar"}">.</h2></div> 

	
	
</div>`;
});

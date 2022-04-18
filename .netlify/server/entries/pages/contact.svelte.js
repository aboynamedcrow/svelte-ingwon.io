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
  default: () => Contact,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e0e4ae3 = require("../../chunks/index-1e0e4ae3.js");
var import_env_14926626 = require("../../chunks/env-14926626.js");
var import_Header_svelte_svelte_type_style_lang_91de1de2 = require("../../chunks/Header.svelte_svelte_type_style_lang-91de1de2.js");
var contact_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container-content.svelte-wfqnv7.svelte-wfqnv7{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;background-color:var(--background-color);height:100vh}h1.svelte-wfqnv7.svelte-wfqnv7{position:sticky;top:60px;padding-bottom:1em;opacity:1;width:100%;background-color:var(--background-color);transition:background-color 1s ease}h2.svelte-wfqnv7.svelte-wfqnv7{position:sticky;top:100px;padding-bottom:0.7em;text-align:center;opacity:1;width:100%;background-color:var(--background-color);transition:background-color 1s ease}#onlyFans.svelte-wfqnv7.svelte-wfqnv7{display:block;z-index:1;cursor:pointer}#onlyFans-checkbox .svelte-wfqnv7:hover input.svelte-wfqnv7{color:var(--accent-color)}#onlyFans .svelte-wfqnv7:hover label.svelte-wfqnv7{color:var(--accent-color)}#onlyFans .svelte-wfqnv7:hover h2.svelte-wfqnv7{color:var(--accent-color)}#onlyFans-checkbox.svelte-wfqnv7.svelte-wfqnv7{display:none}#onlyFans-checkbox.svelte-wfqnv7:checked+#onlyFans.svelte-wfqnv7:after{content:"Wtf u actually clicked? relax..";position:relative;top:0;left:0;bottom:0;display:block;z-index:1;overflow:hidden;background-color:var(--background-color);color:var(--text-color);transition:background-color 1s ease;cursor:pointer}',
  map: null
};
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = true;
const Contact = (0, import_index_1e0e4ae3.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>ingwon.io | contact</title>`, ""}`, ""}

<div class="${"container-content svelte-wfqnv7"}" id="${"contact"}"><div class="${"content"}" id="${"contact-me"}"><h1 class="${"svelte-wfqnv7"}">contact me</h1>
		<p></p></div>
	<div class="${"content svelte-wfqnv7"}" id="${"contact-info"}"><br>
		<h2 class="${"svelte-wfqnv7"}">{firstName}@gmail.com</h2>
		<br>
		<h2 class="${"svelte-wfqnv7"}"><a href="${"https://linkedin.com/in/ingwon"}" target="${"_blank"}">linkedin</a></h2>
		<br>
		<h2 class="${"svelte-wfqnv7"}"><input type="${"checkbox"}" id="${"onlyFans-checkbox"}" class="${"svelte-wfqnv7"}">
			<label for="${"onlyFans-checkbox"}" id="${"onlyFans"}" class="${"svelte-wfqnv7"}">onlyFans</label></h2>
		<br>
		<h2 class="${"svelte-wfqnv7"}"><a href="${"https://github.com/aboynamedcrow"}" target="${"_blank"}">github</a></h2>
		<br>
		<h2 class="${"svelte-wfqnv7"}"><a href="${"https://instagram.com/ingwonstagram"}" target="${"_blank"}">insta</a></h2>
		<br>
		<h2 class="${"svelte-wfqnv7"}"><a href="${"https://twitter.com/ingwon"}" target="${"_blank"}">twitter</a></h2>
		<br>
		<h2 class="${"svelte-wfqnv7"}"><a href="${"https://medium.com/@ingwon"}" target="${"_blank"}">medium</a></h2>
		<br>
		<h2 class="${"svelte-wfqnv7"}"><a href="${"https://letterboxd.com/aboynamedcrow/"}" target="${"_blank"}">letterboxd</a></h2>
		<br></div> 
		<br>
		
	
	
</div>`;
});

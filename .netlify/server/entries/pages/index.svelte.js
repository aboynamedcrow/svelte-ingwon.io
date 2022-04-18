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
  default: () => Routes,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e0e4ae3 = require("../../chunks/index-1e0e4ae3.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-16vitqj{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1;text-align:center;width:100%;height:100vh;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;margin-bottom:50vh}img.svelte-16vitqj{width:100%;height:auto;align-items:center}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_1e0e4ae3.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>ingwon.io</title>`, ""}`, ""}

<div class="${"content svelte-16vitqj"}"><h2>welcome. click my name to navigate
	</h2>
	<br>
	<br><br>

	<div class="${"welcome"}"><picture><img src="${"drive.jpg"}" alt="${"welcome"}" class="${"svelte-16vitqj"}"></picture></div>

	
</div>`;
});

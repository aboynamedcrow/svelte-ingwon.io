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
  default: () => Resume
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e0e4ae3 = require("../../chunks/index-1e0e4ae3.js");
var import_env_14926626 = require("../../chunks/env-14926626.js");
var resume_svelte_svelte_type_style_lang = "";
const css = {
  code: "embed.svelte-1w2mgs7{width:100%;height:100vh}.container-content.svelte-1w2mgs7{width:100%;height:100vh;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;background-color:var(--background-color)}input.svelte-1w2mgs7,button.svelte-1w2mgs7{font-family:var(--font);background-color:rgba(255, 255, 255, 0.45);color:var(--text-color);border-radius:3px;box-shadow:2px 2px 6px rgb(255 255 255 / 25%);padding:0.5em}button.svelte-1w2mgs7{font-family:var(--font);background-color:rgb(205, 204, 204);color:#222}",
  map: null
};
const Resume = (0, import_index_1e0e4ae3.c)(($$result, $$props, $$bindings, slots) => {
  let password = "";
  const hydrate = import_env_14926626.d;
  const router = import_env_14926626.b;
  const prerender = true;
  if ($$props.hydrate === void 0 && $$bindings.hydrate && hydrate !== void 0)
    $$bindings.hydrate(hydrate);
  if ($$props.router === void 0 && $$bindings.router && router !== void 0)
    $$bindings.router(router);
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>ingwon.io | resum\xE9</title>`, ""}`, ""}

<div class="${"container-content svelte-1w2mgs7"}" id="${"contact"}"><div class="${"content"}" id="${"resume"}"><h1>download resum\xE9</h1>
			<h3>last updated: March 2022</h3>
			<br></div>
		
	<div class="${"content"}" id="${"password"}"><div><br>
			<form><h2><label for="${"password"}">password:</label>
			  <input id="${"password"}" type="${"password"}" class="${"svelte-1w2mgs7"}"${(0, import_index_1e0e4ae3.d)("value", password, 0)}>
			<button class="${"svelte-1w2mgs7"}">Submit</button></h2></form>
			<br><br><br><br></div>
			${``}</div>
	
	
</div>`;
});

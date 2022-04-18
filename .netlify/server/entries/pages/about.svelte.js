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
  default: () => About,
  hydrate: () => hydrate,
  prerender: () => prerender,
  router: () => router
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e0e4ae3 = require("../../chunks/index-1e0e4ae3.js");
var import_env_14926626 = require("../../chunks/env-14926626.js");
const css = {
  code: ".content.svelte-lqcr9h{width:100%;height:100vh;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}#center.svelte-lqcr9h{text-align:center}img.svelte-lqcr9h{width:100%;height:auto;align-items:center}",
  map: null
};
const hydrate = import_env_14926626.d;
const router = import_env_14926626.b;
const prerender = true;
const About = (0, import_index_1e0e4ae3.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>ingwon.io | about</title>`, ""}`, ""}

<div class="${"content svelte-lqcr9h"}"><h1>about this place</h1>

	<div class="${"content-inner"}"><br>
		<br>
		<br>
		<p id="${"center"}" class="${"svelte-lqcr9h"}">this site was created in april 2022 by Ingwon Chae.
		</p>
		<br>
		<div class="${"about"}"><picture><img src="${"standing.jpg"}" alt="${"it me"}" class="${"svelte-lqcr9h"}"></picture></div>
		<br>
		<p id="${"center"}" class="${"svelte-lqcr9h"}">look, it me!
		  </p>
		<br>
		<br>
		<br>
		<p>its design and contents reflect the things i enjoy and that matter to me, including, among other things: memories, secrets, thoughts, feelings and jokes.
		</p>
		<br>
		<p>welcome again, and i hope you enjoy your stay on this tiny way station in the unfathomably vast expanse of outer space that is the internet.
		</p>
		<br></div>
</div>`;
});

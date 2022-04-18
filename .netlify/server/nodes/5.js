var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  css: () => css,
  entry: () => entry,
  js: () => js,
  module: () => module2
});
module.exports = __toCommonJS(stdin_exports);
var module2 = __toESM(require("../entries/pages/input.svelte.js"));
const entry = "pages/input.svelte-c6cc6690.js";
const js = ["pages/input.svelte-c6cc6690.js", "chunks/index-513e564b.js", "chunks/env-859c48a7.js", "chunks/Header.svelte_svelte_type_style_lang-169090d4.js", "chunks/index-bf4de514.js"];
const css = ["assets/pages/input.svelte-e12bdadc.css", "assets/about.svelte_svelte_type_style_lang-eee572f4.css", "assets/Counter.svelte_svelte_type_style_lang-67fb6608.css", "assets/Header.svelte_svelte_type_style_lang-6372db52.css"];

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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e0e4ae3 = require("../../chunks/index-1e0e4ae3.js");
var import_Header_svelte_svelte_type_style_lang_e3e77909 = require("../../chunks/Header.svelte_svelte_type_style_lang-e3e77909.js");
const getStores = () => {
  const stores = (0, import_index_1e0e4ae3.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css$4 = {
  code: ".svelte-1msp5uj.svelte-1msp5uj{--patrick-color:#e3dac9;--patrick-font:'EB Garamond';--patrick-text-transform:uppercase;--ingwon-color:#ffefd2;--ingwon-font:'EB Garamond';--ingwon-text-transform:uppercase;--van-patten-color:#f0ead6;--van-patten-font:'Old Standard TT';--van-patten-text-transform:uppercase;--bryce-color:white;--bryce-font:'Roboto';--bryce-text-transform:uppercase;--allen-color:#fdfdfd;--allen-font:'Alegreya SC', sans-serif;--allen-text-transform:uppercase}.container-card.svelte-1msp5uj.svelte-1msp5uj{display:flex;flex-direction:column;height:100%;color:inherit;background-color:inherit;padding-top:5px}.business-card.svelte-1msp5uj.svelte-1msp5uj{position:relative;margin:auto;margin-bottom:2%;top:0;right:0;bottom:0;left:0;width:350px;height:200px;min-width:36.297828vw;min-height:20.78119924vw}.business-card.svelte-1msp5uj p.svelte-1msp5uj{color:#000;font-size:0.95em;margin:0}.phone-number.svelte-1msp5uj.svelte-1msp5uj{position:absolute;top:20px;left:25px}.murders-and-executions.svelte-1msp5uj.svelte-1msp5uj{font-size:0.52em}.company-section.svelte-1msp5uj.svelte-1msp5uj{position:absolute;top:20px;right:25px}.company-section.svelte-1msp5uj p.svelte-1msp5uj{margin:0}.name-and-title.svelte-1msp5uj.svelte-1msp5uj{position:absolute;top:50%;left:50%;text-align:center;transform:translate(-50%, -50%)}.first-name.svelte-1msp5uj.svelte-1msp5uj{display:inline-block}.last-name.svelte-1msp5uj.svelte-1msp5uj{display:inline-block}.title.svelte-1msp5uj.svelte-1msp5uj{text-align:center;font-size:0.8em}.bottom-info.svelte-1msp5uj.svelte-1msp5uj{position:absolute;bottom:0;left:0;right:0;text-align:center;font-size:0.62em;padding:10px}.watermark.svelte-1msp5uj.svelte-1msp5uj{position:absolute;bottom:0;right:0;padding:10px;opacity:0.1;color:black;font-size:1.2vw}#patrick-card.svelte-1msp5uj.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj.svelte-1msp5uj{background-color:var(--patrick-color);font-family:var(--patrick-font);text-transform:var(--patrick-text-transform)}#ingwon-card.svelte-1msp5uj.svelte-1msp5uj{background-color:var(--ingwon-color);font-family:var(--ingwon-font);text-transform:var(--ingwon-text-transform)}#patrick-card.svelte-1msp5uj .bottom-info.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .bottom-info.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .bottom-info.svelte-1msp5uj{position:absolute;bottom:0;left:0;right:0;text-align:center;font-size:0.62em;padding:10px;font-family:inherit;text-transform:inherit}#patrick-card.svelte-1msp5uj .phone-number.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .phone-number.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .phone-number.svelte-1msp5uj{position:absolute;top:20px;left:25px;font-size:0.95em;margin:0;font-family:inherit;text-transform:inherit}#patrick-card.svelte-1msp5uj .company.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .company.svelte-1msp5uj{font-size:0.95em;font-family:inherit;text-transform:inherit}#ingwon-card.svelte-1msp5uj .company.svelte-1msp5uj{font-size:0.95em;font-family:inherit;text-transform:inherit;text-align:center}#ingwon-card.svelte-1msp5uj .company-section.svelte-1msp5uj{text-align:center}#patrick-card.svelte-1msp5uj .murders-and-executions.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .murders-and-executions.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .murders-and-executions.svelte-1msp5uj{font-size:0.52em;font-family:inherit;text-transform:inherit}#patrick-card.svelte-1msp5uj .first-name.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .first-name.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .first-name.svelte-1msp5uj{font-size:0.75em;font-family:inherit;text-transform:inherit}#patrick-card.svelte-1msp5uj .last-name.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .last-name.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .last-name.svelte-1msp5uj{font-size:0.9em;font-family:inherit;text-transform:inherit}#patrick-card.svelte-1msp5uj .title.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .title.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .title.svelte-1msp5uj{font-size:0.76em;font-family:inherit;text-transform:inherit}#patrick-card.svelte-1msp5uj .watermark.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .watermark.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .watermark.svelte-1msp5uj{display:none;font-family:inherit;text-transform:inherit}#van-patten-card.svelte-1msp5uj.svelte-1msp5uj{background-color:var(--van-patten-color);font-family:var(--van-patten-font);text-transform:var(--van-patten-text-transform)}#van-patten-card.svelte-1msp5uj .bottom-info.svelte-1msp5uj{font-size:0.5em;padding-bottom:15px;font-family:var(--van-patten-font);text-transform:var(--van-patten-text-transform)}#van-patten-card.svelte-1msp5uj .phone-number.svelte-1msp5uj{font-size:0.76em;font-family:inherit;text-transform:inherit}#van-patten-card.svelte-1msp5uj .company.svelte-1msp5uj{font-size:0.76em;font-family:inherit;text-transform:inherit}#van-patten-card.svelte-1msp5uj .murders-and-executions.svelte-1msp5uj{font-size:0.61em;text-transform:none;font-family:inherit;text-transform:none}#van-patten-card.svelte-1msp5uj .first-name.svelte-1msp5uj{font-size:0.7em;font-weight:bold;font-family:inherit;text-transform:inherit}#van-patten-card.svelte-1msp5uj .last-name.svelte-1msp5uj{font-size:0.75em;font-weight:bold;font-family:inherit;text-transform:inherit}#van-patten-card.svelte-1msp5uj .title.svelte-1msp5uj{font-size:0.8em;text-transform:none;font-family:inherit;text-transform:inherit}#van-patten-card.svelte-1msp5uj .watermark.svelte-1msp5uj{display:none;font-family:inherit;text-transform:inherit}#bryce-card.svelte-1msp5uj.svelte-1msp5uj{background-color:var(--bryce-color);font-family:var(--bryce-font);text-transform:var(--bryce-text-transform)}#bryce-card.svelte-1msp5uj .bottom-info.svelte-1msp5uj{font-size:0.5em;padding-bottom:15px;font-family:inherit;text-transform:inherit}#bryce-card.svelte-1msp5uj .phone-number.svelte-1msp5uj{font-size:0.76em;font-family:inherit;text-transform:inherit}#bryce-card.svelte-1msp5uj .company.svelte-1msp5uj{font-size:0.76em;font-family:inherit;text-transform:inherit}#bryce-card.svelte-1msp5uj .murders-and-executions.svelte-1msp5uj{font-size:0.51em;text-transform:none;font-family:inherit;text-transform:inherit}#bryce-card.svelte-1msp5uj .first-name.svelte-1msp5uj{font-size:0.7em;font-family:inherit;text-transform:inherit}#bryce-card.svelte-1msp5uj .last-name.svelte-1msp5uj{font-size:0.75em;font-family:inherit;text-transform:inherit}#bryce-card.svelte-1msp5uj .title.svelte-1msp5uj{font-size:0.65em;text-transform:none;font-family:inherit;text-transform:inherit}#bryce-card.svelte-1msp5uj .watermark.svelte-1msp5uj{display:none}#allen-card.svelte-1msp5uj.svelte-1msp5uj{background-color:var(--allen-color);font-family:var(--allen-font);text-transform:var(--allen-text-transform)}#allen-card.svelte-1msp5uj .bottom-info.svelte-1msp5uj{font-size:0.7em;padding-bottom:15px;font-family:inherit;text-transform:inherit}#allen-card.svelte-1msp5uj .phone-number.svelte-1msp5uj{font-size:0.9em;font-family:inherit;text-transform:inherit}#allen-card.svelte-1msp5uj .company.svelte-1msp5uj{font-size:0.9em;font-family:inherit;text-transform:inherit}#allen-card.svelte-1msp5uj .murders-and-executions.svelte-1msp5uj{font-size:0.51em;font-family:inherit;text-transform:inherit}#allen-card.svelte-1msp5uj .first-name.svelte-1msp5uj{font-size:0.8em;font-weight:bold;font-family:inherit;text-transform:inherit}#allen-card.svelte-1msp5uj .last-name.svelte-1msp5uj{font-size:0.9em;font-weight:bold;font-family:inherit;text-transform:inherit}#allen-card.svelte-1msp5uj .title.svelte-1msp5uj{font-size:0.6em;font-family:inherit;text-transform:inherit}@media(min-width: 1100px){.business-card.svelte-1msp5uj p.svelte-1msp5uj{font-size:1.6vw}.murders-and-executions.svelte-1msp5uj.svelte-1msp5uj{font-size:0.87vw}.title.svelte-1msp5uj.svelte-1msp5uj{font-size:1.4vw}.bottom-info.svelte-1msp5uj.svelte-1msp5uj{font-size:1vw}#patrick-card.svelte-1msp5uj .phone-number.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .phone-number.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .phone-number.svelte-1msp5uj{font-size:1.6vw}#patrick-card.svelte-1msp5uj .company.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .company.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .company.svelte-1msp5uj{font-size:1.6vw}#patrick-card.svelte-1msp5uj .murders-and-executions.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .murders-and-executions.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .murders-and-executions.svelte-1msp5uj{font-size:0.87vw}#patrick-card.svelte-1msp5uj .bottom-info.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .bottom-info.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .bottom-info.svelte-1msp5uj{font-size:1vw}#patrick-card.svelte-1msp5uj .title.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .title.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .title.svelte-1msp5uj{font-size:1.1vw}#patrick-card.svelte-1msp5uj .first-name.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .first-name.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .first-name.svelte-1msp5uj{font-size:1.25vw}#patrick-card.svelte-1msp5uj .last-name.svelte-1msp5uj,#patrick-alt-card.svelte-1msp5uj .last-name.svelte-1msp5uj,#ingwon-card.svelte-1msp5uj .last-name.svelte-1msp5uj{font-size:1.6vw}#van-patten-card.svelte-1msp5uj .phone-number.svelte-1msp5uj{font-size:1.1vw}#van-patten-card.svelte-1msp5uj .company.svelte-1msp5uj{font-size:1.1vw}#van-patten-card.svelte-1msp5uj .murders-and-executions.svelte-1msp5uj{font-size:0.89vw;text-transform:none}#van-patten-card.svelte-1msp5uj .bottom-info.svelte-1msp5uj{font-size:0.8vw;padding-bottom:35px}#van-patten-card.svelte-1msp5uj .title.svelte-1msp5uj{font-size:1.5vw;text-transform:none}#van-patten-card.svelte-1msp5uj .first-name.svelte-1msp5uj{font-size:1.4vw}#van-patten-card.svelte-1msp5uj .last-name.svelte-1msp5uj{font-size:1.6vw;font-weight:bold}#bryce-card.svelte-1msp5uj .phone-number.svelte-1msp5uj{padding-top:20px;font-size:1.1vw}#bryce-card.svelte-1msp5uj .company.svelte-1msp5uj{padding-top:20px;font-size:1.1vw}#bryce-card.svelte-1msp5uj .murders-and-executions.svelte-1msp5uj{font-size:0.74vw;text-transform:none}#bryce-card.svelte-1msp5uj .bottom-info.svelte-1msp5uj{font-size:0.9vw;padding-bottom:20px}#bryce-card.svelte-1msp5uj .title.svelte-1msp5uj{font-size:1.2vw;text-transform:none}#bryce-card.svelte-1msp5uj .first-name.svelte-1msp5uj{font-size:1.4vw}#bryce-card.svelte-1msp5uj .last-name.svelte-1msp5uj{font-size:1.6vw}#allen-card.svelte-1msp5uj .phone-number.svelte-1msp5uj{font-size:1.2vw}#allen-card.svelte-1msp5uj .company.svelte-1msp5uj{font-size:1.2vw}#allen-card.svelte-1msp5uj .murders-and-executions.svelte-1msp5uj{font-size:0.685vw}#allen-card.svelte-1msp5uj .bottom-info.svelte-1msp5uj{font-size:1.2vw;padding-bottom:20px}#allen-card.svelte-1msp5uj .title.svelte-1msp5uj{font-size:1.2vw}#allen-card.svelte-1msp5uj .first-name.svelte-1msp5uj{font-size:1.6vw;font-weight:bold}#allen-card.svelte-1msp5uj .last-name.svelte-1msp5uj{font-size:1.8vw;font-weight:bold}}",
  map: null
};
const Psycho = (0, import_index_1e0e4ae3.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $card_values, $$unsubscribe_card_values;
  let $watermark, $$unsubscribe_watermark;
  let $murders_and_executions, $$unsubscribe_murders_and_executions;
  let $bottom_info, $$unsubscribe_bottom_info;
  let $phone_number, $$unsubscribe_phone_number;
  let $title, $$unsubscribe_title;
  let $company, $$unsubscribe_company;
  let $last_name, $$unsubscribe_last_name;
  let $first_name, $$unsubscribe_first_name;
  let $whose_card, $$unsubscribe_whose_card;
  let $site_card_mapping, $$unsubscribe_site_card_mapping;
  let $page, $$unsubscribe_page;
  $$unsubscribe_card_values = (0, import_index_1e0e4ae3.a)(import_Header_svelte_svelte_type_style_lang_e3e77909.c, (value) => $card_values = value);
  $$unsubscribe_watermark = (0, import_index_1e0e4ae3.a)(import_Header_svelte_svelte_type_style_lang_e3e77909.w, (value) => $watermark = value);
  $$unsubscribe_murders_and_executions = (0, import_index_1e0e4ae3.a)(import_Header_svelte_svelte_type_style_lang_e3e77909.m, (value) => $murders_and_executions = value);
  $$unsubscribe_bottom_info = (0, import_index_1e0e4ae3.a)(import_Header_svelte_svelte_type_style_lang_e3e77909.b, (value) => $bottom_info = value);
  $$unsubscribe_phone_number = (0, import_index_1e0e4ae3.a)(import_Header_svelte_svelte_type_style_lang_e3e77909.p, (value) => $phone_number = value);
  $$unsubscribe_title = (0, import_index_1e0e4ae3.a)(import_Header_svelte_svelte_type_style_lang_e3e77909.t, (value) => $title = value);
  $$unsubscribe_company = (0, import_index_1e0e4ae3.a)(import_Header_svelte_svelte_type_style_lang_e3e77909.a, (value) => $company = value);
  $$unsubscribe_last_name = (0, import_index_1e0e4ae3.a)(import_Header_svelte_svelte_type_style_lang_e3e77909.l, (value) => $last_name = value);
  $$unsubscribe_first_name = (0, import_index_1e0e4ae3.a)(import_Header_svelte_svelte_type_style_lang_e3e77909.f, (value) => $first_name = value);
  $$unsubscribe_whose_card = (0, import_index_1e0e4ae3.a)(import_Header_svelte_svelte_type_style_lang_e3e77909.d, (value) => $whose_card = value);
  $$unsubscribe_site_card_mapping = (0, import_index_1e0e4ae3.a)(import_Header_svelte_svelte_type_style_lang_e3e77909.s, (value) => $site_card_mapping = value);
  $$unsubscribe_page = (0, import_index_1e0e4ae3.a)(page, (value) => $page = value);
  for (let i = 0; i < $site_card_mapping.length; i++) {
    if ($page.url.pathname == ((_a = $site_card_mapping[i]) == null ? void 0 : _a.section)) {
      (0, import_index_1e0e4ae3.b)(import_Header_svelte_svelte_type_style_lang_e3e77909.d, $whose_card = $site_card_mapping[i].whose_card, $whose_card);
      console.log("whose card value is now: " + $whose_card);
      for (let j = 0; j < $card_values.length; j++) {
        if ($card_values[j].whose_card == $whose_card) {
          (0, import_index_1e0e4ae3.b)(import_Header_svelte_svelte_type_style_lang_e3e77909.f, $first_name = $card_values[j].first_name, $first_name);
          (0, import_index_1e0e4ae3.b)(import_Header_svelte_svelte_type_style_lang_e3e77909.l, $last_name = $card_values[j].last_name, $last_name);
          (0, import_index_1e0e4ae3.b)(import_Header_svelte_svelte_type_style_lang_e3e77909.a, $company = $card_values[j].company, $company);
          (0, import_index_1e0e4ae3.b)(import_Header_svelte_svelte_type_style_lang_e3e77909.t, $title = $card_values[j].title, $title);
          (0, import_index_1e0e4ae3.b)(import_Header_svelte_svelte_type_style_lang_e3e77909.p, $phone_number = $card_values[j].phone_number, $phone_number);
          (0, import_index_1e0e4ae3.b)(import_Header_svelte_svelte_type_style_lang_e3e77909.b, $bottom_info = $card_values[j].bottom_info, $bottom_info);
          (0, import_index_1e0e4ae3.b)(import_Header_svelte_svelte_type_style_lang_e3e77909.m, $murders_and_executions = $card_values[j].murders_and_executions, $murders_and_executions);
          (0, import_index_1e0e4ae3.b)(import_Header_svelte_svelte_type_style_lang_e3e77909.w, $watermark = $card_values[j].watermark, $watermark);
          break;
        }
      }
      break;
    }
  }
  $$result.css.add(css$4);
  $$unsubscribe_card_values();
  $$unsubscribe_watermark();
  $$unsubscribe_murders_and_executions();
  $$unsubscribe_bottom_info();
  $$unsubscribe_phone_number();
  $$unsubscribe_title();
  $$unsubscribe_company();
  $$unsubscribe_last_name();
  $$unsubscribe_first_name();
  $$unsubscribe_whose_card();
  $$unsubscribe_site_card_mapping();
  $$unsubscribe_page();
  return `<main class="${"svelte-1msp5uj"}"><div class="${"container-card svelte-1msp5uj"}"><div class="${"business-card svelte-1msp5uj"}"${(0, import_index_1e0e4ae3.d)("id", $whose_card, 0)}><p class="${"phone-number svelte-1msp5uj"}">${(0, import_index_1e0e4ae3.e)($phone_number)}</p>
		    <div class="${"company-section svelte-1msp5uj"}"><p class="${"company svelte-1msp5uj"}">${(0, import_index_1e0e4ae3.e)($company)}</p>
			    <p class="${"murders-and-executions svelte-1msp5uj"}">${(0, import_index_1e0e4ae3.e)($murders_and_executions)}</p></div>
		    <div class="${"name-and-title svelte-1msp5uj"}"><div class="${"names svelte-1msp5uj"}"><p class="${"first-name svelte-1msp5uj"}">${(0, import_index_1e0e4ae3.e)($first_name)}</p>
				    <p class="${"last-name svelte-1msp5uj"}">${(0, import_index_1e0e4ae3.e)($last_name)}</p></div>
			    <p class="${"title svelte-1msp5uj"}">${(0, import_index_1e0e4ae3.e)($title)}</p></div>
		    <p class="${"bottom-info svelte-1msp5uj"}">${(0, import_index_1e0e4ae3.e)($bottom_info)}</p>
		    <div class="${"watermark svelte-1msp5uj"}">${(0, import_index_1e0e4ae3.e)($watermark)}</div>
		    <p class="${"svelte-1msp5uj"}"></p></div></div></main>`;
});
const css$3 = {
  code: "header.svelte-1sf60ew{background-color:var(--background-color);color:var(--text-color);font-family:var(--font);display:flex;justify-content:space-between}div.svelte-1sf60ew{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0)}",
  map: null
};
const Header = (0, import_index_1e0e4ae3.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<header class="${"svelte-1sf60ew"}"><div class="${"corner svelte-1sf60ew"}"></div>

	${(0, import_index_1e0e4ae3.v)(Psycho, "Psycho").$$render($$result, {}, {}, {})}

	<div class="${"corner svelte-1sf60ew"}"></div>
</header>`;
});
const defaultValue = "";
const initialValue = defaultValue;
const theme = (0, import_Header_svelte_svelte_type_style_lang_e3e77909.e)(initialValue);
theme.subscribe((value) => {
});
var PowerSwitch_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: `.dark-theme{--font:'Fira Code' !important;font-size:9px !important;--font-size:9px;--primary-color:#152028 !important;--secondary-color:#152028 !important;--tertiary-color:#152028 !important;--background-color:#152028 !important;--accent-color:rgb(216, 242, 202) !important;--heading-color:rgb(89,255,0,0.7) !important;--text-color:rgb(89,255,0) !important;--background-without-opacity:rgba(255, 255, 255, 0.7) !important;;}.power-switch.svelte-kx6rms.svelte-kx6rms.svelte-kx6rms{--color-invert:rgb(89, 255, 50);--width:55px;--height:63px;margin-left:-12px;padding-left:0;position:relative;z-index:1001;display:flex;justify-content:left;width:var(--width);height:var(--height)}.power-switch.svelte-kx6rms .button.svelte-kx6rms.svelte-kx6rms{width:100%;height:100%;display:flex;margin-left:0;padding-left:0;justify-content:left;position:relative}.power-switch.svelte-kx6rms .button.svelte-kx6rms.svelte-kx6rms:after{content:"";width:100%;height:100%;position:absolute;background:radial-gradient(circle closest-side, var(--color-invert), transparent);opacity:0;transition:opacity 1s ease, transform 1s ease;transform:perspective(1px) translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.power-switch.svelte-kx6rms .button .power-on.svelte-kx6rms.svelte-kx6rms,.power-switch.svelte-kx6rms .button .power-off.svelte-kx6rms.svelte-kx6rms{height:100%;width:100%;position:absolute;z-index:1;fill:none;stroke-width:10px;stroke-linecap:round;stroke-linejoin:round}.power-switch.svelte-kx6rms .button .power-on.svelte-kx6rms.svelte-kx6rms{stroke:var(--color-invert)}.power-switch.svelte-kx6rms .button .power-off.svelte-kx6rms.svelte-kx6rms{stroke:var(--text-color)}.power-switch.svelte-kx6rms :hover .power-off svg.svelte-kx6rms.svelte-kx6rms{stroke:#222 !important;opacity:1 !important}.power-switch.svelte-kx6rms .button .power-off .svelte-kx6rms.svelte-kx6rms:hover{stroke:#222;opacity:1}.power-switch.svelte-kx6rms .button .power-on .line.svelte-kx6rms.svelte-kx6rms,.power-switch.svelte-kx6rms .button .power-off .line.svelte-kx6rms.svelte-kx6rms{opacity:0.25}.power-switch.svelte-kx6rms .button .power-on .circle.svelte-kx6rms.svelte-kx6rms,.power-switch.svelte-kx6rms .button .power-off .circle.svelte-kx6rms.svelte-kx6rms{opacity:0.25;transform:rotate(-58deg);transform-origin:center 33px;stroke-dasharray:220;stroke-dashoffset:40}.power-switch.svelte-kx6rms .button .power-on.svelte-kx6rms.svelte-kx6rms{filter:drop-shadow(0px 0px 6px rgba(255, 255, 255, 1))}.power-switch.svelte-kx6rms .button .power-on .line.svelte-kx6rms.svelte-kx6rms{opacity:0;transition:opacity 0.3s ease 1s}.power-switch.svelte-kx6rms .button .power-on .circle.svelte-kx6rms.svelte-kx6rms{opacity:1;stroke-dashoffset:220;transition:transform 0s ease, stroke-dashoffset 1s ease 0s}.power-switch.svelte-kx6rms input.svelte-kx6rms.svelte-kx6rms{position:absolute;height:100%;width:100%;z-index:2;cursor:pointer;opacity:0}.power-switch.svelte-kx6rms input.svelte-kx6rms:checked+.button.svelte-kx6rms:after{opacity:0.20;transform:scale(2) perspective(1px) translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:opacity 0.5s ease, transform 0.5s ease}.power-switch.svelte-kx6rms input:checked+.button .power-on.svelte-kx6rms.svelte-kx6rms,.power-switch.svelte-kx6rms input:checked+.button .power-off.svelte-kx6rms.svelte-kx6rms{-webkit-animation:svelte-kx6rms-click-animation 0.3s ease forwards;animation:svelte-kx6rms-click-animation 0.3s ease forwards;transform:scale(1)}.power-switch.svelte-kx6rms input:checked+.button .power-on .line.svelte-kx6rms.svelte-kx6rms,.power-switch.svelte-kx6rms input:checked+.button .power-off .line.svelte-kx6rms.svelte-kx6rms{-webkit-animation:svelte-kx6rms-line-animation 0.8s ease-in forwards;animation:svelte-kx6rms-line-animation 0.8s ease-in forwards}.power-switch.svelte-kx6rms input:checked+.button .power-on .circle.svelte-kx6rms.svelte-kx6rms,.power-switch.svelte-kx6rms input:checked+.button .power-off .circle.svelte-kx6rms.svelte-kx6rms{transform:rotate(302deg)}.power-switch.svelte-kx6rms input:checked+.button .power-on .line.svelte-kx6rms.svelte-kx6rms{opacity:1;transition:opacity 0.05s ease-in 0.55s}.power-switch.svelte-kx6rms input:checked+.button .power-on .circle.svelte-kx6rms.svelte-kx6rms{transform:rotate(302deg);stroke-dashoffset:40;transition:transform 0.4s ease 0.2s, stroke-dashoffset 0.4s ease 0.2s}@-webkit-keyframes svelte-kx6rms-line-animation{0%{transform:translateY(0)}10%{transform:translateY(10px)}40%{transform:translateY(-25px)}60%{transform:translateY(-25px)}85%{transform:translateY(10px)}100%{transform:translateY(0px)}}@keyframes svelte-kx6rms-line-animation{0%{transform:translateY(0)}10%{transform:translateY(10px)}40%{transform:translateY(-25px)}60%{transform:translateY(-25px)}85%{transform:translateY(10px)}100%{transform:translateY(0px)}}@-webkit-keyframes svelte-kx6rms-click-animation{0%{transform:scale(1)}50%{transform:scale(0.9)}100%{transform:scale(1)}}@keyframes svelte-kx6rms-click-animation{0%{transform:scale(1)}50%{transform:scale(0.9)}100%{transform:scale(1)}}`,
  map: null
};
const PowerSwitch = (0, import_index_1e0e4ae3.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_theme;
  $$unsubscribe_theme = (0, import_index_1e0e4ae3.a)(theme, (value) => value);
  let powerOn = false;
  $$result.css.add(css$2);
  $$unsubscribe_theme();
  return `<div class="${"power-switch svelte-kx6rms"}"><input type="${"checkbox"}" class="${"svelte-kx6rms"}"${(0, import_index_1e0e4ae3.d)("checked", powerOn, 1)}>
    <div class="${"button svelte-kx6rms"}"><svg class="${"power-off svelte-kx6rms"}"><use xlink:href="${"#line"}" class="${"line svelte-kx6rms"}"></use><use xlink:href="${"#circle"}" class="${"circle svelte-kx6rms"}"></use></svg>
      <svg class="${"power-on svelte-kx6rms"}"><use xlink:href="${"#line"}" class="${"line svelte-kx6rms"}"></use><use xlink:href="${"#circle"}" class="${"circle svelte-kx6rms"}"></use></svg></div></div>

  
  <svg xmlns="${"http://www.w3.org/2000/svg"}" style="${"display: none;"}"><symbol xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 150 150"}" id="${"line"}"><line x1="${"75"}" y1="${"34"}" x2="${"75"}" y2="${"83"}"></line></symbol><symbol xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 150 150"}" id="${"circle"}"><circle cx="${"75"}" cy="${"80"}" r="${"35"}"></circle></symbol></svg>`;
});
var Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".navbar.svelte-12di51q.svelte-12di51q{display:flex;top:0;left:0;right:0;width:100%;z-index:1000;margin:auto;margin-left:auto;margin-right:auto;position:-webkit-sticky;position:sticky;justify-content:safe center;background-color:var(--background-color);color:var(--text-color);opacity:1}.dropdown.svelte-12di51q.svelte-12di51q{top:0;overflow:hidden;background-color:var(--background-color);color:var(--text-color);opacity:1;z-index:999;justify-content:right;margin-right:0;padding-right:0}.dropdown-button.svelte-12di51q.svelte-12di51q{font-size:36px;background-color:var(--background-color);color:var(--text-color);opacity:1;z-index:998;border:none;font-family:var(--font);padding-left:18px;padding-right:0;padding-top:8px;padding-bottom:8px;justify-content:right;margin-right:0;cursor:pointer}.dropdown-button.svelte-12di51q.svelte-12di51q:hover{color:var(--accent-color);transition:color 1s linear}.dropdown-content.svelte-12di51q.svelte-12di51q{display:block;position:absolute;background-color:var(--background-color);color:var(--text-color);font-family:var(--font);margin:auto;margin-left:auto;margin-right:auto;opacity:0;height:0;overflow:hidden;transition:opacity 1.5s ease-out, overflow 5s ease-out}.dropdown-content.svelte-12di51q a.svelte-12di51q{background-color:var(--background-color);color:var(--text-color);text-decoration:none;display:block;font-size:2.5rem;text-indent:1.2rem;padding-left:1.5rem;padding-right:3rem;padding-bottom:1.5rem;margin-left:2rem;margin-right:1.5rem}.show{height:1 !important;opacity:0.9 !important;overflow:visible !important;transition:height 1.5s 0s, overflow 5s ease-out}a.svelte-12di51q.svelte-12di51q:hover{color:var(--accent-color)}",
  map: null
};
const Navbar = (0, import_index_1e0e4ae3.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_1e0e4ae3.a)(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `


<header class="${"navbar svelte-12di51q"}"><nav class="${"dropdown svelte-12di51q"}"><button id="${"ingwon"}" type="${"submit"}" class="${"dropdown-button svelte-12di51q"}">ingwon.
			
		</button>
		
		<nav id="${"handleDropdown"}" class="${"dropdown-content svelte-12di51q"}"><a id="${"cd"}" sveltekit:prefetch href="${"/"}" class="${["svelte-12di51q", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}">cd ~</a>

			<a id="${"about"}" sveltekit:prefetch href="${"/about"}" class="${["svelte-12di51q", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}">about</a>

			<a id="${"input"}" sveltekit:prefetch href="${"/input"}" class="${["svelte-12di51q", $page.url.pathname === "/input" ? "active" : ""].join(" ").trim()}">input</a>

			<a id="${"output"}" sveltekit:prefetch href="${"/output"}" class="${["svelte-12di51q", $page.url.pathname === "/output" ? "active" : ""].join(" ").trim()}">output</a>

			<a id="${"contact"}" sveltekit:prefetch href="${"/contact"}" class="${["svelte-12di51q", $page.url.pathname === "/contact" ? "active" : ""].join(" ").trim()}">contact</a>

			<a id="${"resume"}" sveltekit:prefetch href="${"/resume"}" class="${["svelte-12di51q", $page.url.pathname === "/resume" ? "active" : ""].join(" ").trim()}">resum\xE9</a></nav></nav>

	${(0, import_index_1e0e4ae3.v)(PowerSwitch, "PowerSwitch").$$render($$result, {}, {}, {})}

</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-6ecmj1{flex:1;display:flex;flex-direction:column;padding:1 em;min-width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box;background-color:var(--background-color)}@media(min-width: 480px){footer.svelte-6ecmj1{padding:40px 0}}",
  map: null
};
const _layout = (0, import_index_1e0e4ae3.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<script data-svelte="svelte-1pwc8th">let powerOn = false;
		let rendered = false;

		if ($theme =="dark-theme") {
        powerOn = true;
        document.body.classList.add("dark-theme");
    } 
	<\/script>`, ""}




${(0, import_index_1e0e4ae3.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-6ecmj1"}">${(0, import_index_1e0e4ae3.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-6ecmj1"}">
</footer>`;
});

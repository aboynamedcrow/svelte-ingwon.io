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
  a: () => company,
  b: () => bottom_info,
  c: () => card_values,
  d: () => whose_card,
  e: () => writable,
  f: () => first_name,
  l: () => last_name,
  m: () => murders_and_executions,
  p: () => phone_number,
  s: () => site_card_mapping,
  t: () => title,
  w: () => watermark
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1e0e4ae3 = require("./index-1e0e4ae3.js");
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = import_index_1e0e4ae3.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_1e0e4ae3.f)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = import_index_1e0e4ae3.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_1e0e4ae3.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const site_card_mapping = readable([
  { section: "/about", whose_card: "patrick-alt-card" },
  { section: "/input", whose_card: "van-patten-card" },
  { section: "/output", whose_card: "bryce-card" },
  { section: "/contact", whose_card: "allen-card" },
  { section: "/resume", whose_card: "ingwon-card" },
  { section: "/", whose_card: "patrick-card" }
]);
const whose_card = writable("patrick-card");
const first_name = writable("Patrick");
const last_name = writable("Bateman");
const company = writable("Pierce & Pierce");
const title = writable("Vice President");
const phone_number = writable("212 555 6342");
const bottom_info = writable("358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534");
const murders_and_executions = writable("Mergers And Acquisitions");
const watermark = writable("");
const card_values = readable([
  {
    whose_card: "patrick-card",
    first_name: "Patrick",
    last_name: "Bateman",
    company: "Pierce & Pierce",
    title: "Vice President",
    phone_number: "212 555 6342",
    bottom_info: "358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534",
    murders_and_executions: "Mergers And Acquisitions",
    watermark: ""
  },
  {
    whose_card: "patrick-alt-card",
    first_name: "Patrick",
    last_name: "Bateman",
    company: "Pierce & Pierce",
    title: "Vice President",
    phone_number: "212 555 6342",
    bottom_info: "358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534",
    murders_and_executions: "Murders And Executions",
    watermark: ""
  },
  {
    whose_card: "van-patten-card",
    first_name: "David",
    last_name: "Van Patten",
    company: "Pierce & Pierce",
    title: "Vice President",
    phone_number: "212 555 6342",
    bottom_info: "358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534",
    murders_and_executions: "Mergers And Acquisitions",
    watermark: ""
  },
  {
    whose_card: "bryce-card",
    first_name: "Timothy",
    last_name: "Bryce",
    company: "Pierce & Pierce",
    title: "Vice President",
    phone_number: "212 555 6342",
    bottom_info: "358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534",
    murders_and_executions: "Mergers And Acquisitions",
    watermark: ""
  },
  {
    whose_card: "allen-card",
    first_name: "Paul",
    last_name: "Allen",
    company: "Pierce & Pierce",
    title: "Vice President",
    phone_number: "212 555 6342",
    bottom_info: "358 Exchange Place New York, N.Y. 10099 FAX 212 555 6390 TELEX 10 4534",
    murders_and_executions: "Mergers And Acquisitions",
    watermark: "Paul Allen"
  },
  {
    whose_card: "ingwon-card",
    first_name: "Ingwon",
    last_name: "Chae",
    company: "Gringotts",
    title: "Builder\n& Occasional Troll",
    phone_number: "+1 617 758 9124",
    bottom_info: "224 Wythe Ave Brooklyn, N.Y. 11249 EMAIL ingwon@gmail.com",
    murders_and_executions: "Wizarding Bank",
    watermark: ""
  }
]);
var psycho_svelte_svelte_type_style_lang = "";
var Header_svelte_svelte_type_style_lang = "";

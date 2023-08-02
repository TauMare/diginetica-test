// source/typescript/utils/initNav.ts
var header = document.querySelector(`.${"header" /* Block */}`);
var toggle = header == null ? void 0 : header.querySelector(`.${"header" /* Block */}__toggle`);
var list = header == null ? void 0 : header.querySelector(`.${"header" /* Block */}__list`);
var mediaQuery = window.matchMedia("(min-width: 700px)" /* Media */);
var isNavClosed = () => toggle.getAttribute("aria-expanded") === "false";
if (header && toggle && list) {
  toggle.hidden = false;
  header.classList.add(`${"header" /* Block */}--js`);
  toggle.addEventListener("click", toggleNav);
}
function toggleNav() {
  const isWillBeOpen = isNavClosed();
  toggle.setAttribute("aria-expanded", String(isWillBeOpen));
  toggle.title = `${isWillBeOpen ? "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" : "\u041E\u0442\u043A\u0440\u044B\u0442\u044C"} \u043C\u0435\u043D\u044E'`;
  toggle.setAttribute("aria-label", toggle.title);
  list.inert = !isWillBeOpen;
}

// node_modules/.pnpm/supports-webp@3.0.0/node_modules/supports-webp/index.js
var supports_webp_default = new Promise((resolve) => {
  const image = new Image();
  image.addEventListener("error", () => resolve(false));
  image.addEventListener("load", () => resolve(image.width === 1));
  image.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=";
}).catch(() => false);

// source/typescript/utils/webp.ts
supports_webp_default.then((supported) => document.body.classList.toggle("no-webp", !supported));

// source/typescript/utils/map.ts
var map = document.querySelector("#map");
if (map) {
  map.hidden = false;
}

!function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=1)}([function(n,e,t){"use strict";t(3);function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function o(n){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function a(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function c(n,e){return(c=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var d="nexus-5";e.a=function(n){return function(e){function t(){var n,e,r,c,s,l,f;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,p=new Array(u),h=0;h<u;h++)p[h]=arguments[h];return r=this,e=!(c=(n=o(t)).call.apply(n,[this].concat(p)))||"object"!==i(c)&&"function"!=typeof c?a(r):c,s=a(e),f={device:d},(l="state")in s?Object.defineProperty(s,l,{value:f,enumerable:!0,configurable:!0,writable:!0}):s[l]=f,e}var s,l,f;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&c(n,e)}(t,e),s=t,(l=[{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement("div",{className:"df-DeviceFrameApp"},n.createElement("div",{className:"df-DeviceFrame df-DeviceFrame--".concat(this.state.device)},n.createElement("div",{className:"df-Screen-wrapper"},n.createElement("iframe",{src:window.location.href,className:"df-Screen"})))),n.createElement("div",{className:"df-DeviceMenu df-DeviceMenu--active"},n.createElement("div",{className:"df-DeviceMenu__menu"},n.createElement("select",{value:this.state.device,onChange:function(n){e.setState({device:n.target.value})}},n.createElement("option",{value:d},"Nexus 5"),n.createElement("option",{value:"nexus-6p"},"Nexus 6P"),n.createElement("option",{value:"iphone-4"},"iPhone 4"),n.createElement("option",{value:"samsung-s8"},"Samsung S8")))))}}])&&r(s.prototype,l),f&&r(s,f),t}(n.Component)}},function(n,e,t){"use strict";t.r(e),function(n){var e=t(0);n.exports=function(n,t,i,r){if(window.parent===window){var o=Object(e.a)(t);n.render(t.createElement(o,null),document.getElementById(r))}else{new MutationObserver((function(){window.location.href!==window.parent.location.href&&window.parent.history.replaceState(null,"",window.location.href)})).observe(document.getElementById(r),{attributes:!0,childList:!0,subtree:!0}),n.render(t.createElement(i,null),document.getElementById(r))}}}.call(this,t(2)(n))},function(n,e){n.exports=function(n){if(!n.webpackPolyfill){var e=Object.create(n);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(n,e,t){var i=t(4);"string"==typeof i&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};t(6)(i,r);i.locals&&(n.exports=i.locals)},function(n,e,t){(n.exports=t(5)(!1)).push([n.i,'/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n/* Document\n   ========================================================================== */\n   html {\n    font-family: sans-serif;\n    /* 1 */\n    line-height: 1.15;\n    /* 2 */\n    -ms-text-size-adjust: 100%;\n    /* 3 */\n    -webkit-text-size-adjust: 100%;\n    /* 3 */ }\n  \n  /* Sections\n     ========================================================================== */\n  /**\n   * Remove the margin in all browsers (opinionated).\n   */\n  body {\n    margin: 0; }\n  \n  /**\n   * Add the correct display in IE 9-.\n   */\n  article,\n  aside,\n  footer,\n  header,\n  nav,\n  section {\n    display: block; }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0; }\n  \n  /* Grouping content\n     ========================================================================== */\n  /**\n   * Add the correct display in IE 9-.\n   * 1. Add the correct display in IE.\n   */\n  figcaption,\n  figure,\n  main {\n    /* 1 */\n    display: block; }\n  \n  /**\n   * Add the correct margin in IE 8.\n   */\n  figure {\n    margin: 1em 40px; }\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  hr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */ }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  pre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */ }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  /**\n   * 1. Remove the gray background on active links in IE 10.\n   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n   */\n  a {\n    background-color: transparent;\n    /* 1 */\n    -webkit-text-decoration-skip: objects;\n    /* 2 */ }\n  \n  /**\n   * Remove the outline on focused links when they are also active or hovered\n   * in all browsers (opinionated).\n   */\n  a:active,\n  a:hover {\n    outline-width: 0; }\n  \n  /**\n   * 1. Remove the bottom border in Firefox 39-.\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  abbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */ }\n  \n  /**\n   * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n   */\n  b,\n  strong {\n    font-weight: inherit; }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  b,\n  strong {\n    font-weight: bolder; }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */ }\n  \n  /**\n   * Add the correct font style in Android 4.3-.\n   */\n  dfn {\n    font-style: italic; }\n  \n  /**\n   * Add the correct background and color in IE 9-.\n   */\n  mark {\n    background-color: #ff0;\n    color: #000; }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  small {\n    font-size: 80%; }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline; }\n  \n  sub {\n    bottom: -0.25em; }\n  \n  sup {\n    top: -0.5em; }\n  \n  /* Embedded content\n     ========================================================================== */\n  /**\n   * Add the correct display in IE 9-.\n   */\n  audio,\n  video {\n    display: inline-block; }\n  \n  /**\n   * Add the correct display in iOS 4-7.\n   */\n  audio:not([controls]) {\n    display: none;\n    height: 0; }\n  \n  /**\n   * Remove the border on images inside links in IE 10-.\n   */\n  img {\n    border-style: none; }\n  \n  /**\n   * Hide the overflow in IE.\n   */\n  svg:not(:root) {\n    overflow: hidden; }\n  \n  /* Forms\n     ========================================================================== */\n  /**\n   * 1. Change the font styles in all browsers (opinionated).\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: sans-serif;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */ }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  button,\n  input {\n    /* 1 */\n    overflow: visible; }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  button,\n  select {\n    /* 1 */\n    text-transform: none; }\n  \n  /**\n   * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n   *    controls in Android 4.\n   * 2. Correct the inability to style clickable types in iOS and Safari.\n   */\n  button,\n  html [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n    /* 2 */ }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0; }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText; }\n  \n  /**\n   * Change the border, margin, and padding in all browsers (opinionated).\n   */\n  fieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em; }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  legend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */ }\n  \n  /**\n   * 1. Add the correct display in IE 9-.\n   * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  progress {\n    display: inline-block;\n    /* 1 */\n    vertical-align: baseline;\n    /* 2 */ }\n  \n  /**\n   * Remove the default vertical scrollbar in IE.\n   */\n  textarea {\n    overflow: auto; }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10-.\n   * 2. Remove the padding in IE 10-.\n   */\n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */ }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto; }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  [type="search"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */ }\n  \n  /**\n   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n   */\n  [type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none; }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */ }\n  \n  /* Interactive\n     ========================================================================== */\n  /*\n   * Add the correct display in IE 9-.\n   * 1. Add the correct display in Edge, IE, and Firefox.\n   */\n  details,\n  menu {\n    display: block; }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  summary {\n    display: list-item; }\n  \n  /* Scripting\n     ========================================================================== */\n  /**\n   * Add the correct display in IE 9-.\n   */\n  canvas {\n    display: inline-block; }\n  \n  /**\n   * Add the correct display in IE.\n   */\n  template {\n    display: none; }\n  \n  /* Hidden\n     ========================================================================== */\n  /**\n   * Add the correct display in IE 10-.\n   */\n  [hidden] {\n    display: none; }\n  \n  .df-DeviceFrameApp {\n    display: flex;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 16px;\n    background-color: #f2f2f2; }\n  \n  .df-DeviceFrame {\n    position: relative;\n    margin: auto;\n    background-size: 100%;\n    background-repeat: no-repeat; }\n    .df-DeviceFrame .df-Screen-wrapper {\n      position: relative;\n      background-color: #fff;\n      z-index: 1; }\n    .df-DeviceFrame .df-Screen {\n      border: none;\n      background-color: #fff; }\n  \n  .df-DeviceFrame.df-DeviceFrame--nexus-5 {\n    width: 402.66667px;\n    height: 813.33333px;\n    min-width: 402.66667px;\n    min-height: 813.33333px;\n    background-image: url("//storage.googleapis.com/device-frame.google.com.a.appspot.com/nexus-5.png"); }\n    .df-DeviceFrame.df-DeviceFrame--nexus-5 .df-Screen-wrapper {\n      left: 21.33333px;\n      top: 86.66667px;\n      width: 360px;\n      height: 640px;\n      overflow: hidden; }\n    .df-DeviceFrame.df-DeviceFrame--nexus-5 .df-Screen {\n      width: 360px;\n      height: 640px; }\n  \n  .df-DeviceFrame.df-DeviceFrame--nexus-6p {\n    width: 446.15385px;\n    height: 911.11111px;\n    min-width: 446.15385px;\n    min-height: 911.11111px;\n    background-image: url("//storage.googleapis.com/device-frame.google.com.a.appspot.com/nexus-6p.png"); }\n    .df-DeviceFrame.df-DeviceFrame--nexus-6p .df-Screen-wrapper {\n      left: 16.57692px;\n      top: 93.05556px;\n      width: 411px;\n      height: 731px;\n      overflow: hidden; }\n    .df-DeviceFrame.df-DeviceFrame--nexus-6p .df-Screen {\n      width: 411px;\n      height: 731px; }\n  \n  .df-DeviceFrame.df-DeviceFrame--iphone-4 {\n    width: 379.5px;\n    height: 742.5px;\n    min-width: 379.5px;\n    min-height: 742.5px;\n    background-image: url("//storage.googleapis.com/device-frame.google.com.a.appspot.com/iphone-4.png"); }\n    .df-DeviceFrame.df-DeviceFrame--iphone-4 .df-Screen-wrapper {\n      left: 31.75px;\n      top: 131.25px;\n      width: 320px;\n      height: 480px;\n      overflow: hidden; }\n    .df-DeviceFrame.df-DeviceFrame--iphone-4 .df-Screen {\n      width: 320px;\n      height: 480px; }\n  \n  .df-DeviceFrame.df-DeviceFrame--samsung-s8 {\n    width: 400.80972px;\n    height: 835.62753px;\n    min-width: 400.80972px;\n    min-height: 835.62753px;\n    background-image: url("//storage.googleapis.com/device-frame.google.com.a.appspot.com/samsung-s8.png"); }\n    .df-DeviceFrame.df-DeviceFrame--samsung-s8 .df-Screen-wrapper {\n      left: 20.40486px;\n      top: 45.81377px;\n      width: 360px;\n      height: 740px;\n      border-radius: 32px;\n      overflow: hidden; }\n    .df-DeviceFrame.df-DeviceFrame--samsung-s8 .df-Screen {\n      width: 360px;\n      height: 740px; }\n  \n  @media (max-width: 479px) {\n    .df-DeviceFrame.df-DeviceFrame--nexus-5 .df-Screen, .df-DeviceFrame.df-DeviceFrame--nexus-6p .df-Screen, .df-DeviceFrame.df-DeviceFrame--iphone-4 .df-Screen, .df-DeviceFrame.df-DeviceFrame--samsung-s8 .df-Screen {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 100%; } }\n  \n  @media (orientation: landscape) and (max-height: 479px) {\n    .df-DeviceFrame.df-DeviceFrame--nexus-5 .df-Screen, .df-DeviceFrame.df-DeviceFrame--nexus-6p .df-Screen, .df-DeviceFrame.df-DeviceFrame--iphone-4 .df-Screen, .df-DeviceFrame.df-DeviceFrame--samsung-s8 .df-Screen {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 100%; } }\n  \n  .df-DeviceMenu {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    padding: 4px; }\n    .df-DeviceMenu .df-DeviceMenu__toggle {\n      width: 24px;\n      height: 24px;\n      background-image: url(\'data:image/svg+xml;utf-8,<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>\');\n      background-repeat: no-repeat;\n      opacity: 0.38;\n      cursor: pointer; }\n      .df-DeviceMenu .df-DeviceMenu__toggle:hover {\n        opacity: 0.54; }\n    .df-DeviceMenu .df-DeviceMenu__menu {\n      display: none;\n      position: absolute;\n      top: 32px;\n      right: 0;\n      background-color: #fff;\n      border: none;\n      border-radius: 2px;\n      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none; }\n      .df-DeviceMenu .df-DeviceMenu__menu > ul {\n        list-style: none;\n        margin: 0;\n        padding: 8px 0;\n        width: auto;\n        height: auto;\n        min-width: 124px; }\n        .df-DeviceMenu .df-DeviceMenu__menu > ul > li.df-DeviceMenu__item {\n          padding: 0 16px;\n          line-height: 48px;\n          font-size: 14px;\n          cursor: pointer; }\n          .df-DeviceMenu .df-DeviceMenu__menu > ul > li.df-DeviceMenu__item:hover, .df-DeviceMenu .df-DeviceMenu__menu > ul > li.df-DeviceMenu__item.df-DeviceMenu__item--selected {\n            background-color: #eee; }\n    .df-DeviceMenu.df-DeviceMenu--active .df-DeviceMenu__toggle {\n      opacity: 0.54; }\n    .df-DeviceMenu.df-DeviceMenu--active .df-DeviceMenu__menu {\n      display: block; }\n\n  ',""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var r=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),o=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot).concat(n," */")}));return[t].concat(o).concat([r]).join("\n")}var a,c,d;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var a=0;a<n.length;a++){var c=n[a];null!=c[0]&&i[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),e.push(c))}},e}},function(n,e,t){"use strict";var i,r={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function c(n,e){for(var t=[],i={},r=0;r<n.length;r++){var o=n[r],a=e.base?o[0]+e.base:o[0],c={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(c):t.push(i[a]={id:a,parts:[c]})}return t}function d(n,e){for(var t=0;t<n.length;t++){var i=n[t],o=r[i.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(v(i.parts[a],e))}else{for(var c=[];a<i.parts.length;a++)c.push(v(i.parts[a],e));r[i.id]={id:i.id,refs:1,parts:c}}}}function s(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var i=t.nc;i&&(n.attributes.nonce=i)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var l,f=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,i){var r=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=f(e,r);else{var o=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function p(n,e,t){var i=t.css,r=t.media,o=t.sourceMap;if(r&&n.setAttribute("media",r),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var h=null,m=0;function v(n,e){var t,i,r;if(e.singleton){var o=m++;t=h||(h=s(e)),i=u.bind(null,t,o,!1),r=u.bind(null,t,o,!0)}else t=s(e),i=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=c(n,e);return d(t,e),function(n){for(var i=[],o=0;o<t.length;o++){var a=t[o],s=r[a.id];s&&(s.refs--,i.push(s))}n&&d(c(n,e),e);for(var l=0;l<i.length;l++){var f=i[l];if(0===f.refs){for(var u=0;u<f.parts.length;u++)f.parts[u]();delete r[f.id]}}}}}]);
!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("react-dom"),require("react"));else if("function"==typeof define&&define.amd)define(["ReactDOM","React"],n);else{var t="object"==typeof exports?n(require("react-dom"),require("react")):n(e.ReactDOM,e.React);for(var i in t)("object"==typeof exports?exports:e)[i]=t[i]}}(window,(function(e,n){return function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(n,t){n.exports=e},function(e,t){e.exports=n},function(e,n,t){var i=t(3);"string"==typeof i&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};t(5)(i,o);i.locals&&(e.exports=i.locals)},function(e,n,t){(e.exports=t(4)(!1)).push([e.i,'/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n/* Document\n   ========================================================================== */\n   html {\n    font-family: sans-serif;\n    /* 1 */\n    line-height: 1.15;\n    /* 2 */\n    -ms-text-size-adjust: 100%;\n    /* 3 */\n    -webkit-text-size-adjust: 100%;\n    /* 3 */ }\n  \n  /* Sections\n     ========================================================================== */\n  /**\n   * Remove the margin in all browsers (opinionated).\n   */\n  body {\n    margin: 0; }\n  \n  /**\n   * Add the correct display in IE 9-.\n   */\n  article,\n  aside,\n  footer,\n  header,\n  nav,\n  section {\n    display: block; }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0; }\n  \n  /* Grouping content\n     ========================================================================== */\n  /**\n   * Add the correct display in IE 9-.\n   * 1. Add the correct display in IE.\n   */\n  figcaption,\n  figure,\n  main {\n    /* 1 */\n    display: block; }\n  \n  /**\n   * Add the correct margin in IE 8.\n   */\n  figure {\n    margin: 1em 40px; }\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  hr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */ }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  pre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */ }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  /**\n   * 1. Remove the gray background on active links in IE 10.\n   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n   */\n  a {\n    background-color: transparent;\n    /* 1 */\n    -webkit-text-decoration-skip: objects;\n    /* 2 */ }\n  \n  /**\n   * Remove the outline on focused links when they are also active or hovered\n   * in all browsers (opinionated).\n   */\n  a:active,\n  a:hover {\n    outline-width: 0; }\n  \n  /**\n   * 1. Remove the bottom border in Firefox 39-.\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  abbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */ }\n  \n  /**\n   * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n   */\n  b,\n  strong {\n    font-weight: inherit; }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  b,\n  strong {\n    font-weight: bolder; }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */ }\n  \n  /**\n   * Add the correct font style in Android 4.3-.\n   */\n  dfn {\n    font-style: italic; }\n  \n  /**\n   * Add the correct background and color in IE 9-.\n   */\n  mark {\n    background-color: #ff0;\n    color: #000; }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  small {\n    font-size: 80%; }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline; }\n  \n  sub {\n    bottom: -0.25em; }\n  \n  sup {\n    top: -0.5em; }\n  \n  /* Embedded content\n     ========================================================================== */\n  /**\n   * Add the correct display in IE 9-.\n   */\n  audio,\n  video {\n    display: inline-block; }\n  \n  /**\n   * Add the correct display in iOS 4-7.\n   */\n  audio:not([controls]) {\n    display: none;\n    height: 0; }\n  \n  /**\n   * Remove the border on images inside links in IE 10-.\n   */\n  img {\n    border-style: none; }\n  \n  /**\n   * Hide the overflow in IE.\n   */\n  svg:not(:root) {\n    overflow: hidden; }\n  \n  /* Forms\n     ========================================================================== */\n  /**\n   * 1. Change the font styles in all browsers (opinionated).\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: sans-serif;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */ }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  button,\n  input {\n    /* 1 */\n    overflow: visible; }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  button,\n  select {\n    /* 1 */\n    text-transform: none; }\n  \n  /**\n   * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n   *    controls in Android 4.\n   * 2. Correct the inability to style clickable types in iOS and Safari.\n   */\n  button,\n  html [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n    /* 2 */ }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0; }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText; }\n  \n  /**\n   * Change the border, margin, and padding in all browsers (opinionated).\n   */\n  fieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em; }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  legend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */ }\n  \n  /**\n   * 1. Add the correct display in IE 9-.\n   * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  progress {\n    display: inline-block;\n    /* 1 */\n    vertical-align: baseline;\n    /* 2 */ }\n  \n  /**\n   * Remove the default vertical scrollbar in IE.\n   */\n  textarea {\n    overflow: auto; }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10-.\n   * 2. Remove the padding in IE 10-.\n   */\n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */ }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto; }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  [type="search"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */ }\n  \n  /**\n   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n   */\n  [type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none; }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */ }\n  \n  /* Interactive\n     ========================================================================== */\n  /*\n   * Add the correct display in IE 9-.\n   * 1. Add the correct display in Edge, IE, and Firefox.\n   */\n  details,\n  menu {\n    display: block; }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  summary {\n    display: list-item; }\n  \n  /* Scripting\n     ========================================================================== */\n  /**\n   * Add the correct display in IE 9-.\n   */\n  canvas {\n    display: inline-block; }\n  \n  /**\n   * Add the correct display in IE.\n   */\n  template {\n    display: none; }\n  \n  /* Hidden\n     ========================================================================== */\n  /**\n   * Add the correct display in IE 10-.\n   */\n  [hidden] {\n    display: none; }\n  \n  .df-DeviceFrameApp {\n    display: flex;\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 16px;\n    background-color: #f2f2f2; }\n  \n  .df-DeviceFrame {\n    position: relative;\n    margin: auto;\n    background-size: 100%;\n    background-repeat: no-repeat; }\n    .df-DeviceFrame .df-Screen-wrapper {\n      position: relative;\n      background-color: #fff;\n      z-index: 1; }\n    .df-DeviceFrame .df-Screen {\n      border: none;\n      background-color: #fff; }\n  \n  .df-DeviceFrame.df-DeviceFrame--nexus-5 {\n    width: 402.66667px;\n    height: 813.33333px;\n    min-width: 402.66667px;\n    min-height: 813.33333px;\n    background-image: url("//storage.googleapis.com/device-frame.google.com.a.appspot.com/nexus-5.png"); }\n    .df-DeviceFrame.df-DeviceFrame--nexus-5 .df-Screen-wrapper {\n      left: 21.33333px;\n      top: 86.66667px;\n      width: 360px;\n      height: 640px;\n      overflow: hidden; }\n    .df-DeviceFrame.df-DeviceFrame--nexus-5 .df-Screen {\n      width: 360px;\n      height: 640px; }\n  \n  .df-DeviceFrame.df-DeviceFrame--nexus-6p {\n    width: 446.15385px;\n    height: 911.11111px;\n    min-width: 446.15385px;\n    min-height: 911.11111px;\n    background-image: url("//storage.googleapis.com/device-frame.google.com.a.appspot.com/nexus-6p.png"); }\n    .df-DeviceFrame.df-DeviceFrame--nexus-6p .df-Screen-wrapper {\n      left: 16.57692px;\n      top: 93.05556px;\n      width: 411px;\n      height: 731px;\n      overflow: hidden; }\n    .df-DeviceFrame.df-DeviceFrame--nexus-6p .df-Screen {\n      width: 411px;\n      height: 731px; }\n  \n  .df-DeviceFrame.df-DeviceFrame--iphone-4 {\n    width: 379.5px;\n    height: 742.5px;\n    min-width: 379.5px;\n    min-height: 742.5px;\n    background-image: url("//storage.googleapis.com/device-frame.google.com.a.appspot.com/iphone-4.png"); }\n    .df-DeviceFrame.df-DeviceFrame--iphone-4 .df-Screen-wrapper {\n      left: 31.75px;\n      top: 131.25px;\n      width: 320px;\n      height: 480px;\n      overflow: hidden; }\n    .df-DeviceFrame.df-DeviceFrame--iphone-4 .df-Screen {\n      width: 320px;\n      height: 480px; }\n  \n  .df-DeviceFrame.df-DeviceFrame--samsung-s8 {\n    width: 400.80972px;\n    height: 835.62753px;\n    min-width: 400.80972px;\n    min-height: 835.62753px;\n    background-image: url("//storage.googleapis.com/device-frame.google.com.a.appspot.com/samsung-s8.png"); }\n    .df-DeviceFrame.df-DeviceFrame--samsung-s8 .df-Screen-wrapper {\n      left: 20.40486px;\n      top: 45.81377px;\n      width: 360px;\n      height: 740px;\n      border-radius: 32px;\n      overflow: hidden; }\n    .df-DeviceFrame.df-DeviceFrame--samsung-s8 .df-Screen {\n      width: 360px;\n      height: 740px; }\n  \n  @media (max-width: 479px) {\n    .df-DeviceFrame.df-DeviceFrame--nexus-5 .df-Screen, .df-DeviceFrame.df-DeviceFrame--nexus-6p .df-Screen, .df-DeviceFrame.df-DeviceFrame--iphone-4 .df-Screen, .df-DeviceFrame.df-DeviceFrame--samsung-s8 .df-Screen {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 100%; } }\n  \n  @media (orientation: landscape) and (max-height: 479px) {\n    .df-DeviceFrame.df-DeviceFrame--nexus-5 .df-Screen, .df-DeviceFrame.df-DeviceFrame--nexus-6p .df-Screen, .df-DeviceFrame.df-DeviceFrame--iphone-4 .df-Screen, .df-DeviceFrame.df-DeviceFrame--samsung-s8 .df-Screen {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 100%; } }\n  \n  .df-DeviceMenu {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    padding: 4px; }\n    .df-DeviceMenu .df-DeviceMenu__toggle {\n      width: 24px;\n      height: 24px;\n      background-image: url(\'data:image/svg+xml;utf-8,<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>\');\n      background-repeat: no-repeat;\n      opacity: 0.38;\n      cursor: pointer; }\n      .df-DeviceMenu .df-DeviceMenu__toggle:hover {\n        opacity: 0.54; }\n    .df-DeviceMenu .df-DeviceMenu__menu {\n      display: none;\n      position: absolute;\n      top: 32px;\n      right: 0;\n      background-color: #fff;\n      border: none;\n      border-radius: 2px;\n      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none; }\n      .df-DeviceMenu .df-DeviceMenu__menu > ul {\n        list-style: none;\n        margin: 0;\n        padding: 8px 0;\n        width: auto;\n        height: auto;\n        min-width: 124px; }\n        .df-DeviceMenu .df-DeviceMenu__menu > ul > li.df-DeviceMenu__item {\n          padding: 0 16px;\n          line-height: 48px;\n          font-size: 14px;\n          cursor: pointer; }\n          .df-DeviceMenu .df-DeviceMenu__menu > ul > li.df-DeviceMenu__item:hover, .df-DeviceMenu .df-DeviceMenu__menu > ul > li.df-DeviceMenu__item.df-DeviceMenu__item--selected {\n            background-color: #eee; }\n    .df-DeviceMenu.df-DeviceMenu--active .df-DeviceMenu__toggle {\n      opacity: 0.54; }\n    .df-DeviceMenu.df-DeviceMenu--active .df-DeviceMenu__menu {\n      display: block; }\n\n  ',""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var o=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")}));return[t].concat(r).concat([o]).join("\n")}var a,c,d;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var a=0;a<e.length;a++){var c=e[a];null!=c[0]&&i[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),n.push(c))}},n}},function(e,n,t){"use strict";var i,o={},r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function c(e,n){for(var t=[],i={},o=0;o<e.length;o++){var r=e[o],a=n.base?r[0]+n.base:r[0],c={css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(c):t.push(i[a]={id:a,parts:[c]})}return t}function d(e,n){for(var t=0;t<e.length;t++){var i=e[t],r=o[i.id],a=0;if(r){for(r.refs++;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(v(i.parts[a],n))}else{for(var c=[];a<i.parts.length;a++)c.push(v(i.parts[a],n));o[i.id]={id:i.id,refs:1,parts:c}}}}function s(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var i=t.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,i){var o=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=f(n,o);else{var r=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}function p(e,n,t){var i=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,m=0;function v(e,n){var t,i,o;if(n.singleton){var r=m++;t=h||(h=s(n)),i=u.bind(null,t,r,!1),o=u.bind(null,t,r,!0)}else t=s(n),i=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=c(e,n);return d(t,n),function(e){for(var i=[],r=0;r<t.length;r++){var a=t[r],s=o[a.id];s&&(s.refs--,i.push(s))}e&&d(c(e,n),n);for(var l=0;l<i.length;l++){var f=i[l];if(0===f.refs){for(var u=0;u<f.parts.length;u++)f.parts[u]();delete o[f.id]}}}}},function(e,n,t){"use strict";t.r(n);var i=t(0),o=t.n(i),r=t(1),a=t.n(r);t(2);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,n){return(f=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u="nexus-5",p=function(e){function n(){var e,t,i,o,r,a,d;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var f=arguments.length,p=new Array(f),h=0;h<f;h++)p[h]=arguments[h];return i=this,t=!(o=(e=s(n)).call.apply(e,[this].concat(p)))||"object"!==c(o)&&"function"!=typeof o?l(i):o,r=l(t),d={device:u},(a="state")in r?Object.defineProperty(r,a,{value:d,enumerable:!0,configurable:!0,writable:!0}):r[a]=d,t}var t,i,o;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&f(e,n)}(n,React.Component),t=n,(i=[{key:"render",value:function(){var e=this;return React.createElement("div",null,React.createElement("div",{className:"df-DeviceFrameApp"},React.createElement("div",{className:"df-DeviceFrame df-DeviceFrame--".concat(this.state.device)},React.createElement("div",{className:"df-Screen-wrapper"},React.createElement("iframe",{src:window.location.href,className:"df-Screen"})))),React.createElement("div",{className:"df-DeviceMenu df-DeviceMenu--active"},React.createElement("div",{className:"df-DeviceMenu__menu"},React.createElement("select",{value:this.state.device,onChange:function(n){e.setState({device:n.target.value})}},React.createElement("option",{value:u},"Nexus 5"),React.createElement("option",{value:"nexus-6p"},"Nexus 6P"),React.createElement("option",{value:"iphone-4"},"iPhone 4"),React.createElement("option",{value:"samsung-s8"},"Samsung S8")))))}}])&&d(t.prototype,i),o&&d(t,o),n}();n.default=function(e,n){window.parent===window?o.a.render(a.a.createElement(p,null),document.getElementById(n)):(new MutationObserver((function(){window.location.href!==window.parent.location.href&&window.parent.history.replaceState(null,"",window.location.href)})).observe(document.getElementById(n),{attributes:!0,childList:!0,subtree:!0}),o.a.render(e,document.getElementById(n)))}}]).default}));
!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequire0734;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},e.parcelRequire0734=o),o.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return n.default(t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return n.default(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(t,e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var i=document.querySelector(".menu-open"),a=document.querySelector(".menu-burger"),c=document.querySelector(".menu-close"),u=document.querySelector(".favorites"),s=document.querySelector(".favorite-pages"),l=document.querySelector(".arrow-icon");i.addEventListener("click",(function(){a.classList.remove("is-hidden"),console.log("click")})),c.addEventListener("click",(function(){a.classList.add("is-hidden")})),u.addEventListener("mouseover",(function(){s.classList.remove("is-hidden"),l.style.transform="rotate(180deg)"})),u.addEventListener("mouseout",(function(){setTimeout((function(){s.classList.add("is-hidden"),l.style.transform="rotate(0)"}),2e3)}));var f={};function d(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){d(i,n,o,a,c,"next",t)}function c(t){d(i,n,o,a,c,"throw",t)}a(void 0)}))}};var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(t){return p.default(t)||v.default(t)||m.default(t)||y.default()};var p=g(o("kMC0W")),v=g(o("7AJDX")),y=g(o("8CtQK")),m=g(o("auk6i"));function g(t){return t&&t.__esModule?t:{default:t}}var b={},w=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function y(){}function m(){}function g(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(M([])));_&&_!==r&&n.call(_,i)&&(b=_);var x=g.prototype=y.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function M(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=M,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(b);try{regeneratorRuntime=w}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=w:Function("r","regeneratorRuntime = r")(w)}var _,x={};Object.defineProperty(x,"__esModule",{value:!0}),x.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var k=/^\s+|\s+$/g,L=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,j=/^0o[0-7]+$/i,O=parseInt,S="object"==typeof e&&e&&e.Object===Object&&e,M="object"==typeof self&&self&&self.Object===Object&&self,T=S||M||Function("return this")(),A=Object.prototype.toString,P=Math.max,N=Math.min,I=function(){return T.Date.now()};function W(e){var r=void 0===e?"undefined":t(x)(e);return!!e&&("object"==r||"function"==r)}function q(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(x)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==A.call(e)}(e))return NaN;if(W(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=W(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(k,"");var n=E.test(e);return n||j.test(e)?O(e.slice(2),n?2:8):L.test(e)?NaN:+e}_=function(t,e,r){var n,o,i,a,c,u,s=0,l=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var r=n,i=o;return n=o=void 0,s=e,a=t.apply(i,r)}function p(t){return s=t,c=setTimeout(y,e),l?h(t):a}function v(t){var r=t-u;return void 0===u||r>=e||r<0||f&&t-s>=i}function y(){var t=I();if(v(t))return m(t);c=setTimeout(y,function(t){var r=e-(t-u);return f?N(r,i-(t-s)):r}(t))}function m(t){return c=void 0,d&&n?h(t):(n=o=void 0,a)}function g(){var t=I(),r=v(t);if(n=arguments,o=this,u=t,r){if(void 0===c)return p(u);if(f)return c=setTimeout(y,e),h(u)}return void 0===c&&(c=setTimeout(y,e)),a}return e=q(e)||0,W(r)&&(l=!!r.leading,i=(f="maxWait"in r)?P(q(r.maxWait)||0,e):i,d="trailing"in r?!!r.trailing:d),g.cancel=function(){void 0!==c&&clearTimeout(c),s=0,n=u=o=c=void 0},g.flush=function(){return void 0===c?a:m(I())},g};var C=document.querySelector(".cocktails__list"),D=3,H=document.querySelector('[name="cocktail-search"]');function z(){return F.apply(this,arguments)}function F(){return(F=t(f)(t(b).mark((function e(){var r,n,o;return t(b).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,innerWidth<768?D=3:innerWidth>=768&&innerWidth<1200?D=6:innerWidth>=1200&&(D=9),randomCocktailsArray=[],r=0;case 4:if(!(r<D)){e.next=13;break}return e.next=8,G();case 8:o=e.sent,(n=randomCocktailsArray).push.apply(n,t(h)(o.drinks));case 10:r++,e.next=4;break;case 13:C.innerHTML=randomCocktailsArray.map(U).join(""),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function G(){return R.apply(this,arguments)}function R(){return(R=t(f)(t(b).mark((function e(){var r;return t(b).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}window.addEventListener("resize",t(_)((function(){console.log("resizing viewport"),(innerWidth<768&&""===H||innerWidth>=768&&""===H||innerWidth>=1200&&""===H)&&z()}),500)),z();var $,U=function(t){var e=t.strDrink,r=t.strDrinkThumb,n=t.idDrink;return'\n<li class="coctails__item">\n  <img src="'.concat(r,'" alt="').concat(e,'" width="280" height="280" />\n  <h2 class="cocktails__item-title">').concat(e,'</h2>\n  <div class="coctails__btns">\n    <button class="btn__read-more" type="button">\n      Learn more\n    </button>\n    <button id=\'').concat(n,'\' class="btn__like" type="button">\n      Add to\n      <svg class="btn__like-icon"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">\n      <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>\n      <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>\n      </symbol></use></svg>\n    </button>\n  </div>\n</li>\n')},B=document.querySelector(".cocktails__list"),J=document.querySelector('[name="cocktail-search"]');function K(){return Q.apply(this,arguments)}function Q(){return(Q=t(f)(t(b).mark((function e(){var r,n,o,i,a,c,u,s,l,f,d,h,p,v;return t(b).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v=function(){return console.log("addTemplateToMarkup"),i=n.slice(h,p),B.innerHTML=i.map(V).join("")},t.prev=1,t.next=4,X(J.value);case 4:if(r=t.sent,n=r.drinks,B.innerHTML="",null!==n){t.next=10;break}return B.innerHTML="<h2>НІЦ НЕМА</h2>",t.abrupt("return");case 10:for(o=document.querySelectorAll(".pages__link"),innerWidth<=320?$=3:innerWidth>=768&&innerWidth<1200?$=6:innerWidth>=1200&&($=9),i=n.slice(0,$),B.insertAdjacentHTML("beforeend",i.map(V).join("")),a=!0,c=!1,u=void 0,t.prev=16,s=o[Symbol.iterator]();!(a=(l=s.next()).done);a=!0)f=l.value,d=f.textContent,p=(h=(+d-1)*$)+$,f.addEventListener("click",v);t.next=24;break;case 20:t.prev=20,t.t0=t.catch(16),c=!0,u=t.t0;case 24:t.prev=24,t.prev=25,a||null==s.return||s.return();case 27:if(t.prev=27,!c){t.next=30;break}throw u;case 30:return t.finish(27);case 31:return t.finish(24);case 32:t.next=37;break;case 34:throw t.prev=34,t.t1=t.catch(1),new Error("Помилка в actionOnIput ===> "+t.t1.message);case 37:case"end":return t.stop()}}),e,null,[[1,34],[16,20,24,32],[25,,27,31]])})))).apply(this,arguments)}function X(t){return Y.apply(this,arguments)}function Y(){return(Y=t(f)(t(b).mark((function e(r){return t(b).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("перед фетчом"),t.next=4,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=".concat(r)).then((function(t){return t.json()}));case 4:return t.abrupt("return",t.sent);case 7:throw t.prev=7,t.t0=t.catch(0),new Error("Помилка при ФЕТЧІ ===> "+t.t0.message);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function V(t){var e=t.strDrinkThumb,r=t.strDrink,n=t.idDrink;return'\n<li class="coctails__item">\n  <img src="'.concat(e,'" alt="').concat(r,'" width="280" height="280" />\n  <h2 class="cocktails__item-title">').concat(r,'</h2>\n  <div class="coctails__btns">\n    <button class="btn__read-more" type="button">\n      Learn more\n    </button>\n    <button id=\'').concat(n,'\' class="btn__like" type="button">\n      Add to\n      <svg class="btn__like-icon"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">\n      <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>\n      <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>\n      </symbol></use></svg>\n    </button>\n  </div>\n</li>\n')}J.addEventListener("change",K),window.addEventListener("resize",t(_)((function(){console.log("resizing viewport"),K()}),500));var Z=[];setTimeout((function(){!function(){var t=localStorage.getItem("drinksId");if(t){console.log(t.split(",")),t.split(",").forEach((function(t){return Z.push(t)}))}}();var t=document.querySelectorAll(".btn__like");function e(t){0!==t.target.id.length&&(Z.includes(t.target.id)?(Z.splice(Z.indexOf(t.target.id),1),t.path[0].lastElementChild.classList.remove("active-like-btn")):(Z.push(t.target.id),t.path[0].lastElementChild.classList.add("active-like-btn")),localStorage.setItem("drinksId",Z),console.log(Z))}console.log(t),t.forEach((function(t){return t.addEventListener("click",e)}))}),5e3)}();
//# sourceMappingURL=ingridients.217551dc.js.map

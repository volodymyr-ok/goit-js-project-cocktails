!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequire0734;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequire0734=o),o.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return r.default(t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}})),o.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),o.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return r.default(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(t,e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}}));var i=document.querySelector(".menu-open"),c=document.querySelector(".menu-burger"),a=document.querySelector(".menu-close"),u=document.querySelector(".favorites"),s=document.querySelector(".favorite"),l=document.querySelector(".favorite-pages"),d=document.querySelector(".favorite-pages-desk"),f=document.querySelector(".arrow-icon");i.addEventListener("click",(function(){c.classList.remove("is-hidden"),console.log("click")})),a.addEventListener("click",(function(){c.classList.add("is-hidden")})),u.addEventListener("mouseover",(function(){l.classList.remove("is-hidden"),f.style.transform="rotate(180deg)"})),u.addEventListener("mouseout",(function(){setTimeout((function(){l.classList.add("is-hidden"),f.style.transform="rotate(0)"}),5e3)})),s.addEventListener("mouseover",(function(){d.classList.remove("is-hidden")})),s.addEventListener("mouseout",(function(){setTimeout((function(){d.classList.add("is-hidden")}),5e3)}));var h={};function p(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){p(i,r,o,c,a,"next",t)}function a(t){p(i,r,o,c,a,"throw",t)}c(void 0)}))}};var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(t){return m.default(t)||y.default(t)||b.default(t)||g.default()};var m=k(o("kMC0W")),y=k(o("7AJDX")),g=k(o("8CtQK")),b=k(o("auk6i"));function k(t){return t&&t.__esModule?t:{default:t}}var w={},x=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),c=new O(r||[]);return i._invoke=function(t,e,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return M()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=E(c,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?p:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(t,n,c),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function m(){}function y(){}function g(){}var b={};u(b,i,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(T([])));w&&w!==n&&r.call(w,i)&&(b=w);var x=g.prototype=m.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,i,c,a){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,a)}))}a(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:M}}function M(){return{value:e,done:!0}}return y.prototype=g,u(x,"constructor",g),u(g,"constructor",y),y.displayName=u(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new _(s(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},L(x),u(x,a,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(w);try{regeneratorRuntime=x}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=x:Function("r","regeneratorRuntime = r")(x)}var L,_={};Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var E=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,O=/^0o[0-7]+$/i,T=parseInt,M="object"==typeof e&&e&&e.Object===Object&&e,q="object"==typeof self&&self&&self.Object===Object&&self,I=M||q||Function("return this")(),C=Object.prototype.toString,N=Math.max,P=Math.min,A=function(){return I.Date.now()};function D(e){var n=void 0===e?"undefined":t(_)(e);return!!e&&("object"==n||"function"==n)}function W(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(_)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==C.call(e)}(e))return NaN;if(D(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=D(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(E,"");var r=j.test(e);return r||O.test(e)?T(e.slice(2),r?2:8):S.test(e)?NaN:+e}L=function(t,e,n){var r,o,i,c,a,u,s=0,l=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=r,i=o;return r=o=void 0,s=e,c=t.apply(i,n)}function p(t){return s=t,a=setTimeout(m,e),l?h(t):c}function v(t){var n=t-u;return void 0===u||n>=e||n<0||d&&t-s>=i}function m(){var t=A();if(v(t))return y(t);a=setTimeout(m,function(t){var n=e-(t-u);return d?P(n,i-(t-s)):n}(t))}function y(t){return a=void 0,f&&r?h(t):(r=o=void 0,c)}function g(){var t=A(),n=v(t);if(r=arguments,o=this,u=t,n){if(void 0===a)return p(u);if(d)return a=setTimeout(m,e),h(u)}return void 0===a&&(a=setTimeout(m,e)),c}return e=W(e)||0,D(n)&&(l=!!n.leading,i=(d="maxWait"in n)?N(W(n.maxWait)||0,e):i,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==a&&clearTimeout(a),s=0,r=u=o=a=void 0},g.flush=function(){return void 0===a?c:y(A())},g};var G,Q=document.querySelector(".cocktails__list"),R=document.querySelector(".input-tablet"),F=document.querySelector(".input-mobile"),H=document.querySelector("#letters"),$=document.querySelectorAll(".pages__link"),z=document.querySelector(".letters-list"),U="https://www.thecocktaildb.com/api/json/v1/1/random.php",J="https://www.thecocktaildb.com/api/json/v1/1/search.php?",K={searchMethod:"",fetchQuery:""};function X(){return Y.apply(this,arguments)}function Y(){return(Y=t(h)(t(w).mark((function e(){var n,r,o,i;return t(w).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,innerWidth<768?G=3:innerWidth>=768&&innerWidth<1280?G=6:innerWidth>=1280&&(G=9),n=[],r=0;case 4:if(!(r<G)){e.next=13;break}return e.next=8,B();case 8:i=e.sent,(o=n).push.apply(o,t(v)(i.drinks));case 10:r++,e.next=4;break;case 13:Q.innerHTML=n.map(it).join(""),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log("Помилка у getRandomCocktails",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function B(){return V.apply(this,arguments)}function V(){return(V=t(h)(t(w).mark((function e(){var n;return t(w).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(U);case 3:return n=t.sent,t.abrupt("return",n.json());case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Z(){document.querySelectorAll(".letter-item").forEach((function(t){t.classList.contains("current-letter")&&t.classList.remove("current-letter")}))}function tt(t){t.preventDefault(),Z(),K.searchMethod="s",K.fetchQuery=t.currentTarget.searchQuery.value,et(K)}function et(t){return nt.apply(this,arguments)}function nt(){return(nt=t(h)(t(w).mark((function e(n){var r,o,i,c,a,u,s,l,d,f,h,p,v,m,y;return t(w).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y=function(){return a=c.slice(v,m),Q.innerHTML=a.map(it).join("")},t.prev=1,r=n.searchMethod,o=n.fetchQuery,t.next=5,rt(r,o);case 5:if(i=t.sent,Q.innerHTML="",null!==(c=i.drinks)){t.next=12;break}return Q.innerHTML="<h2>НІЦ НЕМА</h2>",t.abrupt("return");case 12:for(innerWidth<768?G=3:innerWidth>=768&&innerWidth<1280?G=6:innerWidth>=1280&&(G=9),a=c.slice(0,G),Q.insertAdjacentHTML("beforeend",a.map(it).join("")),u=!0,s=!1,l=void 0,t.prev=16,d=$[Symbol.iterator]();!(u=(f=d.next()).done);u=!0)h=f.value,p=h.textContent,m=(v=(+p-1)*G)+G,h.addEventListener("click",y);t.next=24;break;case 20:t.prev=20,t.t0=t.catch(16),s=!0,l=t.t0;case 24:t.prev=24,t.prev=25,u||null==d.return||d.return();case 27:if(t.prev=27,!s){t.next=30;break}throw l;case 30:return t.finish(27);case 31:return t.finish(24);case 32:t.next=37;break;case 34:t.prev=34,t.t1=t.catch(1),console.log("Помилка в actionOnSearch ===> ",t.t1);case 37:case"end":return t.stop()}}),e,null,[[1,34],[16,20,24,32],[25,,27,31]])})))).apply(this,arguments)}function rt(t,e){return ot.apply(this,arguments)}function ot(){return(ot=t(h)(t(w).mark((function e(n,r){return t(w).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(J).concat(n,"=").concat(r)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log("Помилка при ФЕТЧІ ===> ",t.t0);case 9:case"end":return t.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function it(t){var e=t.strDrinkThumb,n=t.strDrink,r=t.idDrink;return'\n<li class="coctails__item">\n  <img src="'.concat(e,'" alt="').concat(n,'" width="280" height="280" />\n  <h2 class="cocktails__item-title">').concat(n,'</h2>\n  <div class="coctails__btns">\n    <button class="btn__read-more" type="button" id="').concat(r,"\">\n      Learn more\n    </button>\n    <button id='").concat(r,'\' class="btn__like" type="button">\n      Add to\n      <svg class="btn__like-icon"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">\n      <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>\n      <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>\n      </symbol></use></svg>\n    </button>\n  </div>\n</li>\n')}X(),window.addEventListener("resize",t(L)((function(){""===K.fetchQuery?X():""!==K.fetchQuery&&(console.log("resizing viewport in pagination js"),et(K))}),500)),F.addEventListener("submit",tt),R.addEventListener("submit",tt),H.addEventListener("change",(function(t){Z(),K.searchMethod="f",K.fetchQuery=t.target.value,et(K)})),z.addEventListener("click",(function(t){t.currentTarget!==t.target&&(Z(),t.target.classList.add("current-letter"),K.searchMethod="f",K.fetchQuery=t.target.textContent,et(K))}));var ct=[];function at(t){return ut.apply(this,arguments)}function ut(){return(ut=t(h)(t(w).mark((function e(n){return t(w).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("перед фетчом"),t.next=4,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(n)).then((function(t){return t.json()})).then((function(t){return t.drinks}));case 4:return t.abrupt("return",t.sent);case 7:throw t.prev=7,t.t0=t.catch(0),new Error("Помилка при ФЕТЧІ ===> "+t.t0.message);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}setTimeout((function(){function t(t){0!==t.target.id.length&&(ct.includes(t.target.id)?(ct.splice(ct.indexOf(t.target.id),1),t.path[0].lastElementChild.classList.remove("active-like-btn"),t.path[0].firstChild.textContent="Add to"):(ct.push(t.target.id),t.path[0].lastElementChild.classList.add("active-like-btn"),t.path[0].firstChild.textContent="Remove"),localStorage.setItem("drinksId",ct))}!function(){var t=localStorage.getItem("drinksId");if(t){t.split(",").forEach((function(t){return ct.push(t)}))}}(),document.querySelectorAll(".btn__like").forEach((function(e){return e.addEventListener("click",t)}))}),5e3),setTimeout((function(){var e=document.querySelectorAll(".btn__read-more"),n=document.querySelector(".footer");function r(t){return o.apply(this,arguments)}function o(){return(o=t(h)(t(w).mark((function e(n){var r,o,i,c,a,u,s,l;return t(w).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l=function(t,e){var n=e.strDrinkThumb,r=e.strDrink,o=e.strInstructions,i=e.idDrink;return a.innerHTML='<div id="modal-koktel" class="modal-coctal modal">\n        <div class="modal-content container">\n          <div class="first-part-decor">\n            <img src="'.concat(n,'" alt="').concat(r,'" class="img-coctal-desctop" />\n            <h2 class="modal-title hidden-name">').concat(r,'</h2>\n            <div class="decoration-koktels">\n              <h2 class="modal-title coctal-name">').concat(r,'</h2>\n              <h3 class="koktel-ingr">INGREDIENTS</h3>\n              <p class="after-coctal-ingr">Per cocktail</p>\n              <ul class="modal-list coctal-list">\n                ').concat(t,'\n              </ul>\n            </div>\n          </div>\n      \n          <p class="koktel-instr modal-after-title">Instractions:</p>\n          <button type="button" class="isClose">x</button>\n          <p class="koktel-instr-text modal-text">').concat(o,'\n          </p>\n          <img src="').concat(n,'" alt="').concat(r,'" class="img-coctal-modile" />\n       \n          <div class="decoration-coctal">\n            <h3 class="coctal-ingr">INGREDIENTS</h3>\n            <p class="after-coctal-ingr">Per cocktail</p>\n            <ul class="modal-list coctal-list">\n              ').concat(t,'\n            </ul>\n          </div>\n          <div class="decoration-button">\n            <button id="').concat(i,'" class="button-test">Add to favorite</button>\n          </div>\n        </div>\n      </div>')},0!==n.target.id.length){t.next=5;break}return t.abrupt("return");case 5:return id=n.target.id,t.next=8,at(id);case 8:for(ingr in r=t.sent,o=r[0],i=[],c=[],o)ingr.includes("strIngredient")&&null!==o[ingr]&&i.push(o[ingr]);for(ingr in o)ingr.includes("strMeasur")&&null!==o[ingr]&&c.push(o[ingr]);a=document.querySelector(".local-storage-ingr"),u=-1,s=i.map((function(t){return u++,'<li class="modal-item coctal-item">'.concat(c[u]||"",'\n         <a href="#" class="modal-link coctal-link">').concat(t,"</a> </li>")})).join(""),l(s,o);case 19:case"end":return t.stop()}}),e)})))).apply(this,arguments)}console.log(n),e.forEach((function(t){return t.addEventListener("click",r)}))}),2e3),setTimeout((function(){var t=document.querySelector(".button-test");console.log(t);var e=document.querySelector(".isClose"),n=document.querySelector(".modal");console.log(e),e.addEventListener("click",(function(t){console.log(t.target),n.classList.add("hidden-modal")})),t.addEventListener("click",(function(t){if(0===t.target.id.length)return;storage.includes(t.target.id)?(storage.splice(storage.indexOf(t.target.id),1),t.path[0].lastElementChild.classList.remove("active-like-btn"),t.path[0].firstChild.textContent="Add to"):(storage.push(t.target.id),t.path[0].lastElementChild.classList.add("active-like-btn"),t.path[0].firstChild.textContent="Remove");localStorage.setItem("drinksId",storage)}))}),1e4);var st=document.querySelector(".checkbox-input");function lt(){try{"dark"===localStorage.getItem("theme")?(document.querySelector("html").classList.add("dark"),st.checked=!0):(document.querySelector("html").classList.remove("dark"),st.checked=!1)}catch(t){}}console.log(st.checked=!0),document.querySelector(".checkbox-input").addEventListener("click",(function(t){"dark"===localStorage.getItem("theme")?(localStorage.removeItem("theme"),console.log(st.checked)):(localStorage.setItem("theme","dark"),console.log(st.checked)),lt()})),lt()}();
//# sourceMappingURL=ingridients.1038133e.js.map

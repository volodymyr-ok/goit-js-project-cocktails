!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire0734;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire0734=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}}));var i=document.querySelector(".menu-open"),c=document.querySelector(".menu-burger"),a=document.querySelector(".menu-close"),u=document.querySelector(".favorites"),s=document.querySelector(".favorite"),l=document.querySelector(".favorite-pages"),d=document.querySelector(".favorite-pages-desk"),f=document.querySelector(".arrow-icon");i.addEventListener("click",(function(){c.classList.remove("is-hidden"),console.log("click")})),a.addEventListener("click",(function(){c.classList.add("is-hidden")})),u.addEventListener("mouseover",(function(){l.classList.remove("is-hidden"),f.style.transform="rotate(180deg)"})),u.addEventListener("mouseout",(function(){setTimeout((function(){l.classList.add("is-hidden"),f.style.transform="rotate(0)"}),5e3)})),s.addEventListener("mouseover",(function(){d.classList.remove("is-hidden")})),d.addEventListener("mouseout",(function(){setTimeout((function(){d.classList.add("is-hidden")}),3e3)}));var p=o("bpxeT"),v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e){return h.default(e)||m.default(e)||y.default(e)||b.default()};var h=g(o("kMC0W")),m=g(o("7AJDX")),b=g(o("8CtQK")),y=g(o("auk6i"));function g(e){return e&&e.__esModule?e:{default:e}}var k=o("2TvXO"),x=o("88beK");x=o("88beK");o("6cvB7");var _,w=o("ju5c3"),S={};Object.defineProperty(S,"__esModule",{value:!0}),S.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var M=/^\s+|\s+$/g,L=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,q=/^0o[0-7]+$/i,T=parseInt,O="object"==typeof t&&t&&t.Object===Object&&t,E="object"==typeof self&&self&&self.Object===Object&&self,A=O||E||Function("return this")(),W=Object.prototype.toString,C=Math.max,I=Math.min,H=function(){return A.Date.now()};function P(t){var n=void 0===t?"undefined":e(S)(t);return!!t&&("object"==n||"function"==n)}function Q(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(S)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==W.call(t)}(t))return NaN;if(P(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=P(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(M,"");var r=j.test(t);return r||q.test(t)?T(t.slice(2),r?2:8):L.test(t)?NaN:+t}_=function(e,t,n){var r,o,i,c,a,u,s=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,c=e.apply(i,n)}function v(e){return s=e,a=setTimeout(m,t),l?p(e):c}function h(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-s>=i}function m(){var e=H();if(h(e))return b(e);a=setTimeout(m,function(e){var n=t-(e-u);return d?I(n,i-(e-s)):n}(e))}function b(e){return a=void 0,f&&r?p(e):(r=o=void 0,c)}function y(){var e=H(),n=h(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return v(u);if(d)return a=setTimeout(m,t),p(u)}return void 0===a&&(a=setTimeout(m,t)),c}return t=Q(t)||0,P(n)&&(l=!!n.leading,i=(d="maxWait"in n)?C(Q(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==a&&clearTimeout(a),s=0,r=u=o=a=void 0},y.flush=function(){return void 0===a?c:b(H())},y},o("6cvB7");var D,N=document.querySelector(".cocktails__list"),B=document.querySelector(".input-tablet"),z=document.querySelector(".input-mobile"),K=document.querySelector("#letters"),$=document.querySelector(".letters-list"),R="https://www.thecocktaildb.com/api/json/v1/1/random.php",U="https://www.thecocktaildb.com/api/json/v1/1/search.php?",X={searchMethod:"",fetchQuery:""};function F(e){return J.apply(this,arguments)}function J(){return(J=e(p)(e(k).mark((function t(n){var r,o,i,c;return e(k).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(innerWidth<768)){t.next=7;break}if(3!==D){t.next=4;break}return t.abrupt("return");case 4:D=3,t.next=17;break;case 7:if(!(innerWidth>=768&&innerWidth<1280)){t.next=13;break}if(6!==D){t.next=10;break}return t.abrupt("return");case 10:D=6,t.next=17;break;case 13:if(!(innerWidth>=1280)){t.next=17;break}if(9!==D){t.next=16;break}return t.abrupt("return");case 16:D=9;case 17:r=[],o=0;case 19:if(!(o<D)){t.next=28;break}return t.next=23,G();case 23:c=t.sent,(i=r).push.apply(i,e(v)(c.drinks));case 25:o++,t.next=19;break;case 28:N.innerHTML=r.map(ie).join(""),(0,w.showModalInfo)(),(0,x.actionOnLikeBtn)(),t.next=36;break;case 33:t.prev=33,t.t0=t.catch(0),console.log("Помилка у getRandomCocktails",t.t0);case 36:case"end":return t.stop()}}),t,null,[[0,33]])})))).apply(this,arguments)}function G(){return V.apply(this,arguments)}function V(){return(V=e(p)(e(k).mark((function t(){return e(k).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(R).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function Y(){document.querySelectorAll(".letter-item").forEach((function(e){e.classList.contains("current-letter")&&e.classList.remove("current-letter")}))}function Z(e){e.preventDefault(),Y(),X.searchMethod="s",X.fetchQuery=e.currentTarget.searchQuery.value,ee(X)}function ee(e){return te.apply(this,arguments)}function te(){return(te=e(p)(e(k).mark((function t(n){var r,o,i,c,a,u,s,l,d,f,p,v,h,m,b,y,g,_,S,M,L;return e(k).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f=function(e){return l.push("\n      <button class=\"pages__link\" type='button'>".concat(e,"</button>\n      "))},L=function(){return u=a.slice(S,M),N.innerHTML=u.map(ie).join("")},e.prev=2,document.querySelectorAll(".navigation__item").forEach((function(e){return e.innerHTML=""})),r=document.querySelector(".cocktails__title"),o=n.searchMethod,i=n.fetchQuery,e.next=9,re(o,i);case 9:if(c=e.sent,N.innerHTML="",null!==(a=c.drinks)){e.next=18;break}return r.textContent="Sorry, we didn't find any cocktail for you",e.abrupt("return");case 18:r.textContent="Cocktails";case 19:if(innerWidth<768?D=3:innerWidth>=768&&innerWidth<1280?D=6:innerWidth>=1280&&(D=9),u=a.slice(0,D),N.innerHTML=u.map(ie).join(""),console.log("cocktailsArray.length",a.length),console.log("shownCocktails.length",u.length),!(a.length>u.length)){e.next=50;break}for(s=Math.ceil(a.length/D),l=[],d=1;d<=s;d++)f(d);for(document.querySelector(".pages").insertAdjacentHTML("beforeend",l.join("")),p=document.querySelectorAll(".pages__link"),v=!0,h=!1,m=void 0,e.prev=33,b=p[Symbol.iterator]();!(v=(y=b.next()).done);v=!0)g=y.value,_=g.textContent,M=(S=(_-1)*D)+D,g.addEventListener("click",L);e.next=41;break;case 37:e.prev=37,e.t0=e.catch(33),h=!0,m=e.t0;case 41:e.prev=41,e.prev=42,v||null==b.return||b.return();case 44:if(e.prev=44,!h){e.next=47;break}throw m;case 47:return e.finish(44);case 48:return e.finish(41);case 49:ne();case 50:(0,w.showModalInfo)(),(0,x.actionOnLikeBtn)(),e.next=57;break;case 54:e.prev=54,e.t1=e.catch(2),console.log("Помилка в actionOnSearch ===> ",e.t1);case 57:case"end":return e.stop()}}),t,null,[[2,54],[33,37,41,49],[42,,44,48]])})))).apply(this,arguments)}function ne(){var e=document.querySelector(".navigation");e.insertAdjacentHTML("afterbegin",'\n      <li class="navigation__item">\n        <button class="navigation__btn-prev disabled" type="button">\n          <svg class="navigation__btn-prev-icon">\n            <use xlink:href="#icon-nav-prev">\n            <symbol id="icon-nav-prev" viewBox="0 0 21 32">\n              <path d="M16.533 0l-16 16 16 16 3.76-3.76-12.213-12.24 12.213-12.24z"></path>\n            </symbol>\n            </use>\n          </svg>\n        </button>\n      </li>\n    '),e.insertAdjacentHTML("beforeend",'\n      <li class="navigation__item">\n      <button class="navigation__btn-next" type="button">\n        <svg class="navigation__btn-next-icon">\n          <use xlink:href="#icon-nav-next">\n          <symbol id="icon-nav-next" viewBox="0 0 21 32">\n            <path d="M5.387 32l16-16-16-16-3.76 3.76 12.213 12.24-12.213 12.24z"></path>\n          </symbol>\n          </use>\n        </svg>\n      </button>\n    </li>\n      ')}function re(e,t){return oe.apply(this,arguments)}function oe(){return(oe=e(p)(e(k).mark((function t(n,r){return e(k).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(U).concat(n,"=").concat(r)).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Помилка при ФЕТЧІ ===> ",e.t0);case 9:case"end":return e.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function ie(e){var t=e.strDrinkThumb,n=e.strDrink,r=e.idDrink;return'\n<li class="coctails__item">\n  <img src="'.concat(t,'" alt="').concat(n,'" width="280" height="280" />\n  <h2 class="cocktails__item-title">').concat(n,'</h2>\n  <div class="coctails__btns">\n    <button class="btn__read-more" type="button" id="').concat(r,"\">\n      Learn more\n    </button>\n    <button id='").concat(r,'\' class="btn__like" type="button">\n      Add to\n      <svg class="btn__like-icon"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">\n      <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>\n      <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>\n      </symbol></use></svg>\n    </button>\n  </div>\n</li>\n')}F(),window.addEventListener("resize",e(_)((function(e){if(""===X.fetchQuery)F(e);else if(""!==X.fetchQuery){if(innerWidth<768&&3===D)return;if(innerWidth>=768&&innerWidth<1280&&6===D)return;if(innerWidth>=1280&&9===D)return;console.log("resizing viewport in pagination js"),ee(X)}}),500)),z.addEventListener("submit",Z),B.addEventListener("submit",Z),K.addEventListener("change",(function(e){Y(),X.searchMethod="f",X.fetchQuery=e.target.value,ee(X)})),$.addEventListener("click",(function(e){e.currentTarget!==e.target&&(Y(),e.target.classList.add("current-letter"),X.searchMethod="f",X.fetchQuery=e.target.textContent,ee(X))})),o("88beK"),o("6cvB7");var ce=document.querySelector(".checkbox-input");function ae(){try{"dark"===localStorage.getItem("theme")?(document.querySelector("html").classList.add("dark"),ce.checked=!0):(document.querySelector("html").classList.remove("dark"),ce.checked=!1)}catch(e){}}console.log(ce.checked=!0),document.querySelector(".checkbox-input").addEventListener("click",(function(e){"dark"===localStorage.getItem("theme")?(localStorage.removeItem("theme"),console.log(ce.checked)):(localStorage.setItem("theme","dark"),console.log(ce.checked)),ae()})),ae(),o("ju5c3")}();
//# sourceMappingURL=index.e96e3965.js.map

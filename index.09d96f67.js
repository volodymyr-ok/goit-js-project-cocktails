!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire0734;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequire0734=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}}));var c=document.querySelector(".menu-open"),i=document.querySelector(".menu-burger"),a=document.querySelector(".menu-close"),u=document.querySelector(".favorites"),s=document.querySelector(".favorite"),l=document.querySelector(".favorite-pages"),d=document.querySelector(".favorite-pages-desk"),f=document.querySelector(".arrow-icon");c.addEventListener("click",(function(){i.classList.remove("is-hidden"),console.log("click")})),a.addEventListener("click",(function(){i.classList.add("is-hidden")})),u.addEventListener("mouseover",(function(){l.classList.remove("is-hidden"),f.style.transform="rotate(180deg)"})),u.addEventListener("mouseout",(function(){setTimeout((function(){l.classList.add("is-hidden"),f.style.transform="rotate(0)"}),5e3)})),s.addEventListener("mouseover",(function(){d.classList.remove("is-hidden")})),d.addEventListener("mouseout",(function(){setTimeout((function(){d.classList.add("is-hidden")}),3e3)}));var v=document.querySelector(".select"),p=document.querySelector(".select-arrow"),m=document.querySelector(".select-menu"),h=(document.querySelectorAll(".option"),document.querySelector(".select-input"));v.addEventListener("click",(function(){v.classList.toggle("open"),v.classList.contains("open")?(p.style.transform="rotate(180deg)",h.style.color="#fd5103",v.style.backgroundColor="#fcfcfc",p.style.fill="#fd5103"):p.style.transform="rotate(0)"})),m.addEventListener("click",(function(e){h.textContent=e.target.textContent,h.style.color="#fcfcfc",v.style.backgroundColor="#fd5103",p.style.fill="#fcfcfc"}));var y=o("bpxeT"),b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e){return g.default(e)||k.default(e)||L.default(e)||x.default()};var g=_(o("kMC0W")),k=_(o("7AJDX")),x=_(o("8CtQK")),L=_(o("auk6i"));function _(e){return e&&e.__esModule?e:{default:e}}var S,M=o("2TvXO"),w={};Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var j=/^\s+|\s+$/g,q=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,E=/^0o[0-7]+$/i,O=parseInt,C="object"==typeof t&&t&&t.Object===Object&&t,I="object"==typeof self&&self&&self.Object===Object&&self,P=C||I||Function("return this")(),W=Object.prototype.toString,A=Math.max,H=Math.min,N=function(){return P.Date.now()};function Q(t){var n=void 0===t?"undefined":e(w)(t);return!!t&&("object"==n||"function"==n)}function B(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(w)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==W.call(t)}(t))return NaN;if(Q(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=Q(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(j,"");var r=T.test(t);return r||E.test(t)?O(t.slice(2),r?2:8):q.test(t)?NaN:+t}S=function(e,t,n){var r,o,c,i,a,u,s=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,c=o;return r=o=void 0,s=t,i=e.apply(c,n)}function p(e){return s=e,a=setTimeout(h,t),l?v(e):i}function m(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-s>=c}function h(){var e=N();if(m(e))return y(e);a=setTimeout(h,function(e){var n=t-(e-u);return d?H(n,c-(e-s)):n}(e))}function y(e){return a=void 0,f&&r?v(e):(r=o=void 0,i)}function b(){var e=N(),n=m(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return p(u);if(d)return a=setTimeout(h,t),v(u)}return void 0===a&&(a=setTimeout(h,t)),i}return t=B(t)||0,Q(n)&&(l=!!n.leading,c=(d="maxWait"in n)?A(B(n.maxWait)||0,t):c,f="trailing"in n?!!n.trailing:f),b.cancel=function(){void 0!==a&&clearTimeout(a),s=0,r=u=o=a=void 0},b.flush=function(){return void 0===a?i:y(N())},b};var D=o("88beK"),R=o("ju5c3"),U={cocktailList:document.querySelector(".cocktails__list"),srchInput:document.querySelector(".input-tablet"),mobInput:document.querySelector(".input-mobile"),abcSelect:document.querySelector(".select-menu"),abcList:document.querySelector(".letters-list"),randomCocktailURL:"https://www.thecocktaildb.com/api/json/v1/1/random.php",searchByFilterURL:"https://www.thecocktaildb.com/api/json/v1/1/search.php?",title:document.querySelector(".cocktails__title"),emptySearchResult:document.querySelector(".sorry-image"),htmlNumBar:document.querySelector(".navigation")};function z(e,t,n){try{return fetch("".concat(e).concat(t,"=").concat(n)).then((function(e){return e.json()}))}catch(e){console.log("Помилка при ФЕТЧІ ===> ",e)}}function $(e){var t=e.strDrinkThumb,n=e.strDrink,r=e.idDrink;return'\n<li class="coctails__item">\n  <img src="'.concat(t,'" alt="').concat(n,'" width="280" height="280" />\n  <h2 class="cocktails__item-title">').concat(n,'</h2>\n  <div class="coctails__btns">\n    <button class="btn__read-more" type="button" id="').concat(r,"\">\n      Learn more\n    </button>\n    <button id='").concat(r,'\' class="btn__like" type="button">\n      Add to\n      <svg class="btn__like-icon"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">\n      <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>\n      <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>\n      </symbol></use></svg>\n    </button>\n  </div>\n</li>\n')}function F(e,t,n,r){var o=[];e=Math.ceil(n.length/r);for(var c=1;c<=e;c++)o.push("<button class=\"pages__link\" type='button'>".concat(c,"</button>"));t.innerHTML='\n      <li class="navigation__item pages">'.concat(o.join(""),"</li>")}function K(e,t,n,r,o,c){var i=!0,a=!1,u=void 0;try{for(var s,l=function(c,i){var a=i.value,u=(a.textContent-1)*e,s=u+e;a.addEventListener("click",(function(e){o.forEach((function(e){return e.classList.remove("active-nav")})),e.target.classList.add("active-nav"),t=n.slice(u,s),r.innerHTML=t.map($).join("")}))},d=o[Symbol.iterator]();!(i=(s=d.next()).done);i=!0)l(0,s)}catch(e){a=!0,u=e}finally{try{i||null==d.return||d.return()}finally{if(a)throw u}}}function X(e){e.insertAdjacentHTML("afterbegin",'\n      <li class="navigation__item arrows">\n        <button class="navigation__btn-prev" type="button">\n          <svg class="navigation__btn-prev-icon">\n            <use xlink:href="#icon-nav-prev">\n            <symbol id="icon-nav-prev" viewBox="0 0 21 32">\n              <path d="M16.533 0l-16 16 16 16 3.76-3.76-12.213-12.24 12.213-12.24z"></path>\n            </symbol>\n            </use>\n          </svg>\n        </button>\n      </li>\n    '),e.insertAdjacentHTML("beforeend",'\n      <li class="navigation__item arrows">\n      <button class="navigation__btn-next" type="button">\n        <svg class="navigation__btn-next-icon">\n          <use xlink:href="#icon-nav-next">\n          <symbol id="icon-nav-next" viewBox="0 0 21 32">\n            <path d="M5.387 32l16-16-16-16-3.76 3.76 12.213 12.24-12.213 12.24z"></path>\n          </symbol>\n          </use>\n        </svg>\n      </button>\n    </li>\n      ')}function J(){document.querySelectorAll(".letter-item").forEach((function(e){e.classList.contains("current-letter")&&e.classList.remove("current-letter")}))}function G(e,t,n,r,o){var c=document.querySelector(".navigation__btn-prev"),i=document.querySelector(".navigation__btn-next"),a=+document.querySelector(".active-nav").textContent,u=Math.ceil(t.length/n);console.log("currentPage",a),c.addEventListener("click",(function(){console.log("numsQuantity",u),a--,console.log("cocktailsPerPage",n);var e=(a-1)*n+n;console.log("startPagination",e);var c=e+n;console.log("endPagination",c),console.log("currentPage",a);var i=t.slice(e,c);o.innerHTML=i.map($).join(""),r.forEach((function(e){e.classList.remove("active-nav"),+e.textContent===a&&e.classList.add("active-nav")}))})),i.addEventListener("click",(function(e){var c=(a-1)*n+n,s=c+n;a++;var l=t.slice(c,s);o.innerHTML=l.map($).join(""),r.forEach((function(e){e.classList.remove("active-nav"),+e.textContent===a&&e.classList.add("active-nav")})),a===u&&(i.disabled=!0)}))}var V,Y=U.cocktailList,Z=U.srchInput,ee=U.mobInput,te=U.abcSelect,ne=U.abcList,re=U.randomCocktailURL,oe=U.searchByFilterURL,ce=U.title,ie=U.emptySearchResult,ae=U.htmlNumBar,ue={searchMethod:"",fetchQuery:""};function se(e){return le.apply(this,arguments)}function le(){return(le=e(y)(e(M).mark((function t(n){var r,o,c,i;return e(M).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(innerWidth<768)){t.next=7;break}if(3!==V){t.next=4;break}return t.abrupt("return");case 4:V=3,t.next=17;break;case 7:if(!(innerWidth>=768&&innerWidth<1280)){t.next=13;break}if(6!==V){t.next=10;break}return t.abrupt("return");case 10:V=6,t.next=17;break;case 13:if(!(innerWidth>=1280)){t.next=17;break}if(9!==V){t.next=16;break}return t.abrupt("return");case 16:V=9;case 17:r=[],o=0;case 19:if(!(o<V)){t.next=28;break}return t.next=23,de();case 23:i=t.sent,(c=r).push.apply(c,e(b)(i.drinks));case 25:o++,t.next=19;break;case 28:Y.innerHTML=r.map($).join(""),(0,R.showModalInfo)(),(0,D.actionOnLikeBtn)(),t.next=36;break;case 33:t.prev=33,t.t0=t.catch(0),console.log("Помилка у getRandomCocktails",t.t0);case 36:case"end":return t.stop()}}),t,null,[[0,33]])})))).apply(this,arguments)}function de(){return fe.apply(this,arguments)}function fe(){return(fe=e(y)(e(M).mark((function t(){return e(M).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(re).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function ve(e){e.preventDefault(),J(),ue.searchMethod="s",ue.fetchQuery=e.currentTarget.searchQuery.value,pe(ue)}function pe(e){return me.apply(this,arguments)}function me(){return(me=e(y)(e(M).mark((function t(n){var r,o,c,i,a,u;return e(M).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,ie.classList.add("is-hidden"),r=n.searchMethod,o=n.fetchQuery,ae.innerHTML="",Y.innerHTML="",e.next=8,z(oe,r,o);case 8:if(i=e.sent,null!==(a=i.drinks)){e.next=16;break}return ce.textContent="Sorry, we didn't find any cocktail for you",ie.classList.remove("is-hidden"),e.abrupt("return");case 16:ce.textContent="Search results";case 17:innerWidth<768?V=3:innerWidth>=768&&innerWidth<1280?V=6:innerWidth>=1280&&(V=9),c=a.slice(0,V),Y.innerHTML=c.map($).join(""),a.length>c.length&&(1,F(0,ae,a,V),(u=document.querySelectorAll(".pages__link"))[0].classList.add("active-nav"),document.querySelector(".pages").addEventListener("click",(function(e){e.target!==e.currentTarget&&console.log(+e.target.textContent)})),K(V,c,a,Y,u),console.log(1),X(ae),G(0,a,V,u,Y)),(0,R.showModalInfo)(),(0,D.actionOnLikeBtn)(),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(0),console.log("Помилка в actionOnSearch ===> ",e.t0);case 28:case"end":return e.stop()}}),t,null,[[0,25]])})))).apply(this,arguments)}se(),window.addEventListener("resize",e(S)((function(e){if(""===ue.fetchQuery)se(e);else if(""!==ue.fetchQuery){if(innerWidth<768&&3===V)return;if(innerWidth>=768&&innerWidth<1280&&6===V)return;if(innerWidth>=1280&&9===V)return;pe(ue)}}),500)),ee.addEventListener("submit",ve),Z.addEventListener("submit",ve),te.addEventListener("click",(function(e){J(),ue.searchMethod="f",ue.fetchQuery=e.target.textContent,pe(ue)})),ne.addEventListener("click",(function(e){if(e.currentTarget===e.target)return;J(),e.target.classList.add("current-letter"),ue.searchMethod="f",ue.fetchQuery=e.target.textContent,pe(ue)})),o("88beK"),o("6cvB7");var he=document.querySelector(".checkbox-input");function ye(){try{"dark"===localStorage.getItem("theme")?(document.querySelector("html").classList.add("dark"),he.checked=!0):(document.querySelector("html").classList.remove("dark"),he.checked=!1)}catch(e){}}console.log(he.checked=!0),document.querySelector(".checkbox-input").addEventListener("click",(function(e){"dark"===localStorage.getItem("theme")?(localStorage.removeItem("theme"),console.log(he.checked)):(localStorage.setItem("theme","dark"),console.log(he.checked)),ye()})),ye(),o("ju5c3")}();
//# sourceMappingURL=index.09d96f67.js.map

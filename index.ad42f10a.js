function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire0734;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire0734=r);const i=document.querySelector(".menu-open"),c=document.querySelector(".menu-burger"),s=document.querySelector(".menu-close"),a=document.querySelector(".favorites"),l=document.querySelector(".favorite"),u=document.querySelector(".favorite-pages"),d=document.querySelector(".favorite-pages-desk"),f=document.querySelector(".arrow-icon");i.addEventListener("click",(()=>{c.classList.remove("is-hidden"),console.log("click")})),s.addEventListener("click",(()=>{c.classList.add("is-hidden")})),a.addEventListener("mouseover",(()=>{u.classList.remove("is-hidden"),f.style.transform="rotate(180deg)"})),a.addEventListener("mouseout",(()=>{setTimeout((()=>{u.classList.add("is-hidden"),f.style.transform="rotate(0)"}),5e3)})),l.addEventListener("mouseover",(()=>{d.classList.remove("is-hidden")})),d.addEventListener("mouseout",(()=>{setTimeout((()=>{d.classList.add("is-hidden")}),3e3)}));const m=document.querySelector(".select"),h=document.querySelector(".select-arrow"),v=document.querySelector(".select-menu"),y=(document.querySelectorAll(".option"),document.querySelector(".select-input"));m.addEventListener("click",(()=>{m.classList.toggle("open"),m.classList.contains("open")?(h.style.transform="rotate(180deg)",y.style.color="#fd5103",m.style.backgroundColor="#fcfcfc",h.style.fill="#fd5103"):h.style.transform="rotate(0)"})),v.addEventListener("click",(e=>{y.textContent=e.target.textContent,y.style.color="#fcfcfc",m.style.backgroundColor="#fd5103",h.style.fill="#fcfcfc"}));var g,p=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,k=/^0o[0-7]+$/i,S=parseInt,_="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,q=_||x||Function("return this")(),w=Object.prototype.toString,M=Math.max,T=Math.min,E=function(){return q.Date.now()};function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function C(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==w.call(e)}(e))return NaN;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var n=L.test(e);return n||k.test(e)?S(e.slice(2),n?2:8):b.test(e)?NaN:+e}g=function(e,t,n){var o,r,i,c,s,a,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=o,i=r;return o=r=void 0,l=t,c=e.apply(i,n)}function h(e){return l=e,s=setTimeout(y,t),u?m(e):c}function v(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-l>=i}function y(){var e=E();if(v(e))return g(e);s=setTimeout(y,function(e){var n=t-(e-a);return d?T(n,i-(e-l)):n}(e))}function g(e){return s=void 0,f&&o?m(e):(o=r=void 0,c)}function p(){var e=E(),n=v(e);if(o=arguments,r=this,a=e,n){if(void 0===s)return h(a);if(d)return s=setTimeout(y,t),m(a)}return void 0===s&&(s=setTimeout(y,t)),c}return t=C(t)||0,j(n)&&(u=!!n.leading,i=(d="maxWait"in n)?M(C(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),p.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=a=r=s=void 0},p.flush=function(){return void 0===s?c:g(E())},p};var O=r("3dTDO"),W=r("iD9My");const $={cocktailList:document.querySelector(".cocktails__list"),srchInput:document.querySelector(".input-tablet"),mobInput:document.querySelector(".input-mobile"),abcSelect:document.querySelector(".select-menu"),abcList:document.querySelector(".letters-list"),randomCocktailURL:"https://www.thecocktaildb.com/api/json/v1/1/random.php",searchByFilterURL:"https://www.thecocktaildb.com/api/json/v1/1/search.php?",title:document.querySelector(".cocktails__title"),emptySearchResult:document.querySelector(".sorry-image"),htmlNumBar:document.querySelector(".navigation")};function H(e,t,n){try{return fetch(`${e}${t}=${n}`).then((e=>e.json()))}catch(e){console.log("Помилка при ФЕТЧІ ===> ",e)}}function D({strDrinkThumb:e,strDrink:t,idDrink:n}){return`\n<li class="coctails__item">\n  <img src="${e}" alt="${t}" width="280" height="280" />\n  <h2 class="cocktails__item-title">${t}</h2>\n  <div class="coctails__btns">\n    <button class="btn__read-more" type="button" id="${n}">\n      Learn more\n    </button>\n    <button id='${n}' class="btn__like" type="button">\n      Add to\n      <svg class="btn__like-icon"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">\n      <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>\n      <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>\n      </symbol></use></svg>\n    </button>\n  </div>\n</li>\n`}function I(e,t,n,o){const r=[];e=Math.ceil(n.length/o);for(let t=1;t<=e;t++)r.push(`<button class="pages__link" type='button'>${t}</button>`);t.innerHTML=`\n      <li class="navigation__item pages">${r.join("")}</li>`}function B(e,t,n,o,r,i){for(let i of r){const c=(i.textContent-1)*e,s=c+e;i.addEventListener("click",(e=>{r.forEach((e=>e.classList.remove("active-nav"))),e.target.classList.add("active-nav"),t=n.slice(c,s),o.innerHTML=t.map(D).join("")}))}}function N(){document.querySelectorAll(".letter-item").forEach((e=>{e.classList.contains("current-letter")&&e.classList.remove("current-letter")}))}function Q(e,t,n,o,r){const i=document.querySelector(".navigation__btn-prev"),c=document.querySelector(".navigation__btn-next");let s=+document.querySelector(".active-nav").textContent,a=Math.ceil(t.length/n);console.log("currentPage",s),i.addEventListener("click",(()=>{console.log("numsQuantity",a),s--,console.log("cocktailsPerPage",n);const e=(s-1)*n+n;console.log("startPagination",e);const i=e+n;console.log("endPagination",i),console.log("currentPage",s);const c=t.slice(e,i);r.innerHTML=c.map(D).join(""),o.forEach((e=>{e.classList.remove("active-nav"),+e.textContent===s&&e.classList.add("active-nav")}))})),c.addEventListener("click",(e=>{const i=(s-1)*n+n,l=i+n;s++;const u=t.slice(i,l);r.innerHTML=u.map(D).join(""),o.forEach((e=>{e.classList.remove("active-nav"),+e.textContent===s&&e.classList.add("active-nav")})),s===a&&(c.disabled=!0)}))}const{cocktailList:R,srchInput:A,mobInput:P,abcSelect:U,abcList:z,randomCocktailURL:F,searchByFilterURL:G,title:J,emptySearchResult:K,htmlNumBar:V}=$,X={searchMethod:"",fetchQuery:""};let Y;async function Z(e){try{if(innerWidth<768){if(3===Y)return;Y=3}else if(innerWidth>=768&&innerWidth<1280){if(6===Y)return;Y=6}else if(innerWidth>=1280){if(9===Y)return;Y=9}const e=[];for(let t=0;t<Y;t++){const t=await ee();e.push(...t.drinks)}R.innerHTML=e.map(D).join(""),(0,W.showModalInfo)(),(0,O.actionOnLikeBtn)()}catch(e){console.log("Помилка у getRandomCocktails",e)}}async function ee(){try{return await fetch(F).then((e=>e.json()))}catch(e){console.log(e)}}function te(e){e.preventDefault(),N(),X.searchMethod="s",X.fetchQuery=e.currentTarget.searchQuery.value,ne(X)}async function ne(e){try{K.classList.add("is-hidden");const{searchMethod:n,fetchQuery:o}=e;let r;V.innerHTML="",R.innerHTML="";const i=(await H(G,n,o)).drinks;if(null===i)return J.textContent="Sorry, we didn't find any cocktail for you",void K.classList.remove("is-hidden");if(J.textContent="Search results",innerWidth<768?Y=3:innerWidth>=768&&innerWidth<1280?Y=6:innerWidth>=1280&&(Y=9),r=i.slice(0,Y),R.innerHTML=r.map(D).join(""),i.length>r.length){let e=1;I(0,V,i,Y);const n=document.querySelectorAll(".pages__link");n[0].classList.add("active-nav");document.querySelector(".pages").addEventListener("click",(e=>{e.target!==e.currentTarget&&console.log(+e.target.textContent)})),B(Y,r,i,R,n),console.log(e),(t=V).insertAdjacentHTML("afterbegin",'\n      <li class="navigation__item arrows">\n        <button class="navigation__btn-prev" type="button">\n          <svg class="navigation__btn-prev-icon">\n            <use xlink:href="#icon-nav-prev">\n            <symbol id="icon-nav-prev" viewBox="0 0 21 32">\n              <path d="M16.533 0l-16 16 16 16 3.76-3.76-12.213-12.24 12.213-12.24z"></path>\n            </symbol>\n            </use>\n          </svg>\n        </button>\n      </li>\n    '),t.insertAdjacentHTML("beforeend",'\n      <li class="navigation__item arrows">\n      <button class="navigation__btn-next" type="button">\n        <svg class="navigation__btn-next-icon">\n          <use xlink:href="#icon-nav-next">\n          <symbol id="icon-nav-next" viewBox="0 0 21 32">\n            <path d="M5.387 32l16-16-16-16-3.76 3.76 12.213 12.24-12.213 12.24z"></path>\n          </symbol>\n          </use>\n        </svg>\n      </button>\n    </li>\n      '),Q(0,i,Y,n,R)}(0,W.showModalInfo)(),(0,O.actionOnLikeBtn)()}catch(e){console.log("Помилка в actionOnSearch ===> ",e)}var t}Z(),window.addEventListener("resize",e(g)((function(e){if(""===X.fetchQuery)Z(e);else if(""!==X.fetchQuery){if(innerWidth<768&&3===Y)return;if(innerWidth>=768&&innerWidth<1280&&6===Y)return;if(innerWidth>=1280&&9===Y)return;ne(X)}}),500)),P.addEventListener("submit",te),A.addEventListener("submit",te),U.addEventListener("click",(function(e){N(),X.searchMethod="f",X.fetchQuery=e.target.textContent,ne(X)})),z.addEventListener("click",(function(e){if(e.currentTarget===e.target)return;N(),e.target.classList.add("current-letter"),X.searchMethod="f",X.fetchQuery=e.target.textContent,ne(X)})),r("3dTDO"),r("a0Nx3");const oe=document.querySelector(".checkbox-input");function re(){try{"dark"===localStorage.getItem("theme")?(document.querySelector("html").classList.add("dark"),oe.checked=!0):(document.querySelector("html").classList.remove("dark"),oe.checked=!1)}catch(e){}}console.log(oe.checked=!0),document.querySelector(".checkbox-input").addEventListener("click",(e=>{"dark"===localStorage.getItem("theme")?(localStorage.removeItem("theme"),console.log(oe.checked)):(localStorage.setItem("theme","dark"),console.log(oe.checked)),re()})),re(),r("iD9My");
//# sourceMappingURL=index.ad42f10a.js.map

function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n=document.querySelector(".menu-open"),i=document.querySelector(".menu-burger"),o=document.querySelector(".menu-close"),r=document.querySelector(".favorites"),c=document.querySelector(".favorite-pages"),a=document.querySelector(".arrow-icon");n.addEventListener("click",(()=>{i.classList.remove("is-hidden"),console.log("click")})),o.addEventListener("click",(()=>{i.classList.add("is-hidden")})),r.addEventListener("mouseover",(()=>{c.classList.remove("is-hidden"),a.style.transform="rotate(180deg)"})),r.addEventListener("mouseout",(()=>{setTimeout((()=>{c.classList.add("is-hidden"),a.style.transform="rotate(0)"}),2e3)}));var s,l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,h=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,p=m||v||Function("return this")(),y=Object.prototype.toString,g=Math.max,b=Math.min,w=function(){return p.Date.now()};function k(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(k(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=k(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=d.test(e);return n||f.test(e)?h(e.slice(2),n?2:8):u.test(e)?NaN:+e}s=function(e,t,n){var i,o,r,c,a,s,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=i,r=o;return i=o=void 0,l=t,c=e.apply(r,n)}function m(e){return l=e,a=setTimeout(p,t),u?h(e):c}function v(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-l>=r}function p(){var e=w();if(v(e))return y(e);a=setTimeout(p,function(e){var n=t-(e-s);return d?b(n,r-(e-l)):n}(e))}function y(e){return a=void 0,f&&i?h(e):(i=o=void 0,c)}function _(){var e=w(),n=v(e);if(i=arguments,o=this,s=e,n){if(void 0===a)return m(s);if(d)return a=setTimeout(p,t),h(s)}return void 0===a&&(a=setTimeout(p,t)),c}return t=L(t)||0,k(n)&&(u=!!n.leading,r=(d="maxWait"in n)?g(L(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),_.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=s=o=a=void 0},_.flush=function(){return void 0===a?c:y(w())},_};const _=document.querySelector(".cocktails__list"),j=document.querySelector('[name="cocktail-search"]'),E=document.querySelector("#abc-cocktails"),S=document.querySelectorAll(".pages__link");let T;const M={searchMethod:"",fetchQuery:""};async function q(){try{innerWidth<768?T=3:innerWidth>=768&&innerWidth<1280?T=6:innerWidth>=1280&&(T=9);const e=[];for(let t=0;t<T;t++){const t=await $();e.push(...t.drinks)}_.innerHTML=e.map(x).join("")}catch(e){throw new Error("Помилка у getRandomCocktails",e.message)}}async function $(){try{return(await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")).json()}catch(e){throw new Error("Помилка у fetchRandomCocktail",e.message)}}async function W(e){try{const{searchMethod:n,fetchQuery:i}=e,o=await async function(e,t){try{return await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?${e}=${t}`).then((e=>e.json()))}catch(e){throw new Error("Помилка при ФЕТЧІ ===> "+e.message)}}(n,i);_.innerHTML="";const r=o.drinks;let c;if(null===r)return void(_.innerHTML="<h2>НІЦ НЕМА</h2>");innerWidth<768?T=3:innerWidth>=768&&innerWidth<1280?T=6:innerWidth>=1280&&(T=9),c=r.slice(0,T),_.insertAdjacentHTML("beforeend",c.map(x).join(""));for(let a of S){const s=(+a.textContent-1)*T,l=s+T;function t(){return c=r.slice(s,l),_.innerHTML=c.map(x).join("")}a.addEventListener("click",t)}}catch(u){throw new Error("Помилка в actionOnSearch ===> "+u.message)}}function x({strDrinkThumb:e,strDrink:t,idDrink:n}){return`\n<li class="coctails__item">\n  <img src="${e}" alt="${t}" width="280" height="280" />\n  <h2 class="cocktails__item-title">${t}</h2>\n  <div class="coctails__btns">\n    <button class="btn__read-more" type="button" id="${n}">\n      Learn more\n    </button>\n    <button id='${n}' class="btn__like" type="button">\n      Add to\n      <svg class="btn__like-icon"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">\n      <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>\n      <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>\n      </symbol></use></svg>\n    </button>\n  </div>\n</li>\n`}q(),window.addEventListener("resize",e(s)((function(){""===j.value&&""===E.value?q():""===j.value&&""===E.value||(console.log("resizing viewport in pagination js"),W(M))}),500)),j.addEventListener("change",(e=>{M.searchMethod="s",M.fetchQuery=e.target.value,W(M)})),E.addEventListener("change",(e=>{M.searchMethod="f",M.fetchQuery=e.target.value,W(M)}));let O=[];setTimeout((()=>{!function(){let e=localStorage.getItem("drinksId");if(e){console.log(e.split(",")),e.split(",").forEach((e=>O.push(e)))}}();const e=document.querySelectorAll(".btn__like");function t(e){0!==e.target.id.length&&(O.includes(e.target.id)?(O.splice(O.indexOf(e.target.id),1),e.path[0].lastElementChild.classList.remove("active-like-btn")):(O.push(e.target.id),e.path[0].lastElementChild.classList.add("active-like-btn")),localStorage.setItem("drinksId",O),console.log(O))}console.log(e),e.forEach((e=>e.addEventListener("click",t)))}),5e3);
//# sourceMappingURL=ingridients.a95e0961.js.map

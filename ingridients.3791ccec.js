!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire0734;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire0734=r);var i=document.querySelector(".menu-open"),c=document.querySelector(".menu-burger"),s=document.querySelector(".menu-close"),a=document.querySelector(".favorites"),u=document.querySelector(".favorite"),l=document.querySelector(".favorite-pages"),d=document.querySelector(".favorite-pages-desk"),f=document.querySelector(".arrow-icon");i.addEventListener("click",(function(){c.classList.remove("is-hidden"),console.log("click")})),s.addEventListener("click",(function(){c.classList.add("is-hidden")})),a.addEventListener("mouseover",(function(){l.classList.remove("is-hidden"),f.style.transform="rotate(180deg)"})),a.addEventListener("mouseout",(function(){setTimeout((function(){l.classList.add("is-hidden"),f.style.transform="rotate(0)"}),5e3)})),u.addEventListener("mouseover",(function(){d.classList.remove("is-hidden")})),u.addEventListener("mouseout",(function(){setTimeout((function(){d.classList.add("is-hidden")}),3e3)}));var p=r("bpxeT"),m=r("l5bVx"),v=r("2TvXO");console.log("parapam");var h=document.querySelector(".cocktails__list");console.log(h);var g,y=[],b=[];function k(e){return _.apply(this,arguments)}function _(){return(_=e(p)(e(v).mark((function n(t){return e(v).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(t)).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Помилка при ФЕТЧІ ===> ",e.t0);case 9:case"end":return e.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}console.log(void 0===y?"undefined":e(m)(y)),function(){var e=localStorage.getItem("drinksId");if(e){e.split(",").forEach((function(e){return y.push(e)}))}}(),console.log(y),y.map((g=e(p)(e(v).mark((function n(t){var o;return e(v).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:json=e.sent,o=json.drinks[0],b.push(o);case 5:case"end":return e.stop()}}),n)}))),function(e){return g.apply(this,arguments)})),setTimeout((function(){console.log(b),b.forEach((function(e){h.innerHTML+=function(e){return'\n    <li class="coctails__item">\n      <img src="'.concat(e.strDrinkThumb,'" alt="').concat(e.strDrink,'" width="280" height="280" />\n      <h2 class="cocktails__item-title">').concat(e.strDrink,'</h2>\n      <div class="coctails__btns">\n        <button class="btn__read-more" type="button" id="').concat(e.idDrink,"\">\n          Learn more\n        </button>\n        <button id='").concat(e.idDrink,'\' class="btn__like" type="button">\n          Add to\n          <svg class="btn__like-icon"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">\n          <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>\n          <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>\n          </symbol></use></svg>\n        </button>\n      </div>\n    </li>\n    ')}(e)})),console.log(undefined)}),2e3)}();
//# sourceMappingURL=ingridients.3791ccec.js.map

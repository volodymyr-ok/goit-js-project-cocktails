!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire0734;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire0734=r);var i=document.querySelector(".menu-open"),s=document.querySelector(".menu-burger"),c=document.querySelector(".menu-close"),a=document.querySelector(".favorites"),u=document.querySelector(".favorite"),d=document.querySelector(".favorite-pages"),l=document.querySelector(".favorite-pages-desk"),f=document.querySelector(".arrow-icon");i.addEventListener("click",(function(){s.classList.remove("is-hidden"),console.log("click")})),c.addEventListener("click",(function(){s.classList.add("is-hidden")})),a.addEventListener("mouseover",(function(){d.classList.remove("is-hidden"),f.style.transform="rotate(180deg)"})),a.addEventListener("mouseout",(function(){setTimeout((function(){d.classList.add("is-hidden"),f.style.transform="rotate(0)"}),5e3)})),u.addEventListener("mouseover",(function(){l.classList.remove("is-hidden")})),u.addEventListener("mouseout",(function(){setTimeout((function(){l.classList.add("is-hidden")}),3e3)}));var m=r("bpxeT"),v=r("2TvXO"),p=r("88beK"),h=(r("88beK"),p=r("88beK"),r("ju5c3"));console.log(p.storage);var y=document.querySelector(".menu-open"),g=document.querySelector(".menu-burger"),L=document.querySelector(".menu-close"),b=document.querySelector(".favorites"),k=document.querySelector(".favorite"),q=document.querySelector(".favorite-pages"),S=document.querySelector(".favorite-pages-desk"),w=document.querySelector(".arrow-icon");y.addEventListener("click",(function(){g.classList.remove("is-hidden"),console.log("click")})),L.addEventListener("click",(function(){g.classList.add("is-hidden")})),b.addEventListener("mouseover",(function(){q.classList.remove("is-hidden"),w.style.transform="rotate(180deg)"})),b.addEventListener("mouseout",(function(){setTimeout((function(){q.classList.add("is-hidden"),w.style.transform="rotate(0)"}),5e3)})),k.addEventListener("mouseover",(function(){S.classList.remove("is-hidden")})),k.addEventListener("mouseout",(function(){setTimeout((function(){S.classList.add("is-hidden")}),3e3)})),(0,p.reload)();var _,E=document.querySelector(".cocktails__list"),x=document.querySelector(".empty-text");console.log(p.storage);var T,M=[];function D(){var e;innerWidth<768?_=3:innerWidth>=768&&innerWidth<1280?_=6:innerWidth>=1280&&(_=9),e=M.slice(0,_),E.innerHTML=e.map(j).join(""),console.log("dsfg"),(0,p.actionOnLikeBtn)(),(0,h.showModalInfo)()}function H(e){return O.apply(this,arguments)}function O(){return(O=e(m)(e(v).mark((function t(n){return e(v).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(n)).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Помилка при ФЕТЧІ ===> ",e.t0);case 9:case"end":return e.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function j(e){return'\n    <li class="coctails__item">\n      <img src="'.concat(e.strDrinkThumb,'" alt="').concat(e.strDrink,'" width="280" height="280" />\n      <h2 class="cocktails__item-title">').concat(e.strDrink,'</h2>\n      <div class="coctails__btns">\n        <button class="btn__read-more" type="button" id="').concat(e.idDrink,"\">\n          Learn more\n        </button>\n        <button id='").concat(e.idDrink,'\' class="btn__like " type="button">\n          Remove\n          <svg class="btn__like-icon active-like-btn"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">\n          <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>\n          <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>\n          </symbol></use></svg>\n        </button>\n      </div>\n    </li>\n    ')}console.log(localStorage.getItem("drinksId")),p.storage.length>0?(x.textContent="",p.storage.forEach((T=e(m)(e(v).mark((function t(n){var o,r;return e(v).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(n);case 2:o=e.sent,r=o.drinks[0],M.push(r),D();case 6:case"end":return e.stop()}}),t)}))),function(e){return T.apply(this,arguments)}))):(E.innerHTML="",x.innerHTML=" You haven't added any <br />favorite cocktails yet")}();
//# sourceMappingURL=cocktails.2a1b2b87.js.map

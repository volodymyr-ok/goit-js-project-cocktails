!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire0734;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire0734=i);var o=i("bpxeT"),c=i("2TvXO"),s=i("6cvB7"),a=i("5UoXj"),d=document.querySelector(".menu-open"),u=document.querySelector(".menu-burger"),l=document.querySelector(".menu-close"),f=document.querySelector(".favorites"),p=document.querySelector(".favorite"),h=document.querySelector(".favorite-pages"),v=document.querySelector(".favorite-pages-desk"),m=document.querySelector(".arrow-icon");d.addEventListener("click",(function(){u.classList.remove("is-hidden")})),l.addEventListener("click",(function(){u.classList.add("is-hidden")})),f.addEventListener("mouseover",(function(){h.classList.remove("is-hidden"),m.style.transform="rotate(180deg)"})),f.addEventListener("mouseout",(function(){setTimeout((function(){h.classList.add("is-hidden"),m.style.transform="rotate(0)"}),5e3)})),p.addEventListener("mouseover",(function(){v.classList.remove("is-hidden")})),p.addEventListener("mouseout",(function(){setTimeout((function(){v.classList.add("is-hidden")}),3e3)}));var g,y,b=document.querySelector(".favorite-ingridients"),k=document.querySelector(".empty-text"),L=[];function _(){var t;innerWidth<768?g=3:innerWidth>=768&&innerWidth<1280?g=6:innerWidth>=1280&&(g=9),t=L.slice(0,g),b.innerHTML=t.map(w).join(""),function(){function e(e){0!==e.target.id.length&&(s.storageIngr.includes(e.target.id)?(s.storageIngr.splice(s.storageIngr.indexOf(e.target.id),1),e.path[0].lastElementChild.classList.remove("active-like-btn"),e.path[0].firstChild.textContent="Add to"):(s.storageIngr.push(e.target.id),e.path[0].lastElementChild.classList.add("active-like-btn"),e.path[0].firstChild.textContent="Remove"),localStorage.setItem("drinksIngrId",s.storageIngr))}document.querySelectorAll(".btn__like").forEach((function(t){return t.addEventListener("click",e)}))}(),function(){var t;function n(e){return r.apply(this,arguments)}function r(){return(r=e(o)(e(c).mark((function n(r){var i,o,d,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.target.id,e.next=3,(0,s.srchByIngr)(i);case 3:o=e.sent,t=o.ingredients[0],d=t.idIngredient,u=(0,a.checkLocalStorageIngr)(d),(0,s.markupModalIngr)(t,u),(0,s.modalIngrInteraction)();case 9:case"end":return e.stop()}}),n)})))).apply(this,arguments)}document.querySelectorAll(".btn__read-more").forEach((function(e){return e.addEventListener("click",n)}))}()}function x(e){return I.apply(this,arguments)}function I(){return(I=e(o)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=".concat(n)).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("Помилка при ФЕТЧІ ===> ",e.t0);case 9:case"end":return e.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function w(e){return'\n      <li class="coctails__item-ingr">\n        <h2 class="cocktails__item-title">'.concat(e.strIngredient,'</h2>\n        <p class="cocktails__item-text">').concat(e.strType,'</p>\n        <div class="coctails__btns">\n          <button class="btn__read-more" type="button" id="').concat(e.strIngredient,"\">\n            Learn more\n          </button>\n          <button id='").concat(e.idIngredient,'\' class="btn__like " type="button">\n            Remove\n            <svg class="btn__like-icon active-like-btn"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">\n            <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>\n            <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>\n            </symbol></use></svg>\n          </button>\n        </div>\n      </li>\n      ')}s.storageIngr.length>0?(k.textContent="",s.storageIngr.forEach((y=e(o)(e(c).mark((function t(n){var r,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n);case 2:r=e.sent,i=r.ingredients[0],L.push(i),_();case 6:case"end":return e.stop()}}),t)}))),function(e){return y.apply(this,arguments)}))):(b.innerHTML="",k.innerHTML=" You haven't added any <br />favorite cocktails yet")}();
//# sourceMappingURL=ingridients.fac121e1.js.map

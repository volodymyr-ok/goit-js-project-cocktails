var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire0734;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire0734=o);var i=o("3dTDO"),r=(o("3dTDO"),i=o("3dTDO"),o("iD9My"));console.log(i.storage);const s=document.querySelector(".menu-open"),l=document.querySelector(".menu-burger"),c=document.querySelector(".menu-close"),d=document.querySelector(".favorites"),a=document.querySelector(".favorite"),u=document.querySelector(".favorite-pages"),m=document.querySelector(".favorite-pages-desk"),h=document.querySelector(".arrow-icon");s.addEventListener("click",(()=>{l.classList.remove("is-hidden"),console.log("click")})),c.addEventListener("click",(()=>{l.classList.add("is-hidden")})),d.addEventListener("mouseover",(()=>{u.classList.remove("is-hidden"),h.style.transform="rotate(180deg)"})),d.addEventListener("mouseout",(()=>{setTimeout((()=>{u.classList.add("is-hidden"),h.style.transform="rotate(0)"}),5e3)})),a.addEventListener("mouseover",(()=>{m.classList.remove("is-hidden")})),a.addEventListener("mouseout",(()=>{setTimeout((()=>{m.classList.add("is-hidden")}),3e3)})),(0,i.reload)();const f=document.querySelector(".cocktails__list"),v=document.querySelector(".empty-text");let p;console.log(i.storage);let y=[];function g(e){return`\n    <li class="coctails__item">\n      <img src="${e.strDrinkThumb}" alt="${e.strDrink}" width="280" height="280" />\n      <h2 class="cocktails__item-title">${e.strDrink}</h2>\n      <div class="coctails__btns">\n        <button class="btn__read-more" type="button" id="${e.idDrink}">\n          Learn more\n        </button>\n        <button id='${e.idDrink}' class="btn__like " type="button">\n          Remove\n          <svg class="btn__like-icon active-like-btn"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">\n          <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>\n          <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>\n          </symbol></use></svg>\n        </button>\n      </div>\n    </li>\n    `}console.log(localStorage.getItem("drinksId")),i.storage.length>0?(v.textContent="",i.storage.forEach((async e=>{let t=await async function(e){try{return await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${e}`).then((e=>e.json()))}catch(e){console.log("Помилка при ФЕТЧІ ===> ",e)}}(e),n=t.drinks[0];y.push(n),function(){let e;innerWidth<768?p=3:innerWidth>=768&&innerWidth<1280?p=6:innerWidth>=1280&&(p=9),e=y.slice(0,p),f.innerHTML=e.map(g).join(""),console.log("dsfg"),(0,i.actionOnLikeBtn)(),(0,r.showModalInfo)()}()}))):(f.innerHTML="",v.innerHTML=" You haven't added any <br />favorite cocktails yet");
//# sourceMappingURL=cocktails.28051478.js.map

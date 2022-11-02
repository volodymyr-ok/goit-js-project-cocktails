
import { storage } from "./yuras"
console.log(storage)
import { actionOnLikeBtn } from "./yuras"
import { reload } from "./yuras";
import { showModalInfo } from './modal-coctail'
// import { userOpenMOdal } from "./pagination"
reload()

const cocList = document.querySelector('.cocktails__list');
const emptyText = document.querySelector('.empty-text');
// const local = document.querySelector('.for-modal-coc')
// const loc = document.querySelector('.my')
// const secondModal = document.querySelector('.second')

console.log(storage)
let cocktailsPerPage;


let myCoc = [];

console.log( localStorage.getItem('drinksId'))

// function reload() {
//   let userr = localStorage.getItem('drinksId');
//   if (userr) {
//     let ara = userr.split(',');
//     ara.forEach(el => storage.push(el));
//   }
// }


getMurkupCoc();
function getMurkupCoc() {
  if (storage.length > 0) {
    emptyText.textContent = '';
    
    storage.forEach(async el=>{
      json = await searchCocById(el)
      let result = json.drinks[0];
      myCoc.push(result)
      mark()
    })
    
    // storage.map(async el => {
    //   json = await searchCocById(el);
    //   // console.log(json)
    //   let result = json.drinks[0];
    //   // console.log(result)
    //   myCoc.push(result);
    //   console.log(result)
     
    // });

  } else {
    cocList.innerHTML = '';
    emptyText.innerHTML = ` You haven't added any <br />favorite cocktails yet`;
  }
}



 function mark (){
  let shownCocktails
  
  if (innerWidth < 768) {
  cocktailsPerPage = 3;
} else if (innerWidth >= 768 && innerWidth < 1280) {
  cocktailsPerPage = 6;
} else if (innerWidth >= 1280) {
  cocktailsPerPage = 9;
}

shownCocktails = myCoc.slice(0, cocktailsPerPage);
cocList.innerHTML = shownCocktails.map(letMarkupMyCoc).join('');
console.log('dsfg')


 actionOnLikeBtn()
 showModalInfo()
 
}





async function searchCocById(el) {
  try {
    return await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${el}`
    ).then(response => response.json());
  } catch (error) {
    console.log('Помилка при ФЕТЧІ ===> ', error);
  }
}

function letMarkupMyCoc(el) {
  return `
    <li class="coctails__item">
      <img src="${el.strDrinkThumb}" alt="${el.strDrink}" width="280" height="280" />
      <h2 class="cocktails__item-title">${el.strDrink}</h2>
      <div class="coctails__btns">
        <button class="btn__read-more" type="button" id="${el.idDrink}">
          Learn more
        </button>
        <button id='${el.idDrink}' class="btn__like " type="button">
          Remove
          <svg class="btn__like-icon active-like-btn"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">
          <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>
          <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>
          </symbol></use></svg>
        </button>
      </div>
    </li>
    `;
}


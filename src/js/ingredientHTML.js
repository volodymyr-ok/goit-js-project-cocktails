import { storageIngr, markupModalIngr, srchByIngr, modalIngrInteraction } from "./yuras-m";

import { checkLocalStorageIngr } from "./check-local-storageIngr";



const openBtn = document.querySelector('.menu-open');
const menu = document.querySelector('.menu-burger');
const closeBtn = document.querySelector('.menu-close');
const favoriteMenuOpen = document.querySelector('.favorites');
const favoriteMenuDesk = document.querySelector('.favorite');
const favoritePages = document.querySelector('.favorite-pages');
const favoriteDesktop = document.querySelector('.favorite-pages-desk');
const arrowIcon = document.querySelector('.arrow-icon');

openBtn.addEventListener('click', () => {
  menu.classList.remove('is-hidden');
  console.log('click');
});
closeBtn.addEventListener('click', () => {
  menu.classList.add('is-hidden');
});

favoriteMenuOpen.addEventListener('mouseover', () => {
  favoritePages.classList.remove('is-hidden');
  arrowIcon.style.transform = 'rotate(180deg)';
});
favoriteMenuOpen.addEventListener('mouseout', () => {
  setTimeout(() => {
    favoritePages.classList.add('is-hidden');
    arrowIcon.style.transform = 'rotate(0)';
  }, 5000);
});

favoriteMenuDesk.addEventListener('mouseover', () => {
  favoriteDesktop.classList.remove('is-hidden');
});

favoriteMenuDesk.addEventListener('mouseout', () => {
  setTimeout(() => {
    favoriteDesktop.classList.add('is-hidden');
  }, 3000);
});


const ingrList = document.querySelector('.favorite-ingridients');
const emptyText = document.querySelector('.empty-text');
console.log(ingrList)

let ingrPerPage;

let myIngr = [];

console.log( localStorage.getItem('drinksIngrId'))


getMurkupIngr();

function getMurkupIngr() {

  if (storageIngr.length > 0) {
    emptyText.textContent = '';
    
    storageIngr.forEach(async el=>{
      let json = await searchIngrById(el)
      console.log(json)
      

      let result = json.ingredients[0];
      myIngr.push(result)
      markIngr()
    })

} else {
    ingrList.innerHTML = '';
    emptyText.innerHTML = ` You haven't added any <br />favorite cocktails yet`;
  }
}

function markIngr (){
    let shownIngr
    
    if (innerWidth < 768) {
    ingrPerPage = 3;
  } else if (innerWidth >= 768 && innerWidth < 1280) {
    ingrPerPage = 6;
  } else if (innerWidth >= 1280) {
    ingrPerPage = 9;
  }
  
  shownIngr = myIngr.slice(0, ingrPerPage);
  ingrList.innerHTML = shownIngr.map(letMarkupMyIngr).join('');
  console.log('dsfg')
  
  
   actionOnLikeBtnIngr()
//    showModalInfo()
    onpenModalIngredient()
   
  }
  
  async function searchIngrById(el) {
    try {
      return await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${el}`
      ).then(response => response.json());
    } catch (error) {
      console.log('Помилка при ФЕТЧІ ===> ', error);
    }
  }
  function letMarkupMyIngr(el) {
    return `
      <li class="coctails__item-ingr">
        <h2 class="cocktails__item-title">${el.strIngredient}</h2>
        <p class="cocktails__item-text">${el.strType}</p>
        <div class="coctails__btns">
          <button class="btn__read-more" type="button" id="${el.strIngredient}">
            Learn more
          </button>
          <button id='${el.idIngredient}' class="btn__like " type="button">
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


  export function actionOnLikeBtnIngr() {
 

    const btnLike = document.querySelectorAll('.btn__like');
   
     btnLike.forEach(el => el.addEventListener('click', userChoise));
   
     function userChoise(event) {
       console.log(event)
       if (event.target.id.length === 0) {
         return;
       }
       if (!storageIngr.includes(event.target.id)) {
         storageIngr.push(event.target.id);
         event.path[0].lastElementChild.classList.add('active-like-btn');
         event.path[0].firstChild.textContent = 'Remove';

       } else {
         storageIngr.splice(storageIngr.indexOf(event.target.id), 1);
         event.path[0].lastElementChild.classList.remove('active-like-btn');
         event.path[0].firstChild.textContent = 'Add to';
        
       }
       localStorage.setItem('drinksIngrId', storageIngr);
     }
   }

   export function onpenModalIngredient() {

    const ingredientLink = document.querySelectorAll('.btn__read-more');
  
    ingredientLink.forEach(el => el.addEventListener('click', openIngrModal));
    let resultIngr;
    async function openIngrModal(event) {
    //   event.preventDefault();
      console.log(event.target.id)
      let ingr = event.target.id;

      const jsonn = await srchByIngr(ingr);
      console.log(jsonn)

    //   console.log(storageIngr)
  

      resultIngr = jsonn.ingredients[0];

      let a = resultIngr.idIngredient
    console.log(a)
    let res = checkLocalStorageIngr(a)

      

      markupModalIngr(resultIngr, res);
      modalIngrInteraction();
    }
  } 
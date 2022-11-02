import { storage } from './yuras';
import { actionOnLikeBtn } from './yuras';

import debounce from 'lodash.debounce';
const cocktailList = document.querySelector('.cocktails__list');
const srchInput = document.querySelector('.input-tablet');
const mobInput = document.querySelector('.input-mobile');
const abcSelect = document.querySelector('#letters');
const pageNums = document.querySelectorAll('.pages__link');
const abcList = document.querySelector('.letters-list');
let cocktailsPerPage;
const randomCocktailURL =
  'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const searchByFilterURL =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
const queryParams = {
  searchMethod: '',
  fetchQuery: '',
};

let windowHeight = window.innerHeight;

getRandomCocktails();

window.addEventListener('resize', debounce(resizeListener, 500));

async function getRandomCocktails(event) {
  try {
    // if (
    //   windowHeight !== window.innerHeight ||
    //   windowWidth !== window.innerWidth
    // ) {
    //   // console.log('windowHeight', windowHeight);
    //   // console.log('innerHeight', window.innerHeight);
    //   return;
    // } else if {

    // console.log(
    //   `windowHeight === event?.target?.innerHeight >>>`,
    //   event?.target?.innerWidth < 768 &&
    //     windowHeight === event?.target?.innerHeight
    // );

    // if (
    //   event?.target?.innerWidth < 768 &&
    //   windowHeight === event?.target?.innerHeight
    // ) {
    //   console.log(
    //     `windowHeight === event?.target?.innerHeight`,
    //     windowHeight === event?.target?.innerHeight
    //   );
    //   return;
    // }

    // if (
    //   event?.target?.innerWidth >= 768 &&
    //   event?.target?.innerWidth < 1200 &&
    //   windowHeight === event?.target?.innerHeight
    // ) {
    //   console.log(
    //     `windowHeight === event?.target?.innerHeight`,
    //     windowHeight === event?.target?.innerHeight
    //   );
    //   return;
    // }

    if (innerWidth < 768) {
      if (cocktailsPerPage === 3) {
        return;
      }
      cocktailsPerPage = 3;
    } else if (innerWidth >= 768 && innerWidth < 1280) {
      if (cocktailsPerPage === 6) {
        return;
      }
      cocktailsPerPage = 6;
    } else if (innerWidth >= 1280) {
      if (cocktailsPerPage === 9) {
        return;
      }
      cocktailsPerPage = 9;
    }

    const randomCocktailsArray = [];
    console.log('cocktailsPerPage', cocktailsPerPage);
    for (let i = 0; i < cocktailsPerPage; i++) {
      const response = await fetchRandomCocktail();
      randomCocktailsArray.push(...response.drinks);
    }

    cocktailList.innerHTML = randomCocktailsArray.map(createMarkup).join('');

    showModalInfo();
    actionOnLikeBtn();
    // }
  } catch (error) {
    console.log('Помилка у getRandomCocktails', error);
  }
}

async function fetchRandomCocktail() {
  try {
    const randomCocktail = await fetch(randomCocktailURL);
    return randomCocktail.json();
  } catch (error) {
    console.log(error);
  }
}

function resizeListener(event) {
  if (queryParams.fetchQuery === '') {
    getRandomCocktails(event);
  } else if (queryParams.fetchQuery !== '') {
    console.log('resizing viewport in pagination js');
    actionOnSearch(queryParams);
  }
}

function removeActiveLeter() {
  const curLetter = document.querySelectorAll('.letter-item');

  curLetter.forEach(letter => {
    if (letter.classList.contains('current-letter')) {
      letter.classList.remove('current-letter');
    }
  });
}

mobInput.addEventListener('submit', actionOnForm);

function actionOnForm(event) {
  event.preventDefault();
  removeActiveLeter();

  queryParams.searchMethod = 's';
  queryParams.fetchQuery = event.currentTarget.searchQuery.value;

  actionOnSearch(queryParams);
}

srchInput.addEventListener('submit', actionOnForm);

abcSelect.addEventListener('change', event => {
  removeActiveLeter();

  queryParams.searchMethod = 'f';
  queryParams.fetchQuery = event.target.value;

  actionOnSearch(queryParams);
});

abcList.addEventListener('click', event => {
  if (event.currentTarget === event.target) {
    return;
  }

  removeActiveLeter();

  event.target.classList.add('current-letter');

  queryParams.searchMethod = 'f';
  queryParams.fetchQuery = event.target.textContent;

  actionOnSearch(queryParams);
});

async function actionOnSearch(queryParams) {
  try {
    const { searchMethod, fetchQuery } = queryParams;
    const json = await fetchBySrch(searchMethod, fetchQuery);
    cocktailList.innerHTML = '';
    const cocktailsArray = json.drinks;
    let shownCocktails;

    if (cocktailsArray === null) {
      cocktailList.innerHTML = `<h2>НІЦ НЕМА</h2>`;
      return;
    }

    if (innerWidth < 768) {
      cocktailsPerPage = 3;
    } else if (innerWidth >= 768 && innerWidth < 1280) {
      cocktailsPerPage = 6;
    } else if (innerWidth >= 1280) {
      cocktailsPerPage = 9;
    }

    shownCocktails = cocktailsArray.slice(0, cocktailsPerPage);
    cocktailList.insertAdjacentHTML(
      'beforeend',
      shownCocktails.map(createMarkup).join('')
    );

    showModalInfo();
    actionOnLikeBtn();

    for (let pageNum of pageNums) {
      const numOfPage = pageNum.textContent;
      const pageStart = (+numOfPage - 1) * cocktailsPerPage;
      const pageEnd = pageStart + cocktailsPerPage;

      pageNum.addEventListener('click', addTemplateToMarkup);

      function addTemplateToMarkup() {
        shownCocktails = cocktailsArray.slice(pageStart, pageEnd);

        return (cocktailList.innerHTML = shownCocktails
          .map(createMarkup)
          .join(''));
      }
    }
  } catch (error) {
    console.log('Помилка в actionOnSearch ===> ', error);
  }
}

async function fetchBySrch(filter, entrie) {
  try {
    return await fetch(`${searchByFilterURL}${filter}=${entrie}`).then(
      response => response.json()
    );
  } catch (error) {
    console.log('Помилка при ФЕТЧІ ===> ', error);
  }
}

function createMarkup({ strDrinkThumb, strDrink, idDrink }) {
  return `
<li class="coctails__item">
  <img src="${strDrinkThumb}" alt="${strDrink}" width="280" height="280" />
  <h2 class="cocktails__item-title">${strDrink}</h2>
  <div class="coctails__btns">
    <button class="btn__read-more" type="button" id="${idDrink}">
      Learn more
    </button>
    <button id='${idDrink}' class="btn__like" type="button">
      Add to
      <svg class="btn__like-icon"><use xlink:href="#icon-Heart"><symbol id="icon-Heart" viewBox="0 0 35 32">
      <path fill="#fd5103" style="fill: var(--color1, #fd5103)" d="M17.684 32l-2.564-2.302c-9.107-8.144-15.12-13.515-15.12-20.107 0-5.371 4.28-9.591 9.726-9.591 3.077 0 6.030 1.413 7.958 3.645 1.928-2.232 4.881-3.645 7.958-3.645 5.447 0 9.726 4.22 9.726 9.591 0 6.592-6.013 11.963-15.12 20.124l-2.564 2.284z"></path>
      <path  d="M17.684 28.632l-2.076-1.817c-7.373-6.429-12.24-10.67-12.24-15.874 0-4.24 3.464-7.572 7.874-7.572 2.491 0 4.882 1.115 6.442 2.877 1.56-1.762 3.951-2.877 6.442-2.877 4.409 0 7.874 3.332 7.874 7.572 0 5.204-4.867 9.444-12.24 15.888l-2.076 1.803z"></path>
      </symbol></use></svg>
    </button>
  </div>
</li>
`;
}

// ===================================================================

function showModalInfo() {
  const btnReadMore = document.querySelectorAll('.btn__read-more');
  btnReadMore.forEach(el => el.addEventListener('click', userOpenMOdal));
}

async function userOpenMOdal(event) {
  if (event.target.id.length === 0) {
    console.log('event.target', event.target);

    return;
  } else {
    id = event.target.id;

    const json = await srchById(id);
    console.log('json', json);

    let myIngidient = json.drinks[0];
    console.log('myIngidient [0]', myIngidient);

    let myIngidientsList = [];
    let myIngidientsRecipe = [];

    for (ingr in myIngidient) {
      if (ingr.includes('strIngredient') && myIngidient[ingr] !== null) {
        myIngidientsList.push(myIngidient[ingr]);
      }
    }
    for (ingr in myIngidient) {
      if (ingr.includes('strMeasur') && myIngidient[ingr] !== null) {
        myIngidientsRecipe.push(myIngidient[ingr]);
      }
    }
    console.log('myIngidientsList', myIngidientsList);
    console.log('myIngidientsRecipe', myIngidientsRecipe);

    const local = document.querySelector('.local-storage-ingr');
    console.log(local);

    let number = -1;
    const listItems = myIngidientsList
      .map(el => {
        number++;
        return `<li class="modal-item coctal-item">${
          myIngidientsRecipe[number] || ''
        }
         <a href="#" class="modal-link coctal-link">${el}</a> </li>`;
      })
      .join('');

    VovaSaid(listItems, myIngidient);

    modalInteraction();

    function VovaSaid(
      listItems,
      { strDrinkThumb, strDrink, strInstructions, idDrink }
    ) {
      return (local.innerHTML = `<div id="modal-koktel" class="modal-coctal modal">
        <div class="modal-content container">
          <div class="first-part-decor">
            <img src="${strDrinkThumb}" alt="${strDrink}" class="img-coctal-desctop" />
            <h2 class="modal-title hidden-name">${strDrink}</h2>
            <div class="decoration-koktels">
              <h2 class="modal-title coctal-name">${strDrink}</h2>
              <h3 class="koktel-ingr">INGREDIENTS</h3>
              <p class="after-coctal-ingr">Per cocktail</p>
              <ul class="modal-list coctal-list">
                ${listItems}
              </ul>
            </div>
          </div>
      
          <p class="koktel-instr modal-after-title">Instractions:</p>
          <button type="button" class="isClose">x</button>
          <p class="koktel-instr-text modal-text">${strInstructions}
          </p>
          <img src="${strDrinkThumb}" alt="${strDrink}" class="img-coctal-modile" />
       
          <div class="decoration-coctal">
            <h3 class="coctal-ingr">INGREDIENTS</h3>
            <p class="after-coctal-ingr">Per cocktail</p>
            <ul class="modal-list coctal-list">
              ${listItems}
            </ul>
          </div>
          <div class="decoration-button">
            <button id="${idDrink}" class="button-test">Add to favorite</button>
          </div>
        </div>
      </div>`);
    }
  }
}

async function srchById(id) {
  try {
    console.log('перед фетчом');
    return await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then(response => response.json());
  } catch (error) {
    throw new Error('Помилка при ФЕТЧІ ===> ' + error.message);
  }
}

// ==================================================================

function modalInteraction() {
  const btnAdd = document.querySelector('.button-test');
  console.log(btnAdd);
  const btnClose = document.querySelector('.isClose');
  const modal = document.querySelector('.modal');
  console.log(btnClose);
  btnClose.addEventListener('click', modalClose);

  function modalClose(event) {
    console.log(event.target);
    modal.classList.add('hidden-modal');
  }

  btnAdd.addEventListener('click', use);
  function use(event) {
    console.log('event.target >>>', event.target);
    console.log('event.target.id >>>', event.target.id);
    if (event.target.id.length === 0) {
      return;
    }
    if (!storage.includes(event.target.id)) {
      storage.push(event.target.id);
      // event.path[0].lastElementChild.classList.add('active-like-btn');
      event.path[0].firstChild.textContent = 'Remove';
    } else {
      storage.splice(storage.indexOf(event.target.id), 1);
      // event.path[0].lastElementChild.classList.remove('active-like-btn');
      event.path[0].firstChild.textContent = 'Add to';
    }
    localStorage.setItem('drinksId', storage);
  }
}

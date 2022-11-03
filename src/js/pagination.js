import debounce from 'lodash.debounce';
import { actionOnLikeBtn } from './yuras';
import { showModalInfo } from './modal-coctail';
import {
  refs,
  fetchBySrch,
  createMarkup,
  createArrows,
  pageNumListeners,
  removeActiveLeter,
  arrowPagination,
  createNumBar,
} from './vars';

const {
  cocktailList,
  srchInput,
  mobInput,
  abcSelect,
  abcList,
  randomCocktailURL,
  searchByFilterURL,
  title,
  emptySearchResult,
  htmlNumBar,
} = refs;

const queryParams = {
  searchMethod: '',
  fetchQuery: '',
};
let cocktailsPerPage;
let numsQuantity = 0;

getRandomCocktails();
window.addEventListener('resize', debounce(resizeListener, 500));
mobInput.addEventListener('submit', actionOnForm);
srchInput.addEventListener('submit', actionOnForm);
abcSelect.addEventListener('click', abcSelectAction);
abcList.addEventListener('click', abcListAction);

async function getRandomCocktails(event) {
  try {
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

    const randomresponseArray = [];
    for (let i = 0; i < cocktailsPerPage; i++) {
      const response = await fetchRandomCocktail();
      randomresponseArray.push(...response.drinks);
    }
    cocktailList.innerHTML = randomresponseArray.map(createMarkup).join('');

    showModalInfo();
    actionOnLikeBtn();
  } catch (error) {
    console.log('Помилка у getRandomCocktails', error);
  }
}
async function fetchRandomCocktail() {
  try {
    return await fetch(randomCocktailURL).then(response => response.json());
  } catch (error) {
    console.log(error);
  }
}
function resizeListener(event) {
  if (queryParams.fetchQuery === '') {
    getRandomCocktails(event);
  } else if (queryParams.fetchQuery !== '') {
    if (innerWidth < 768 && cocktailsPerPage === 3) {
      return;
    } else if (
      innerWidth >= 768 &&
      innerWidth < 1280 &&
      cocktailsPerPage === 6
    ) {
      return;
    } else if (innerWidth >= 1280 && cocktailsPerPage === 9) {
      return;
    }
    actionOnSearch(queryParams);
  }
}
function actionOnForm(event) {
  event.preventDefault();
  removeActiveLeter();

  queryParams.searchMethod = 's';
  queryParams.fetchQuery = event.currentTarget.searchQuery.value;

  actionOnSearch(queryParams);
}
function abcSelectAction(event) {
  removeActiveLeter();

  queryParams.searchMethod = 'f';
  queryParams.fetchQuery = event.target.textContent;

  actionOnSearch(queryParams);
}
function abcListAction(event) {
  if (event.currentTarget === event.target) {
    return;
  }

  removeActiveLeter();
  event.target.classList.add('current-letter');

  queryParams.searchMethod = 'f';
  queryParams.fetchQuery = event.target.textContent;

  actionOnSearch(queryParams);
}
async function actionOnSearch(queryParams) {
  try {
    emptySearchResult.classList.add('is-hidden');
    const { searchMethod, fetchQuery } = queryParams;
    let shownCocktailsArray;
    htmlNumBar.innerHTML = '';
    cocktailList.innerHTML = '';
    const json = await fetchBySrch(searchByFilterURL, searchMethod, fetchQuery);
    const responseArray = json.drinks;

    if (responseArray === null) {
      title.textContent = `Sorry, we didn't find any cocktail for you`;
      emptySearchResult.classList.remove('is-hidden');
      return;
    } else {
      title.textContent = 'Search results';
    }

    if (innerWidth < 768) {
      cocktailsPerPage = 3;
    } else if (innerWidth >= 768 && innerWidth < 1280) {
      cocktailsPerPage = 6;
    } else if (innerWidth >= 1280) {
      cocktailsPerPage = 9;
    }

    shownCocktailsArray = responseArray.slice(0, cocktailsPerPage);
    cocktailList.innerHTML = shownCocktailsArray.map(createMarkup).join('');

    if (responseArray.length > shownCocktailsArray.length) {
      let counter = 1;
      createNumBar(numsQuantity, htmlNumBar, responseArray, cocktailsPerPage);

      const pageNumButtons = document.querySelectorAll('.pages__link');
      pageNumButtons[0].classList.add('active-nav');
      const navigationNums = document.querySelector('.pages');

      navigationNums.addEventListener('click', event => {
        if (event.target === event.currentTarget) {
          return;
        }
        console.log(+event.target.textContent);
      });

      pageNumListeners(
        cocktailsPerPage,
        shownCocktailsArray,
        responseArray,
        cocktailList,
        pageNumButtons,
        counter
      );

      console.log(counter);
      createArrows(htmlNumBar);
      arrowPagination(
        counter,
        responseArray,
        cocktailsPerPage,
        pageNumButtons,
        // numsQuantity,
        cocktailList
      );
    }
    showModalInfo();
    actionOnLikeBtn();
  } catch (error) {
    console.log('Помилка в actionOnSearch ===> ', error);
  }
}

console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------00----------------------------')
console.log('-------------------0----0--------00-----------------------')
console.log('--------------------------00------------------------------')
console.log('----------------------00--00--00--------------------------')
console.log('------------------------00--00----------------------------')
console.log('-------------------------000------------------------------')
console.log('--------------------------0-------------------------------')
console.log('---------------------00000-00000--------------------------')
console.log('--------------------000000-000000-------------------------')
console.log('-------------------000000000000000------------------------')
console.log('------------------00000000000000000-----------------------')
console.log('-------------------000000000000000------------------------')
console.log('-------------------000000000000000------------------------')
console.log('-------------------000000000000000------------------------')
console.log('-------------------000000000000000------------------------')
console.log('-------------------000000000000000------------------------')
console.log('-------------------000000000000000------------------------')
console.log('-------------------000000000000000------------------------')
console.log('-------------------000000000000000------------------------')
console.log('-------------------000000000000000------------------------')
console.log('-------------------000000000000000------------------------')
console.log('-------------------000000000000000------------------------')
console.log('--------------ddddd000000000000000bbbbbb------------------')
console.log('------------ddddddd000000000000000bbbbbbbb----------------')
console.log('------------ddddddd000000000000000bbbbbbbbb---------------')
console.log('-----------dddddd0000000000000000000bbbbbbb---------------')
console.log('------------ddd00000000000000000000000bbbb----------------')
console.log('-------------000000000000000000000000000------------------')

console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')
console.log('----------------------------------------------------------')


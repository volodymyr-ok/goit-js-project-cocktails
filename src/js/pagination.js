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
      createNumBar(numsQuantity, htmlNumBar, responseArray, cocktailsPerPage);

      const pageNumButtons = document.querySelectorAll('.pages__link');
      pageNumButtons[0].classList.add('active-nav');
      let currentPage = +document.querySelector('.active-nav').textContent;
      const navigationNums = document.querySelector('.pages');

      navigationNums.addEventListener('click', event => {
        if (event.target === event.currentTarget) {
          return;
        }
        showModalInfo();
        actionOnLikeBtn();
      });

      pageNumListeners(
        cocktailsPerPage,
        shownCocktailsArray,
        responseArray,
        cocktailList,
        pageNumButtons
      );

      createArrows(htmlNumBar);
      arrowPagination(
        responseArray,
        cocktailsPerPage,
        pageNumButtons,
        cocktailList,
        currentPage
      );
    }
    showModalInfo();
    actionOnLikeBtn();
  } catch (error) {
    console.log('Помилка в actionOnSearch ===> ', error);
  }
}

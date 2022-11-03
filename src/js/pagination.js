import debounce from 'lodash.debounce';
import { actionOnLikeBtn } from './yuras';
import { showModalInfo } from './modal-coctail';
import { refs } from './vars';
import { fetchBySrch } from './vars';
import { createMarkup } from './vars';
import { createArrows } from './vars';
import { pageNumListeners } from './vars';
// import { onpenModalIngredient } from './yuras-m';
// import { storage } from './yuras';
// import { onpenModalIngredient } from './yuras-m';

const {
  cocktailList,
  srchInput,
  mobInput,
  abcSelect,
  abcList,
  randomCocktailURL,
  searchByFilterURL,
  title,
  htmlNumBar,
} = refs;

let cocktailsPerPage;
let numsQuantity = 0;
const queryParams = {
  searchMethod: '',
  fetchQuery: '',
};

getRandomCocktails();
window.addEventListener('resize', debounce(resizeListener, 500));
mobInput.addEventListener('submit', actionOnForm);
srchInput.addEventListener('submit', actionOnForm);
abcSelect.addEventListener('change', abcSelectAction);
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
  queryParams.fetchQuery = event.target.value;

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
    const { searchMethod, fetchQuery } = queryParams;
    let shownCocktailsArray;
    htmlNumBar.innerHTML = '';
    cocktailList.innerHTML = '';
    const json = await fetchBySrch(searchByFilterURL, searchMethod, fetchQuery);
    const responseArray = json.drinks;

    if (responseArray === null) {
      title.textContent = `Sorry, we didn't find any cocktail for you`;
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
      numsQuantity = Math.ceil(responseArray.length / cocktailsPerPage);

      const arrayOfPageNumbers = [];
      for (let numberOfPage = 1; numberOfPage <= numsQuantity; numberOfPage++) {
        arrayOfPageNumbers.push(
          `<button class="pages__link" type='button'>${numberOfPage}</button>`
        );
      }

      htmlNumBar.innerHTML = `
      <li class="navigation__item pages">${arrayOfPageNumbers.join('')}</li>`;

      pageNumListeners(
        cocktailsPerPage,
        shownCocktailsArray,
        responseArray,
        cocktailList
      );

      createArrows(htmlNumBar);
    }
    showModalInfo();
    actionOnLikeBtn();
  } catch (error) {
    console.log('Помилка в actionOnSearch ===> ', error);
  }
}

// const pageNumbers = (total, max, current) => {
//   const half = Math.round(max / 2);
//   let to = max;

//   if (current + half >= total) {
//     to = total;
//   } else if (current > half) {
//     ro = current + half;
//   }

//   let from = to - max;

//   return Array.from({ length: max }, (_, i) => i + 1 + from);
// };
// console.log(pageNumbers(9, 5, 9));

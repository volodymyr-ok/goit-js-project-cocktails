import debounce from 'lodash.debounce';
import { actionOnLikeBtn } from './yuras';
import { showModalInfo } from './modal-coctail';
import { refs } from './vars';
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
  htmlNumBar,
  title,
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
    htmlNumBar.forEach(el => (el.innerHTML = ''));
    const { searchMethod, fetchQuery } = queryParams;
    const json = await fetchBySrch(searchMethod, fetchQuery);
    cocktailList.innerHTML = '';
    const responseArray = json.drinks;
    let shownCocktailsArray;

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
        // createNums(numberOfPage);
      }

      // function createNums(num) {
      //   return arrayOfPageNumbers.push(`
      // <button class="pages__link" type='button'>${num}</button>
      // `);
      // }

      const numBarBelowPage = document.querySelector('.pages');
      numBarBelowPage.insertAdjacentHTML(
        'beforeend',
        arrayOfPageNumbers.join('')
      );

      const pageNums = document.querySelectorAll('.pages__link');
      for (let pageNum of pageNums) {
        const numOfPage = pageNum.textContent;
        const pageStart = (numOfPage - 1) * cocktailsPerPage;
        const pageEnd = pageStart + cocktailsPerPage;

        pageNum.addEventListener('click', addTemplateToMarkup);

        function addTemplateToMarkup() {
          shownCocktailsArray = responseArray.slice(pageStart, pageEnd);

          return (cocktailList.innerHTML = shownCocktailsArray
            .map(createMarkup)
            .join(''));
        }
      }

      createArrows();
    }
    showModalInfo();
    actionOnLikeBtn();
  } catch (error) {
    console.log('Помилка в actionOnSearch ===> ', error);
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

function createArrows() {
  const pageNav = document.querySelector('.navigation');
  const prevArrow = `
      <li class="navigation__item">
        <button class="navigation__btn-prev disabled" type="button">
          <svg class="navigation__btn-prev-icon">
            <use xlink:href="#icon-nav-prev">
            <symbol id="icon-nav-prev" viewBox="0 0 21 32">
              <path d="M16.533 0l-16 16 16 16 3.76-3.76-12.213-12.24 12.213-12.24z"></path>
            </symbol>
            </use>
          </svg>
        </button>
      </li>
    `;
  const lastArrow = `
      <li class="navigation__item">
      <button class="navigation__btn-next" type="button">
        <svg class="navigation__btn-next-icon">
          <use xlink:href="#icon-nav-next">
          <symbol id="icon-nav-next" viewBox="0 0 21 32">
            <path d="M5.387 32l16-16-16-16-3.76 3.76 12.213 12.24-12.213 12.24z"></path>
          </symbol>
          </use>
        </svg>
      </button>
    </li>
      `;

  pageNav.insertAdjacentHTML('afterbegin', prevArrow);
  pageNav.insertAdjacentHTML('beforeend', lastArrow);
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

const pageNumbers = (total, max, current) => {
  const half = Math.round(max / 2);
  let to = max;

  if (current + half >= total) {
    to = total;
  } else if (current > half) {
    ro = current + half;
  }

  let from = to - max;

  return Array.from({ length: max }, (_, i) => i + 1 + from);
};

console.log(pageNumbers(9, 5, 9));

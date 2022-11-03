// import { onpenModalIngredient } from './yuras-m';
// import { storage } from './yuras';
// import { onpenModalIngredient } from './yuras-m';

export const refs = {
  cocktailList: document.querySelector('.cocktails__list'),
  srchInput: document.querySelector('.input-tablet'),
  mobInput: document.querySelector('.input-mobile'),
  abcSelect: document.querySelector('#letters'),
  abcList: document.querySelector('.letters-list'),
  randomCocktailURL: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  searchByFilterURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?',
  title: document.querySelector('.cocktails__title'),
  htmlNumBar: document.querySelector('.navigation'),
  pageNums: document.querySelectorAll('.pages__link'),
};

export function fetchBySrch(URL, filter, entrie) {
  try {
    return fetch(`${URL}${filter}=${entrie}`).then(response => response.json());
  } catch (error) {
    console.log('Помилка при ФЕТЧІ ===> ', error);
  }
}
export function createMarkup({ strDrinkThumb, strDrink, idDrink }) {
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
export function createArrows(whereInsert) {
  const prevArrow = `
      <li class="navigation__item arrows">
        <button class="navigation__btn-prev" type="button">
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
      <li class="navigation__item arrows">
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

  whereInsert.insertAdjacentHTML('afterbegin', prevArrow);
  whereInsert.insertAdjacentHTML('beforeend', lastArrow);
}
export function pageNumListeners(
  cocktailsPerPage,
  shownCocktailsArray,
  responseArray,
  cocktailList
) {
  const pageNums = document.querySelectorAll('.pages__link');

  for (let pageNum of pageNums) {
    const numOfPage = pageNum.textContent;
    const pageStart = (numOfPage - 1) * cocktailsPerPage;
    const pageEnd = pageStart + cocktailsPerPage;

    pageNum.addEventListener('click', () => {
      shownCocktailsArray = responseArray.slice(pageStart, pageEnd);
      cocktailList.innerHTML = shownCocktailsArray.map(createMarkup).join('');
    });
  }
}

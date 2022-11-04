import { actionOnLikeBtn } from './yuras';
import { showModalInfo } from './modal-coctail';

export const refs = {
  cocktailList: document.querySelector('.cocktails__list'),
  srchInput: document.querySelector('.input-tablet'),
  mobInput: document.querySelector('.input-mobile'),
  abcSelect: document.querySelector('.select-menu'),
  abcList: document.querySelector('.letters-list'),
  randomCocktailURL: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  searchByFilterURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?',
  title: document.querySelector('.cocktails__title'),
  emptySearchResult: document.querySelector('.sorry-image'),
  htmlNumBar: document.querySelector('.navigation'),
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

export function createNumBar(
  numsQuantity,
  htmlNumBar,
  responseArray,
  cocktailsPerPage
) {
  const arrayOfPageNumbers = [];
  numsQuantity = Math.ceil(responseArray.length / cocktailsPerPage);

  for (let numberOfPage = 1; numberOfPage <= numsQuantity; numberOfPage++) {
    arrayOfPageNumbers.push(
      `<button class="pages__link" type='button'>${numberOfPage}</button>`
    );
  }

  htmlNumBar.innerHTML = `
      <li class="navigation__item pages">${arrayOfPageNumbers.join('')}</li>`;
}

export function pageNumListeners(
  cocktailsPerPage,
  shownCocktailsArray,
  responseArray,
  cocktailList,
  pageNumButtons,
  counter
) {
  for (let pageNumButton of pageNumButtons) {
    const numOfPage = pageNumButton.textContent;
    const pageStart = (numOfPage - 1) * cocktailsPerPage;
    const pageEnd = pageStart + cocktailsPerPage;

    pageNumButton.addEventListener('click', event => {
      pageNumButtons.forEach(num => num.classList.remove('active-nav'));
      event.target.classList.add('active-nav');

      shownCocktailsArray = responseArray.slice(pageStart, pageEnd);
      cocktailList.innerHTML = shownCocktailsArray.map(createMarkup).join('');
    });
  }
}

export function createArrows(htmlNumBar) {
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

  htmlNumBar.insertAdjacentHTML('afterbegin', prevArrow);
  htmlNumBar.insertAdjacentHTML('beforeend', lastArrow);
}

export function removeActiveLeter() {
  const curLetter = document.querySelectorAll('.letter-item');
  curLetter.forEach(letter => {
    if (letter.classList.contains('current-letter')) {
      letter.classList.remove('current-letter');
    }
  });
}

export function arrowPagination(
  counter,
  responseArray,
  cocktailsPerPage,
  pageNumButtons,
  cocktailList
) {
  const prevPageBtn = document.querySelector('.navigation__btn-prev');
  const nextPageBtn = document.querySelector('.navigation__btn-next');
  let currentPage = +document.querySelector('.active-nav').textContent;
  let numsQuantity = Math.ceil(responseArray.length / cocktailsPerPage);
  console.log('currentPage', currentPage);

  prevPageBtn.addEventListener('click', () => {
    console.log('numsQuantity', numsQuantity);
    // if (currentPage === 1) {
    //     return
    // }
    currentPage--;
    console.log('cocktailsPerPage', cocktailsPerPage);
    const startPagination =
      (currentPage - 1) * cocktailsPerPage + cocktailsPerPage;
    console.log('startPagination', startPagination);
    const endPagination = startPagination + cocktailsPerPage;
    console.log('endPagination', endPagination);
    console.log('currentPage', currentPage);
    const shownCocktailsArray = responseArray.slice(
      startPagination,
      endPagination
    );
    cocktailList.innerHTML = shownCocktailsArray.map(createMarkup).join('');

    pageNumButtons.forEach(btn => {
      btn.classList.remove('active-nav');
      if (+btn.textContent === currentPage) {
        btn.classList.add('active-nav');
      }
    });
    showModalInfo();
    actionOnLikeBtn();
  });

  nextPageBtn.addEventListener('click', event => {
    const startPagination =
      (currentPage - 1) * cocktailsPerPage + cocktailsPerPage;
    const endPagination = startPagination + cocktailsPerPage;
    currentPage++;

    const shownCocktailsArray = responseArray.slice(
      startPagination,
      endPagination
    );
    cocktailList.innerHTML = shownCocktailsArray.map(createMarkup).join('');

    pageNumButtons.forEach(btn => {
      btn.classList.remove('active-nav');
      if (+btn.textContent === currentPage) {
        btn.classList.add('active-nav');
      }
    });
    if (currentPage === numsQuantity) {
      nextPageBtn.disabled = true;
    }
    showModalInfo();
    actionOnLikeBtn();
  });
}

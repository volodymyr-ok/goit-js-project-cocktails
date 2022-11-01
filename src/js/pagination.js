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

getRandomCocktails();
window.addEventListener('resize', debounce(resizeListener, 500));

async function getRandomCocktails() {
  try {
    if (innerWidth < 768) {
      cocktailsPerPage = 3;
    } else if (innerWidth >= 768 && innerWidth < 1280) {
      cocktailsPerPage = 6;
    } else if (innerWidth >= 1280) {
      cocktailsPerPage = 9;
    }

    const randomCocktailsArray = [];

    for (let i = 0; i < cocktailsPerPage; i++) {
      const response = await fetchRandomCocktail();
      randomCocktailsArray.push(...response.drinks);
    }

    cocktailList.innerHTML = randomCocktailsArray.map(createMarkup).join('');
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

function resizeListener() {
  if (queryParams.fetchQuery === '') {
    getRandomCocktails();
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

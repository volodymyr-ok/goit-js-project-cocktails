// import debounce from 'lodash.debounce';

const cocktailList = document.querySelector('.cocktails__list');
const srchInput = document.querySelector('[name="cocktail-search"]');

let cocktailsPerPage;

srchInput.addEventListener('change', actionOnIput);

// window.addEventListener('resize', debounce(resizeListener, 500));

// function resizeListener() {
//   console.log('resizing viewport');

//   if (innerWidth < 768) {
//     actionOnIput();
//   } else if (innerWidth >= 768) {
//     actionOnIput();
//   } else if (innerWidth >= 1200) {
//     actionOnIput();
//   }
// }

async function actionOnIput() {
  try {
    const json = await fetchBySrch(srchInput.value);
    const cocktailsArray = json.drinks;

    cocktailList.innerHTML = '';

    if (cocktailsArray === null) {
      cocktailList.innerHTML = `<h2>НІЦ НЕМА</h2>`;
      return;
    }

    const pageNums = document.querySelectorAll('.pages__link');

    if (innerWidth <= 320) {
      cocktailsPerPage = 3;
    } else if (innerWidth >= 768 && innerWidth < 1200) {
      cocktailsPerPage = 6;
    } else if (innerWidth >= 1200) {
      cocktailsPerPage = 9;
    }

    let shownCocktails;

    shownCocktails = cocktailsArray.slice(0, cocktailsPerPage);
    cocktailList.insertAdjacentHTML(
      'beforeend',
      shownCocktails.map(createMarkup).join('')
    );

    for (let pageNum of pageNums) {
      const numOfPage = pageNum.textContent;
      const pageStart = (+numOfPage - 1) * cocktailsPerPage;
      const pageEnd = pageStart + cocktailsPerPage;

      pageNum.addEventListener('click', event => {
        shownCocktails = cocktailsArray.slice(pageStart, pageEnd);

        return (cocktailList.innerHTML = shownCocktails
          .map(createMarkup)
          .join(''));
      });
    }
  } catch (error) {
    throw new Error('Помилка в actionOnIput ===> ' + error.message);
  }
}

async function fetchBySrch(entrie) {
  try {
    console.log('перед фетчом');
    return await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${entrie}`
    ).then(response => response.json());
  } catch (error) {
    throw new Error('Помилка при ФЕТЧІ ===> ' + error.message);
  }
}

function createMarkup({ strDrinkThumb, strDrink }) {
  console.log('Початок створення розмітки');
  return `
          <li class="coctails__item">
            <img src="${strDrinkThumb}" alt="${strDrink}" width="280" height="280" />
            <h2 class="cocktails__item-title">${strDrink}</h2>
            <div class="coctails__btns">
              <button class="btn__read-more" type="button">Learn more</button>
              <button class="btn__like" type="button">
                Add to<svg class="btn__like-icon">
                  <use href="./images/icons.svg#icon-heart"></use>
                </svg>
              </button>
            </div>
          </li>
        `;
}

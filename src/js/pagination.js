const cocktailList = document.querySelector('.cocktails__list');
const srchInput = document.querySelector('[name="cocktail-search"]');

const ccktlsPerPage = 9;

srchInput.addEventListener('change', actionOnIput);

async function actionOnIput() {
  try {
    const json = await fetchBySrch(srchInput.value);
    console.log('json.drinks ==>', json.drinks);

    cocktailList.innerHTML = '';

    if (json.drinks === null) {
      cocktailList.innerHTML = `<h2>НІЦ НЕМА</h2>`;
      return;
    }

    cocktailList.insertAdjacentHTML(
      'beforeend',
      json.drinks.map(createMarkup).join('')
    );
  } catch (error) {
    throw new Error('Помилка після пошуку або розмітки ===> ' + error.message);
  }
}

async function fetchBySrch(entrie) {
  try {
    return await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${entrie}`
    ).then(response => response.json());
  } catch (error) {
    throw new Error('Помилка при ФЕТЧІ ===> ' + error.message);
  }
}

function createMarkup({ strDrinkThumb, strDrink, idDrink }) {
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

// <li class='random-item'>
//         <img src='${strDrinkThumb}' alt='name: ${strDrink}' width='100px'>
//         <h2>${strDrink}</h2>
//         <!-- <p>id: ${idDrink}</p> -->
//         <a href='../local-storage.html' class='learn-more-btn'>Learn more</a>
//         <button class='save-to-strg-btn'>Add to ❤</button>
//     </li>

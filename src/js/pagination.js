const cocktailList = document.querySelector('.random-cocktail-list');
const srchInput = document.querySelector('[name="cocktail-search"]');

const perPage = 9;

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
    <li class='random-item'>
        <img src='${strDrinkThumb}' alt='name: ${strDrink}' width='100px'>
        <h2>${strDrink}</h2>
        <!-- <p>id: ${idDrink}</p> -->
        <a href='../local-storage.html' class='learn-more-btn'>Learn more</a>
        <button class='save-to-strg-btn'>Add to ❤</button>
    </li>
`;
}

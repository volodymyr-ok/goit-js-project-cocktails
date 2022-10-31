import debounce from 'lodash.debounce';

const cocktailList = document.querySelector('.cocktails__list');
let cocktailsPerPage = 3;

const srchInput = document.querySelector('[name="cocktail-search"]');

window.addEventListener('resize', debounce(resizeListener, 500));

function resizeListener() {
  console.log('resizing viewport');

  // if (srchInput !== '') {
  //   return;
  // }

  // getCocktails();

  if (innerWidth < 768 && srchInput === '') {
    getCocktails();
  } else if (innerWidth >= 768 && srchInput === '') {
    getCocktails();
  } else if (innerWidth >= 1200 && srchInput === '') {
    getCocktails();
  }
}

getCocktails();

async function getCocktails() {
  // console.log('* Start random with innerWidth *', innerWidth);
  try {
    if (innerWidth < 768) {
      cocktailsPerPage = 3;
    } else if (innerWidth >= 768 && innerWidth < 1200) {
      cocktailsPerPage = 6;
    } else if (innerWidth >= 1200) {
      cocktailsPerPage = 9;
    }

    randomCocktailsArray = [];

    for (let i = 0; i < cocktailsPerPage; i++) {
      const result = await fetchRandomCocktail();
      randomCocktailsArray.push(...result.drinks);
      // const learnMoreBtn = document.querySelector('.btn__read-more');
      // learnMoreBtn.addEventListener('click', (event, item) => {
      //   console.log('on click');
      //   console.log(event.target);
      //   console.log(event.currentTarget);
      //   console.log(item);
      //   // localStorage.setItem('favoriteCocktails', item);
      // });
    }

    cocktailList.innerHTML = randomCocktailsArray.map(updateMarkup).join('');
  } catch (error) {
    console.log(error);
  }
}

async function fetchRandomCocktail() {
  const randomCocktail = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  return randomCocktail.json();
}

const updateMarkup = ({ strDrink, strDrinkThumb, idDrink }) => `
<li class="coctails__item">
  <img src="${strDrinkThumb}" alt="${strDrink}" width="280" height="280" />
  <h2 class="cocktails__item-title">${strDrink}</h2>
  <div class="coctails__btns">
    <button class="btn__read-more" type="button">
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

const cocktailList = document.querySelector('.cocktails__list');
let cocktailsPerPage = 3;

// window.addEventListener('resize', resizeListener);

// function resizeListener() {
//   console.log('resizing viewport');
//   cocktailsPerPage = window.innerWidth;
// }

getCocktails();

async function getCocktails() {
  console.log('* Start random with innerWidth *', innerWidth);
  try {
    if (innerWidth <= 320) {
      cocktailsPerPage = 3;
    } else if (innerWidth >= 768 && innerWidth < 1200) {
      cocktailsPerPage = 6;
    } else if (innerWidth >= 1200) {
      cocktailsPerPage = 9;
    }

    for (let i = 0; i < cocktailsPerPage; i++) {
      const result = await fetchRandomCocktail();
      cocktailList.insertAdjacentHTML(
        'beforeend',
        result.drinks.map(updateMarkup).join('')
      );

      const learnMoreBtn = document.querySelector('.btn__read-more');
      learnMoreBtn.addEventListener('click', (event, item) => {
        console.log('on click');
        console.log(event.target);
        console.log(event.currentTarget);
        console.log(item);
        // localStorage.setItem('favoriteCocktails', item);
      });
    }
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

const updateMarkup = ({ strDrink, strDrinkThumb }) => `
<li class="coctails__item">
  <img src="${strDrinkThumb}" alt="${strDrink}" width="280" height="280" />
  <h2 class="cocktails__item-title">${strDrink}</h2>
  <div class="coctails__btns">
    <button class="btn__read-more" type="button">
      Learn more
    </button>
    <button class="btn__like" type="button">
      Add to
      <svg class="btn__like-icon">
        <use href="./images/icons.svg#icon-heart"></use>
      </svg>
    </button>
  </div>
</li>
`;

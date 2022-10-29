const cocktailList = document.querySelector('.random-cocktail-list');
const getBtn = document.querySelector('.get-random');

getCocktails();
// getBtn.addEventListener('click', getCocktail);

async function getCocktails() {
  try {
    for (let i = 0; i < 9; i++) {
      const result = await fetchRandomCocktail();
      //   console.log(result);
      //   console.log(result.drinks);
      cocktailList.insertAdjacentHTML(
        'beforeend',
        result.drinks.map(updateMarkup).join('')
      );

      const learnMoreBtn = document.querySelector('.learn-more-btn');
      learnMoreBtn.addEventListener('click', (event, item) => {
        console.log(event.target);
        console.log(event.currentTarget);
        console.log(item);

        localStorage.setItem('favoriteCocktails', item);
      });
    }
  } catch {
    throw new Error();
  }
}

async function fetchRandomCocktail() {
  const randomCocktail = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  return randomCocktail.json();
}

const updateMarkup = ({ strDrink, idDrink, strDrinkThumb }) => `
<li class='random-item'>
<img src='${strDrinkThumb}' alt='name: ${strDrink}' width='100px'>
<h2>${strDrink}</h2>
<!-- <p>id: ${idDrink}</p> -->
<a href='../local-storage.html' class='learn-more-btn'>Learn more</a>
<button class='save-to-strg-btn'>Add to ❤</button>
</li>
`;

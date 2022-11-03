import { modalInteraction } from "./modal-interaction";
import { checkLocalStorage } from "./check-local-storage";

export function showModalInfo() {
    const btnReadMore = document.querySelectorAll('.btn__read-more');
    btnReadMore.forEach(el => el.addEventListener('click', userOpenMOdal));
  }
 
  export async function userOpenMOdal(event) {
    if (event.target.id.length === 0) {
      console.log('event.target', event.target);
  
      return;
    } else {
       let id = event.target.id;
        
      const json = await srchById(id);
      // console.log('json', json);
      // console.log('json------------',json)
      let myIngidient = json.drinks[0];
      // console.log('myIngidient [0] --------------', myIngidient);
      
      let myIngidientsList = [];
      let myIngidientsRecipe = [];

        let localStorageBtn = checkLocalStorage(id)
      

      for (let ingr in myIngidient) {
        if (ingr.includes('strIngredient') && myIngidient[ingr] !== null) {
          myIngidientsList.push(myIngidient[ingr]);
        }
      }
      for (let ingr in myIngidient) {
        if (ingr.includes('strMeasur') && myIngidient[ingr] !== null) {
          myIngidientsRecipe.push(myIngidient[ingr]);
        }
      }

    
   
    // console.log('myIngidientsList', myIngidientsList);
    // console.log('myIngidientsRecipe', myIngidientsRecipe);

    const local = document.querySelector('.local-storage-ingr');
    console.log(local);

    let number = -1;

    const listItems = myIngidientsList
      .map(el => {
        number++;
        return `<li class="modal-item coctal-item">✶ ${
          myIngidientsRecipe[number] || ''
        }
           <a href="#" class="modal-link coctal-link">${el}</a> </li>`;
        })
        .join('');
  
      createCocktailModalMarkup(localStorageBtn, listItems, myIngidient);
  
      modalInteraction();
      // onpenModalIngredient();
 
      function createCocktailModalMarkup(localStorageBtn, listItems, { strDrinkThumb, strDrink, strInstructions, idDrink }) {
        return (local.innerHTML = `<div id="modal-koktel" class="modal-coctal modal">
          <div class="modal-content container">
            <div class="first-part-decor">
              <img src="${strDrinkThumb}" alt="${strDrink}" class="img-coctal-desctop" />
              <h2 class="modal-title hidden-name">${strDrink}</h2>
              <div class="decoration-koktels">
                <h2 class="modal-title coctal-name">${strDrink}</h2>
                <h3 class="koktel-ingr">INGREDIENTS</h3>
                <p class="after-coctal-ingr">Per cocktail</p>
                <ul class="modal-list coctal-list">
                  ${listItems}
                </ul>
              </div>
            </div>
        
            <p class="koktel-instr modal-after-title">Instractions:</p>
            <button type="button" class="isClose">x</button>
            <p class="koktel-instr-text modal-text">${strInstructions}
            </p>
            <img src="${strDrinkThumb}" alt="${strDrink}" class="img-coctal-modile" />
         
            <div class="decoration-coctal">
              <h3 class="coctal-ingr">INGREDIENTS</h3>
              <p class="after-coctal-ingr">Per cocktail</p>
              <ul class="modal-list coctal-list">
                ${listItems}
              </ul>
            </div>
            <div class="decoration-button">
              ${localStorageBtn}
            </div>
          </div>
        </div>`);
    }
  }
}

async function srchById(id) {
  try {
    console.log('перед фетчом');
    return await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then(response => response.json());
  } catch (error) {
    throw new Error('Помилка при ФЕТЧІ ===> ' + error.message);
  }
}

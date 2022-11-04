// import { values } from "lodash"

import { checkLocalStorage } from './check-local-storage';
import { checkLocalStorageIngr } from './check-local-storageIngr';

export const storageIngr = [];

export const markupModalIng = document.querySelector(
  '.local-storage-ingredient'
);
export function onpenModalIngredient() {
  const ingredientLink = document.querySelectorAll('.modal-link');

  ingredientLink.forEach(el => el.addEventListener('click', openIngrModal));
  let resultIngr;
  async function openIngrModal(event) {
    event.preventDefault();
    // console.log(event.target.textContent)
    let ingr = event.target.textContent;
    const json = await srchByIngr(ingr);
    resultIngr = json.ingredients[0];

    // console.log(resultIngr);

    // console.log(storageIngr);
    let a = resultIngr.idIngredient;
    // console.log(a);
    let res = checkLocalStorageIngr(a);

    markupModalIngr(resultIngr, res);

    modalIngrInteraction();
  }
}

export function markupModalIngr(resultIngr, res) {
  return (markupModalIng.innerHTML = `<div id="modal" class="modall">
    <div class="modal-contentt container">
      <h2 class="modal-title">${resultIngr.strIngredient}</h2>
      <h3 class="modal-after-title">${resultIngr.strType}</h3>
      <p class="modal-text">
        <span class="modal-name-title">${resultIngr.strIngredient}</span>${resultIngr.strDescription}
      </p>
      <ul class="modal-list">
        <li class="modal-item">
          <a href="#" class="modal-link">✶ Type: Bitters</a>
        </li>
        <li class="modal-item">
          <a href="#" class="modal-link"> ✶ Country of origin: Italy</a>
        </li> 
        <li class="modal-item">
          <a href="#" class="modal-link">✶ Alcohol by volume: 20.5–28.5%</a>
        </li> 
        <li class="modal-item">
          <a href="#" class="modal-link">✶ Flavour: Bitter, spicy and sweet</a>
        </li>  
      </ul>
      <div class="decoration-button">
      ${res}
      
      </div>
      <button id='${resultIngr.idIngredient}' type="button" class="isClosee">x</button>
    </div>
  </div>`);
}

export async function srchByIngr(ingr) {
  try {
    // console.log('перед фетчом');
    return await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingr}`
    ).then(response => response.json());
  } catch (error) {
    throw new Error('Помилка при ФЕТЧІ ===> ' + error.message);
  }
}
reload();
export function modalIngrInteraction() {
  const btnAdd = document.querySelector('.button-testt');

  const btnClosee = document.querySelector('.isClosee');
  const modal = document.querySelector('.modall');

  btnClosee.addEventListener('click', modalClose);

  function modalClose(event) {
    // console.log(event.target);
    modal.classList.add('hidden-modal');
  }

  btnAdd.addEventListener('click', use);
  function use(event) {
    // console.log('event.target >>>', event.target);
    // console.log('event.target.id >>>', event.target.id);

    const btnLike = document.querySelectorAll('.btn__like');
    // console.log(btnLike);

    if (event.target.id.length === 0) {
      return;
    }
    if (event.target.id.length === undefined) {
      return;
    }
    if (!storageIngr.includes(event.target.id)) {
      storageIngr.push(event.target.id);
      // event.path[0].lastElementChild.classList.add('active-like-btn');
      event.path[0].firstChild.textContent = 'Remove from favorite';
      btnLike.forEach(el => {
        if (event.target.id === el.id) {
          el.lastElementChild.classList.add('active-like-btn');
          el.firstChild.textContent = 'Remove';
        }
      });
    } else {
      storageIngr.splice(storageIngr.indexOf(event.target.id), 1);
      // event.path[0].lastElementChild.classList.remove('active-like-btn');
      event.path[0].firstChild.textContent = 'Add to favorite';
      btnLike.forEach(el => {
        if (el.id === event.target.id) {
          el.lastElementChild.classList.remove('active-like-btn');
          el.firstChild.textContent = 'Add to';
        }
      });
    }
    localStorage.setItem('drinksIngrId', storageIngr);
  }
}

function reload() {
  let user = localStorage.getItem('drinksIngrId');
  if (user) {
    let ara = user.split(',');
    ara.forEach(el => storageIngr.push(el));
  }
}

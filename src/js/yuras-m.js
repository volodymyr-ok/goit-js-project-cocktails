// import { values } from "lodash"

// setTimeout(() => {
//   const footer = document.querySelector('.footer');
//   console.log(footer);

//   const btnReadMore = document.querySelectorAll('.btn__read-more');
//   btnReadMore.forEach(el => el.addEventListener('click', userOpenMOdal));

//   async function userOpenMOdal(event) {
//     if (event.target.id.length === 0) {
//       return;
//     } else {
//       // const modal = document.querySelector('.modal')
//       // modal.classList.remove('hidden-modal')

//       id = event.target.id;

//       const json = await srchById(id);

//       let myIngidient = json[0];

//       let myIngidientsList = [];
//       let myIngidientsRecipe = [];

//       for (ingr in myIngidient) {
//         if (ingr.includes('strIngredient') && myIngidient[ingr] !== null) {
//           myIngidientsList.push(myIngidient[ingr]);
//         }
//       }
//       for (ingr in myIngidient) {
//         if (ingr.includes('strMeasur') && myIngidient[ingr] !== null) {
//           myIngidientsRecipe.push(myIngidient[ingr]);
//         }
//       }

//       const local = document.querySelector('.local-storage-ingr');

//       let number = -1;
//       const listItems = myIngidientsList
//         .map(el => {
//           number++;
//           return `<li class="modal-item coctal-item">${
//             myIngidientsRecipe[number] || ''
//           }
//          <a href="#" class="modal-link coctal-link">${el}</a> </li>`;
//         })
//         .join('');

//       VovaSaid(listItems, myIngidient);

//       function VovaSaid(
//         listItems,
//         { strDrinkThumb, strDrink, strInstructions, idDrink }
//       ) {
//         return (local.innerHTML = `<div id="modal-koktel" class="modal-coctal modal">
//         <div class="modal-content container">
//           <div class="first-part-decor">
//             <img src="${strDrinkThumb}" alt="${strDrink}" class="img-coctal-desctop" />
//             <h2 class="modal-title hidden-name">${strDrink}</h2>
//             <div class="decoration-koktels">
//               <h2 class="modal-title coctal-name">${strDrink}</h2>
//               <h3 class="koktel-ingr">INGREDIENTS</h3>
//               <p class="after-coctal-ingr">Per cocktail</p>
//               <ul class="modal-list coctal-list">
//                 ${listItems}
//               </ul>
//             </div>
//           </div>

//           <p class="koktel-instr modal-after-title">Instractions:</p>
//           <button type="button" class="isClose">x</button>
//           <p class="koktel-instr-text modal-text">${strInstructions}
//           </p>
//           <img src="${strDrinkThumb}" alt="${strDrink}" class="img-coctal-modile" />

//           <div class="decoration-coctal">
//             <h3 class="coctal-ingr">INGREDIENTS</h3>
//             <p class="after-coctal-ingr">Per cocktail</p>
//             <ul class="modal-list coctal-list">
//               ${listItems}
//             </ul>
//           </div>
//           <div class="decoration-button">
//             <button id="${idDrink}" class="button-test">Add to favorite</button>
//           </div>
//         </div>
//       </div>`);
//       }
//     }
//   }
// }, 5000);

// async function srchById(id) {
//   try {
//     console.log('перед фетчом');
//     return await fetch(
//       `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
//     )
//       .then(response => response.json())
//       .then(data => data.drinks);
//   } catch (error) {
//     throw new Error('Помилка при ФЕТЧІ ===> ' + error.message);
//   }
// }

// setTimeout(() => {
//   const btnAdd = document.querySelector('.button-test');
//   console.log(btnAdd);
//   const btnClose = document.querySelector('.isClose');
//   const modal = document.querySelector('.modal');
//   console.log(btnClose);
//   btnClose.addEventListener('click', modalClose);

//   function modalClose(event) {
//     console.log(event.target);
//     modal.classList.add('hidden-modal');
//   }

//   btnAdd.addEventListener('click', use);
//   function use(event) {
//     if (event.target.id.length === 0) {
//       return;
//     }
//     if (!storage.includes(event.target.id)) {
//       storage.push(event.target.id);
//       event.path[0].lastElementChild.classList.add('active-like-btn');
//       event.path[0].firstChild.textContent = 'Remove';
//     } else {
//       storage.splice(storage.indexOf(event.target.id), 1);
//       event.path[0].lastElementChild.classList.remove('active-like-btn');
//       event.path[0].firstChild.textContent = 'Add to';
//     }
//     localStorage.setItem('drinksId', storage);
//     // console.log(storage)
//   }
// }, 10000);
// setTimeout(()=>{

//     // addEventListener
// },5000)
// import { modalInteraction } from "./pagination"

const storageIngr = [];

const markupModalIng = document.querySelector('.local-storage-ingredient');
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
    console.log(resultIngr);
    markupModalIngr(resultIngr);
    modalIngrInteraction();
  }
}

function markupModalIngr(resultIngr) {
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
        <button  id='${resultIngr.idIngredient}' class="button-testt">Add to favorite</button>
      </div>
      <button id='${resultIngr.idIngredient}' type="button" class="isClosee">x</button>
    </div>
  </div>`);
}

async function srchByIngr(ingr) {
  try {
    console.log('перед фетчом');
    return await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingr}`
    ).then(response => response.json());
  } catch (error) {
    throw new Error('Помилка при ФЕТЧІ ===> ' + error.message);
  }
}
reload();
function modalIngrInteraction() {
  const btnAdd = document.querySelector('.button-testt');

  const btnClosee = document.querySelector('.isClosee');
  const modal = document.querySelector('.modall');

  btnClosee.addEventListener('click', modalClose);

  function modalClose(event) {
    console.log(event.target);
    modal.classList.add('hidden-modal');
  }

  btnAdd.addEventListener('click', use);
  function use(event) {
    console.log('event.target >>>', event.target);
    console.log('event.target.id >>>', event.target.id);
    if (event.target.id.length === 0) {
      return;
    }
    if (!storageIngr.includes(event.target.id)) {
      storageIngr.push(event.target.id);
      // event.path[0].lastElementChild.classList.add('active-like-btn');
      event.path[0].firstChild.textContent = 'Remove from favorite';
    } else {
      storageIngr.splice(storageIngr.indexOf(event.target.id), 1);
      // event.path[0].lastElementChild.classList.remove('active-like-btn');
      event.path[0].firstChild.textContent = 'Add to favorite';
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

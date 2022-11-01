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

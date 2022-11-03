import { onpenModalIngredient } from './yuras-m';
import { storage } from './yuras';

export function modalInteraction() {
  onpenModalIngredient();
  // window.addEventListener('scroll', (e) => {
  //   window.scrollTo(0,0);
  // });
  const btnAdd = document.querySelector('.button-test');
  const body = document.querySelector('body');
  body.classList.add('no-scroll');

  const btnClose = document.querySelector('.isClose');
  const modal = document.querySelector('.modal');
  console.log(btnClose);
  btnClose.addEventListener('click', modalClose);

  function modalClose(event) {
    console.log(event.target);
    modal.classList.add('hidden-modal');
    body.classList.remove('no-scroll');
  }


    
    const btnLike = document.querySelectorAll('.btn__like');

    

    btnAdd.addEventListener('click', use);
    function use(event) {

      if (event.target.id.length === 0) {
        return;
      }
      if (!storage.includes(event.target.id)) {
        storage.push(event.target.id);
      
        event.path[0].firstChild.textContent = 'Remove from favorite';
        btnLike.forEach(el=>{
          if(el.id===event.target.id){
            el.lastElementChild.classList.add('active-like-btn');
            el.firstChild.textContent = 'Remove';
          }
        })
      } else {
        storage.splice(storage.indexOf(event.target.id), 1);
      
        event.path[0].firstChild.textContent = 'Add to favorite';
        btnLike.forEach(el=>{
          if(el.id===event.target.id){
            el.lastElementChild.classList.remove('active-like-btn');
            el.firstChild.textContent = 'Add to';
          }
        })
       

      }
      // localStorage.setItem('drinksId', storage);
    }
    // localStorage.setItem('drinksId', storage);

}

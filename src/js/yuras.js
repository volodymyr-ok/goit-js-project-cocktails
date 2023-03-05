export const storage = [];
// reload();

export function actionOnLikeBtn() {
  const btnLike = document.querySelectorAll('.btn__like');

  btnLike.forEach(el => el.addEventListener('click', userChoise));

  function userChoise(event) {
    // console.log(event);
    if (event.target.id.length === 0) {
      return;
    }
    if (!storage.includes(event.target.id)) {
      storage.push(event.target.id);
      // console.log( event.target.lastElementChild)
      event.target.lastElementChild.classList.add('active-like-btn');
      event.target.firstChild.textContent = 'Remove';
    } else {
      storage.splice(storage.indexOf(event.target.id), 1);
      event.target.lastElementChild.classList.remove('active-like-btn');
      event.target.firstChild.textContent = 'Add to';
    }
    localStorage.setItem('drinksId', storage);
  }
}

export function reload() {
  let user = localStorage.getItem('drinksId');
  if (user) {
    let ara = user.split(',');
    ara.forEach(el => storage.push(el));
  }
}
// console.log(storage);

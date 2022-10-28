const openBtn = document.querySelector('.menu-open');
const menu = document.querySelector('.menu-burger');
const closeBtn = document.querySelector('.menu-close');
const favoriteMenuOpen = document.querySelector('.favorites');
const favoritePages = document.querySelector('.favorite-pages');
const arrowIcon = document.querySelector('.arrow-icon');

openBtn.addEventListener('click', () => {
  menu.classList.remove('is-hidden');
  console.log('click');
});
closeBtn.addEventListener('click', () => {
  menu.classList.add('is-hidden');
});

favoriteMenuOpen.addEventListener('mouseover', () => {
  favoritePages.classList.remove('is-hidden');
  arrowIcon.style.transform = 'rotate(180deg)';
});
favoriteMenuOpen.addEventListener('mouseout', () => {
  setTimeout(() => {
    favoritePages.classList.add('is-hidden');
    arrowIcon.style.transform = 'rotate(0)';
  }, 2000);
});

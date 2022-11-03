const select = document.querySelector('.select');
const selectArrow = document.querySelector('.select-arrow');
const selectMenu = document.querySelector('.select-menu');
const options = document.querySelectorAll('.option');
const selectInput = document.querySelector('.select-input');

select.addEventListener('click', () => {
  select.classList.toggle('open');
  if (select.classList.contains('open')) {
    selectArrow.style.transform = 'rotate(180deg)';
    selectInput.style.color = '#fd5103';
    select.style.backgroundColor = '#fcfcfc';
    selectArrow.style.fill = '#fd5103';
  } else {
    selectArrow.style.transform = 'rotate(0)';
  }
});

selectMenu.addEventListener('click', e => {
  selectInput.textContent = e.target.textContent;
  selectInput.style.color = '#fcfcfc';
  select.style.backgroundColor = '#fd5103';
  selectArrow.style.fill = '#fcfcfc';
});

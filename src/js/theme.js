const input = document.querySelector('.checkbox-input');

// console.log((input.checked = true));
document.querySelector('.checkbox-input').addEventListener('click', event => {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
    console.log(input.checked);
  } else {
    localStorage.setItem('theme', 'dark');
    console.log(input.checked);
  }
  addDarkClassToHtml();
});

function addDarkClassToHtml() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
      input.checked = true;
    } else {
      document.querySelector('html').classList.remove('dark');
      input.checked = false;
    }
  } catch (error) {}
}
addDarkClassToHtml();

const bar = document.querySelector('.fa-bars');
const menu = document.querySelector('.dropdown-menu');
const mark = document.querySelector('.xmark');
const Items = document.querySelectorAll('.menu .ax');
bar.addEventListener('click', () => {
  menu.classList.toggle('hide');
});
mark.addEventListener('click', () => {
  menu.classList.toggle('hide');
});
Items.forEach((n) => {
  n.addEventListener('click', () => {
    menu.classList.toggle('hide');
  });
});

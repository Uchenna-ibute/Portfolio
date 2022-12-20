const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".dropdown-menu");
const mark = document.querySelector(".xmark");
bar.addEventListener("click", () => {
  menu.classList.toggle("hide");
});
mark.addEventListener("click", () => {
  menu.classList.toggle("hide");
});

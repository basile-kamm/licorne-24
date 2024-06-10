var burger = document.querySelector("[data-burger]");
var burgerIcon = document.querySelector("[data-burgerIcon]");

burgerIcon.addEventListener("click", function () {
  burger.classList.toggle("is-open");
});

document.querySelector("main").addEventListener("click", function () {
  if (burger.classList.contains("is-open")) {
    burger.classList.remove("is-open");
  }
});

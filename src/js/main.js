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

document.addEventListener("DOMContentLoaded", function () {
  const colors = [
    "#749fd5",
    "#65194f",
    "#ea8d13",
    "#673a8f",
    "#edd811",
    "#52b293",
  ];

  function applyRandomColorOnHover(elements, property) {
    elements.forEach((element) => {
      let previousColor = null;

      element.addEventListener("mouseenter", function () {
        let randomColor;

        do {
          randomColor = colors[Math.floor(Math.random() * colors.length)];
        } while (randomColor === previousColor);

        previousColor = randomColor;
        element.style.setProperty(property, randomColor);
      });
    });
  }

  const buttonElements = document.querySelectorAll(".button");
  applyRandomColorOnHover(buttonElements, "--random-color");

  const svgElements = document.querySelectorAll("svg .svg-g");
  applyRandomColorOnHover(svgElements, "--random-color");

  const submitElement = document.querySelector(".news-submit");
  applyRandomColorOnHover([submitElement], "--random-color");
});

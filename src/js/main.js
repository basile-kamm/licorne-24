gsap.registerPlugin(ScrollTrigger);

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

// CURSOR POINTER //
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".cursor-circle");

const cursor = document.querySelector(".cursor-container");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "white";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

document.addEventListener("DOMContentLoaded", function () {
  const rotatingElements = document.querySelectorAll(".deco");

  const speedFactor = 5;

  rotatingElements.forEach((element) => {
    const rotationDirection = element.classList.contains("t-reverse")
      ? -360
      : 360;

    const t = gsap.to(element, {
      rotation: rotationDirection,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    // ScrollTrigger for each element
    ScrollTrigger.create({
      trigger: "html",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap
          .to(t, { timeScale: speedFactor * self.direction, duration: 0.1 })
          .then(() => {
            gsap.to(t, { timeScale: 1, duration: 1 });
          });
      },
    });
  });
});

const navLine = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const body = document.querySelector("body");

navLine.addEventListener("click", function () {
  navLine.classList.toggle("nav-line__active");
  navMenu.classList.toggle("hidden");
  body.classList.toggle("max-md:before:overlay");
});

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("max-md:before:overlay")) {
    navLine.classList.remove("nav-line__active");
    navMenu.classList.add("hidden");
    body.classList.remove("max-md:before:overlay");
  }
});

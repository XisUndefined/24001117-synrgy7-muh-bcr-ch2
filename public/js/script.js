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

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("testimonial-carousel");
  const cards = document.querySelectorAll(".testimonial-card");
  const totalCards = cards.length;

  let currentPosition;
  if (totalCards % 2 === 1) {
    currentPosition =
      window.innerWidth >= 768
        ? -(Math.floor(totalCards / 2) - 1)
        : -Math.floor(totalCards / 2);
  } else if (totalCards % 2 === 0) {
    currentPosition =
      window.innerWidth >= 768
        ? -(totalCards / 2) + 1.5
        : -(totalCards / 2) + 0.5;
  }

  function updateCarousel() {
    const carouselWidth = cards[0].clientWidth + 32;
    const offset = -(currentPosition * carouselWidth);
    carousel.style.transform = `translateX(${offset}px)`;
  }

  document.getElementById("prev-btn").addEventListener("click", () => {
    if (totalCards % 2 === 1) {
      if (currentPosition > -Math.floor(totalCards / 2)) {
        currentPosition--;
        updateCarousel();
      }
    } else if (totalCards % 2 === 0) {
      if (currentPosition > -(totalCards / 2 - 0.5)) {
        currentPosition += -1;
        updateCarousel();
      }
    }
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    if (totalCards % 2 === 1) {
      if (currentPosition < Math.floor(totalCards / 2)) {
        currentPosition++;
        updateCarousel();
      }
    } else if (totalCards % 2 === 0) {
      if (currentPosition < totalCards / 2 - 0.5) {
        currentPosition += 1;
        updateCarousel();
      }
    }
  });

  window.addEventListener("resize", function () {
    updateCarousel();
  });

  document.querySelectorAll(".accordion").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-accordion-target");
      const targetEl = document.querySelector(targetId);
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", !isExpanded);

      if (!isExpanded) {
        const scrollHeight = targetEl.scrollHeight;
        targetEl.style.maxHeight = scrollHeight + "px";
      } else {
        targetEl.style.maxHeight = "0";
      }
    });
  });

  window.addEventListener("scroll", function () {
    navLine.classList.remove("nav-line__active");
    navMenu.classList.add("hidden");
    body.classList.remove("max-md:before:overlay");
  });

  updateCarousel();
});

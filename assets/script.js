const slides = [
  {
    image: "C:/Users/Ken/Downloads/Java-script_open-main/Java-script_open-main/assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "C:/Users/Ken/Downloads/Java-script_open-main/Java-script_open-main/assets/images/slideshow/slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "C:/Users/Ken/Downloads/Java-script_open-main/Java-script_open-main/assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "C:/Users/Ken/Downloads/Java-script_open-main/Java-script_open-main/assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const banner = document.getElementById("banner");
const imageContainer = banner.querySelector(".banner-img");
const tagLineElement = banner.querySelector("#tagline");
const dots = banner.querySelectorAll(".dot");
const nextButton = banner.querySelector(".arrow_right");
const prevButton = banner.querySelector(".arrow_left");

let currentIndex = 0;

// Set the initial image and tagline
updateSlide();

function updateSlide() {
  imageContainer.src = slides[currentIndex].image;
  tagLineElement.innerHTML = slides[currentIndex].tagLine;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
}

// Event listeners for navigation
document.addEventListener("DOMContentLoaded", updateSlide); // Update slide on page load
nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPrevSlide);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    showNextSlide();
  } else if (e.key === "ArrowLeft") {
    showPrevSlide();
  }
});
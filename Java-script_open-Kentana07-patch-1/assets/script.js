const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "assets/images/slideshow/slide4.png",
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

// Event listeners
document.addEventListener("DOMContentLoaded", updateSlide); // Update slide on page load

nextButton.addEventListener("click", function () {
  showNextSlide();
  console.log('Bouton "Next" cliqué. Nouvel index :', currentIndex);
});

prevButton.addEventListener("click", function () {
  showPrevSlide();
  console.log('Bouton "Prev" cliqué. Nouvel index :', currentIndex);
});

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
}
function updateSlide() {
  imageContainer.src = slides[currentIndex].image;
  tagLineElement.innerHTML = slides[currentIndex].tagLine;
  updateDots();
}



function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
}

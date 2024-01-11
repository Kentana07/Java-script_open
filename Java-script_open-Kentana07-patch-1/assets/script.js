const slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
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

// Définir l'image initiale et le tagline
document.addEventListener("DOMContentLoaded", updateSlide);

// Event listeners
nextButton.addEventListener("mousedown", function (event) {
  // Vérifie si le clic a été effectué avec le bouton droit ou gauche (button === 2)
  if (event.button === 0) {
    // Bouton gauche
    showNextSlide();
    console.log('Bouton "Next" cliqué avec le bouton gauche. Nouvel index :', currentIndex);
  } else if (event.button === 2) {
    // Bouton droit
    console.log('Bouton "Next" cliqué avec le bouton droit. Aucune action.');
  }
});
prevButton.addEventListener("mousedown", function (event) {
  // Vérifie si le clic a été effectué avec le bouton droit ou gauche (button === 2)
  if (event.button === 0) {
    // Bouton gauche
    showPrevSlide();
    console.log('Bouton "Prev" cliqué avec le bouton gauche. Nouvel index :', currentIndex);
  } else if (event.button === 2) {
    // Bouton droit
    console.log('Bouton "Prev" cliqué avec le bouton droit. Aucune action.');
  }
});

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}
function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
}
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
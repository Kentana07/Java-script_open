const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Modèle d'objet de document sélections d'éléments
const slideContainers = document.querySelectorAll(".banner-img");
const dots = document.querySelectorAll(".dot");
const nextButton = document.querySelector(".arrow_right");
const prevButton = document.querySelector(".arrow_left");
let currentIndex = 0;
let tagLine = document.querySelector("#tagline");

// Définir la première diapositive comme active
slideContainers[0].classList.add("active");
dots[0].classList.add("dot_selected");

// Mettre à jour les points en fonction de la diapositive actuelle
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
}

// Fonction pour afficher la diapositive suivante
function showNextSlide() {
  slideContainers[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("dot_selected");

  currentIndex = (currentIndex + 1) % slides.length;

  slideContainers[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("dot_selected");

  // Update tagline
  tagLine.innerHTML = slides[currentIndex].tagLine;
}

// Fonction pour afficher la diapositive précédente
function showPrevSlide() {
  slideContainers[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("dot_selected");

  currentIndex = (currentIndex - 1 + slides.length) % slides.length;

  slideContainers[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("dot_selected");

  // Update tagline
  tagLine.innerHTML = slides[currentIndex].tagLine;
}

// Écouteurs d'événements pour les boutons suivant et précédent
nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPrevSlide);

// Affichage initial de la première diapositive
updateDots();
tagLine.innerHTML = slides[currentIndex].tagLine;

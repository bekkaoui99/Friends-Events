const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navBar");
const navlink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

navlink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
  });
});

// slide background images
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Set an interval for the automatic slideshow
setInterval(() => {
  nextSlide();
}, 6000);

// card slide animation

let currentIndex = 0;
let direction = 1; // 1 for forward, -1 for backward

function showSlideImage(index) {
  const carouselInner = document.querySelector(".row-slide-image");
  const slideWidth = document.querySelector(".card").offsetWidth;
  currentIndex = index;

  carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlideImage() {
  if (currentIndex < 15 && direction === 1) {
    currentIndex++;
  } else if (currentIndex > 0 && direction === -1) {
    currentIndex--;
  } else {
    direction *= -1; // Change direction when reaching the end or start
  }
  showSlideImage(currentIndex);
}

function prevSlideImage() {
  if (currentIndex > 0 && direction === -1) {
    currentIndex--;
  } else if (currentIndex < 15 && direction === 1) {
    currentIndex++;
  } else {
    direction *= -1; // Change direction when reaching the end or start
  }
  showSlideImage(currentIndex);
}

// Auto slide every 3 seconds (adjust as needed)
setInterval(nextSlideImage, 5000);

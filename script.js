// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Automatically switch slides every 5 seconds
setInterval(nextSlide, 5000);

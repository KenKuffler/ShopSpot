// Carousel functionality
const carousel = document.querySelector('.carousel-inner');
const items = carousel.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.carousel-control.right').addEventListener('click', showNext);
document.querySelector('.carousel-control.left').addEventListener('click', showPrev);

// Auto-scroll
setInterval(showNext, 5000);
// End of carousel functionality
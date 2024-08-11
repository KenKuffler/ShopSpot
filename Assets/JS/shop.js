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

// Add to cart functionality
const cartButtons = document.querySelectorAll('.cart-btn');
let cartCount = 0;
const cartDisplay = document.querySelector('.navbar-cart');

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartDisplay.textContent = `Cart (${cartCount})`;
        const templateName = button.closest('.template-details').querySelector('.template-name').textContent;
        alert(`${templateName} added to cart!`);
    });
});

// Dark mode toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
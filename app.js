// Get elements
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

// Set initial slide index
let currentSlide = 0;

// Function to show a slide by index
function showSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = images.length - 1;
    } else if (slideIndex >= images.length) {
        currentSlide = 0;
    }

    images.forEach((image, index) => {
        if (index === currentSlide) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Function to show the next slide
function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

// Function to show the previous slide
function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Event listeners for arrow buttons
leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

// Initial display
showSlide(currentSlide);
const slides = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slide = document.querySelector('.carousel-slide');

let currentSlide = 1;
const slideWidth = slides[0].clientWidth;

function nextSlide() {
    if (currentSlide < slides.length) {
        currentSlide++;
    } else {
        currentSlide = 1;
    }
    updateSlidePosition();
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
    } else {
        currentSlide = slides.length;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    const translateXValue = -(currentSlide - 1) * slideWidth;
    slide.style.transform = `translateX(${translateXValue}px)`;
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


setInterval(nextSlide, 3000);

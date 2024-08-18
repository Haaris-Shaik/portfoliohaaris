const slider = document.querySelector('.card-slider');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSliderPosition() {
    const width = slider.clientWidth; // Get the width of the slider (should match the card width)
    slider.style.transform = `translateX(${-currentIndex * width}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

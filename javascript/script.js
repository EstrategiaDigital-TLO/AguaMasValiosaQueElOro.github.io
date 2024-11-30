const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function nextSlide() {
    index++;
    if (index > images.length - 1) {
        index = 0;
    }
    slider.style.marginLeft = -index * 100 + '%';
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    slider.style.marginLeft = -index * 100 + '%';
}
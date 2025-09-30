const cards = document.querySelectorAll('.news__card');
const arrowLeft = document.querySelector('.news__arrow_left');
const arrowRight = document.querySelector('.news__arrow_right');


let activeimage = 0;

const sliderPlace = document.querySelector('.news__slider_line');
const widthOffset = document.querySelector('.news__slider').clientWidth;
sliderPlace.style.width = 3 * widthOffset + 'px';
sliderPlace.style.heigth = widthOffset + 'px';

console.log(widthOffset);
console.log(sliderPlace);
// sliderPlace.style.left = '-' +widthOffset + 'px';
let flag = true;


const initSlider = () => {
    const img = document.createElement('img');
    img.src= "img/" + images[activeimage];
    sliderPlace.append(img);
    nextImageGenerate();
    prevImageGenerate();
}

const nextImageGenerate = () => {
    let nextImage = activeimage + 1;
    if (nextImage >= images.length) {
        nextImage = 0;
    }
    const img = document.createElement('img');
    img.src = "img/" + images[nextImage];
    sliderPlace.append(img);
}

const prevImageGenerate = () => {
    let prevImage = activeimage - 1;
    if (prevImage < 0) {
        prevImage = images.length - 1;
    }
    const img = document.createElement('img');
    img.src = "img/" + images[prevImage];
    sliderPlace.prepend(img);
}


const nextSlider = () => {
    activeimage ++;
    if (activeimage >= images.length) {
        activeimage = 0;
    }
    document.querySelector('.slider-line img').remove();
    nextImageGenerate();
}

const prevSlider = () => {
    activeimage --;
    if (activeimage < 0) {
        activeimage = images.length - 1;
    }
    document.querySelector('.slider-line img:last-child').remove();
    prevImageGenerate();
}


initSlider();

document.querySelector('.arrow-right').addEventListener('click', nextSlider);
document.querySelector('.arrow-left').addEventListener('click', prevSlider);

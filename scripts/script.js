'use script';

const arrImgs = ['assets/img/images_1.jpeg', 'assets/img/images_2.jpeg', 'assets/img/images_3.jpeg', 'assets/img/images_4.jpeg', 'assets/img/images_5.jpeg'];

const wrapperDots = Array.from(document.querySelectorAll('.wrapper__dot'));
const headerDots = Array.from(document.querySelectorAll('.header__dot'));
const title = document.querySelector('.header__title');
const subtitle = document.querySelector('.header__subtitle');
const headerContent = document.querySelector('.header__content');


// СЛАЙДЕР (1-Й ЭКРАН) /////////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < wrapperDots.length; i++) {

    wrapperDots[i].addEventListener('click', () => {
        console.log(wrapperDots[i]);

        headerDots.forEach((dot) => {
            dot.classList.remove('active');
            headerDots[i].classList.add('active');

            title.classList.add('fadeout');
            subtitle.classList.add('fadeout');
            setTimeout(() => {
                headerContent.innerHTML = '';

                const img = document.createElement('img');
            img.src = arrImgs[i];
            img.classList.add('img');

            headerContent.appendChild(img);

            requestAnimationFrame(() => {
                img.classList.add('fadein');
                });
            } , 1000);
        });
    });
};

// МЕДЛЕННЫЙ СКРОЛЛ //////////////////////////////////////////////////////////////////////////////
const arrow = document.querySelector('.arrow');
const header = document.querySelector('.header');
let scrollTimer = null;

arrow.addEventListener('click', (e) => {
    e.stopPropagation();

        startScroll();
});

function startScroll() {
  scrollTimer = setInterval(() => {
    window.scrollBy(0, 10);
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      clearInterval(scrollTimer);
      scrollTimer = null;
    }
  }, 16);
}

document.addEventListener('click', () => {
    clearInterval(scrollTimer);
});

document.addEventListener('click', () => {
    if (scrollTimer) {
      clearInterval(scrollTimer);
      scrollTimer = null;
    } else {
        // startScroll();
        scrollHandler();
    }
  });


window.addEventListener('scroll', () => {
  const headerBottom = header.getBoundingClientRect().bottom;

  if (headerBottom <= 735) {
    arrow.classList.add('arrow--outside');
  } else {
    arrow.classList.remove('arrow--outside');
  }
});


//  СМЕНА ПОЗИЦИИ ИЗОБРАЖЕНИЙ ///////////////////////////////////////////////////////////////////////////

function scrollHandler() {
    const cardImg = document.querySelector('.what-we-do__card-img');
    if (window.scrollY > 900) {
        cardImg.classList.add('scroll');
    } else {
        cardImg.classList.remove('scroll');
    }

    const cardImg_1 = document.querySelector('.what-we-do__card-img_1');
    if (window.scrollY > 1500) {
        cardImg_1.classList.add('scroll');
    } else {
        cardImg_1.classList.remove('scroll');
    }
}
window.addEventListener('scroll', scrollHandler);

// КАРТА ////////////////////////////
const map = L.map('map').setView([50.4501, 30.5234], 13); // координаты Киева

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const marker = L.marker([50.4501, 30.5234]).addTo(map);

marker.bindPopup('Киев').openPopup();

const customIcon = L.icon({
  iconUrl: 'assets/icons/custom-marker.svg', // путь к твоему SVG или PNG
  iconSize: [40, 40], // размер маркера
  iconAnchor: [20, 40], // точка "указания" на карте
  popupAnchor: [0, -40] // где появляется всплывающее окно
});

L.marker([50.4501, 30.5234], { icon: customIcon })
  .addTo(map)
  .bindPopup('<b>Привет, Виктория!</b><br>Это кастомный маркер.');


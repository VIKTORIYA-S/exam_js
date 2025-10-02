'use script';
document.addEventListener('DOMContentLoaded', () => {


const headerContent = document.querySelector('.header__content');
const whatWeDo = document.querySelector('.what-we-do');
const arrow = document.querySelector('.arrow');
const header = document.querySelector('.header');
const headerBg = document.querySelector('.header__background');



// СЛАЙДЕР (1-Й ЭКРАН) /////////////////////////////////////////////////////////////////////////////////
const headerTitles = ['SIMPLE & MODERN', 'ELEGANT & TIMELESS', 'SHAPE & FUNCTION', 'PURE & MINIMAL', 'SPACE & LIGHT', 'ART & STRUCTURE'];

const headerTitle = document.querySelector('.header__title');
 const wrapperDots = document.querySelectorAll('.wrapper__dot');
  const headerDots = document.querySelectorAll('.header__dot');
  const headerImagesContainer = document.querySelector('.header__images');
  const arrImgs = [
    'assets/img/images_1.jpeg',
    'assets/img/images_2.jpeg',
    'assets/img/images_3.jpeg',
    'assets/img/images_4.jpeg',
    'assets/img/images_5.jpeg'
  ];

  let currentImg = headerImagesContainer.querySelector('.header__img');

  wrapperDots.forEach((dotWrapper, i) => {
    dotWrapper.addEventListener('click', () => {
      chengeTitle();

      // Обновляем активную точку
      headerDots.forEach(dot => dot.classList.remove('active'));
      headerDots[i].classList.add('active');

      // Создаём новое изображение

      const newImg = document.createElement('img');
      newImg.src = arrImgs[i];
      newImg.classList.add('header__img');
      headerImagesContainer.style.opacity = 0.2;
      headerImagesContainer.appendChild(newImg);
      headerTitle.classList.add('typing');


      requestAnimationFrame(() => {
        currentImg.classList.add('fadeout');
        newImg.classList.add('fadein');
      });

      setTimeout(() => {
        headerImagesContainer.removeChild(currentImg);
        currentImg = newImg;
      }, 1000);
    });
  });

function chengeTitle() {
  headerTitles.forEach((title, i) => {
    title++;
    headerTitle.classList.remove('typing');
    headerTitle.textContent = headerTitles[Math.floor(Math.random() * headerTitles.length)];
    console.log(headerTitle);
  })
}





// МЕДЛЕННЫЙ СКРОЛЛ //////////////////////////////////////////////////////////////////////////////
// const nextSection = header.nextElementSibling;
// console.log(nextSection);


let scrollTimer = null;

arrow.addEventListener('click', (e) => {
    e.stopPropagation();
const targetY = window.scrollY + window.innerHeight;
  window.scrollTo({ top: targetY});
        startScroll();
});

function startScroll(nextTop) {
  scrollTimer = setInterval(() => {
    window.scrollBy(0, 10);

    //  const nextTop = nextSection.getBoundingClientRect().top;

    //   if (nextTop <= 0) {
    //     clearInterval(scrollTimer);
    //     scrollTimer = null;
    //   }


  }, 16);
}

document.addEventListener('click', () => {
    clearInterval(scrollTimer);
});


// window.addEventListener('scroll', () => {
//   const headerBottom = header.getBoundingClientRect().bottom;

//   // if (headerBottom <= 735) {
//   //   arrow.classList.add('arrow--outside');
//   // } else {
//   //   arrow.classList.remove('arrow--outside');
//   // }
// });


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

  const map = L.map('map', {
      center: [50.45, 30.52],
      zoom: 13,
      scrollWheelZoom: false
    });

    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: 'assets/icons/png-marker.jpg',
      iconSize: [60, 60],
      iconAnchor: [10, 60],
      className: 'custom-icon'
    });

    L.marker([50.45, 30.52], { icon: customIcon })
      .addTo(map)
      .bindPopup("<b>Hi! I'm here! 💜")

    function setMood(mode) {
      const mapEl = document.getElementById('map');
      switch (mode) {
        case 'default':
          mapEl.style.filter = 'none';
          break;
        case 'violet':
          mapEl.style.filter = 'hue-rotate(270deg) brightness(1.2) saturate(1.3)';
          break;
        case 'night':
          mapEl.style.filter = 'brightness(0.6) contrast(1.2)';
          break;
      }
    }






  });












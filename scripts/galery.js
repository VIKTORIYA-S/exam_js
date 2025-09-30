'use strict';


const KEY = 'zmoPmFDtLB1yq2aTz_WzCj7oQ-pcoTVf7tRDMIUBg2k';
let page = 1; // номер текущей страницы
const btn = document.querySelector('.gallery__button');
const img = document.querySelectorAll('.gallery__card_img');

// функция загрузки данных
async function fetchHandler() {
  try {
    const url = `https://api.unsplash.com/search/photos/?query=architecture-of-buildings&per_page=5&page=${page}&client_id=${KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// функция рендера нового блока
function render(data) {
  const newBlock = document.createElement('div');
  newBlock.className = 'gallery__content';

  // левая колонка
  const left = document.createElement('div');
  left.className = 'gallery__card_left';

  const imgLeft = document.createElement('img');
  imgLeft.className = 'gallery__card_img gallery__card_img--large';
  imgLeft.src = data.results[0].urls.small;
  left.appendChild(imgLeft);

 imgLeft.addEventListener('click', () => {
  window.open(data.results[0].urls.full, '_blank'); // открываем большое изображение
});




  // правая колонка
  const right = document.createElement('div');
  right.className = 'gallery__card_right';

  for (let i = 1; i < data.results.length; i++) {
    const img = document.createElement('img');
    img.className = 'gallery__card_img gallery__card_img--small';
    img.src = data.results[i].urls.small;
    right.appendChild(img);

    img.addEventListener('click', function() {
      img.style.cursor = 'pointer';
                window.open(data.results[i].links.download, '_blank');
            })
  }

  newBlock.appendChild(left);
  newBlock.appendChild(right);

  // вставляем новый блок ПЕРЕД кнопкой
  btn.insertAdjacentElement('beforebegin', newBlock);
}

// обработчик кнопки
btn.addEventListener('click', async () => {
  page++; // увеличиваем номер страницы
  const data = await fetchHandler();
  if (data && data.results.length > 0) {
    render(data);
  } else {
    btn.textContent = 'NO MORE IMAGES';
    btn.disabled = true;
  }
});

fetchHandler();


const localLeft = document.querySelector('.gallery__card_left img');
localLeft.addEventListener('click', () => {
    window.open(localLeft.src, '_blank');
});

// все правые картинки
const localRightImgs = document.querySelectorAll('.gallery__card_right img');
localRightImgs.forEach(img => {
    img.addEventListener('click', () => {
        window.open(img.src, '_blank');
    });
});
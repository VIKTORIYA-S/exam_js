const moreDetailsBtn_1 = document.querySelector('.btn_1');
const moreDetailsBtn_2 = document.querySelector('.btn_2');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalContent = document.querySelector('.modal__content');
const modalImg = document.querySelector('.modal__img');
const modalSubtitle = document.querySelector('.modal__subtitle');
const modalText = document.querySelector('.modal__text');


function openModal(srcImg, subtitle, text) {
    modal.classList.add('open_modal');
    modalImg.src = srcImg;
    modalSubtitle.textContent = subtitle;
    modalText.textContent = text;
}

function openModal_1() {
    moreDetailsBtn_1.addEventListener('click', () => {
        openModal(
            "./assets/img/mask_group_2.png",
            'MODERN ARCHITECTURE STYLE',
            'Our design embraces clean lines, open spaces, and the harmony of natural light — creating buildings that inspire comfort and creativity.');
            modalClose.style.color = '#2ca5fbff';
    });
}
openModal_1();

function openModal_2() {
    moreDetailsBtn_2.addEventListener('click', () => {
        openModal(
            "./assets/img/mask_group_1.png",
            'SUSTAINABLE DESIGN CONCEPT',
            'We create eco-friendly structures that combine innovation with respect for nature, using modern technologies and natural materials.');
            modalClose.style.color = 'white';
    });
}
openModal_2();

modalClose.addEventListener('click', () => {
    modal.classList.remove('open_modal');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('open_modal');
    }
})


// //////////////////////////////////////////////////////////////////////////////

// moreDetailsBtn.forEach(btn => {
//   btn.addEventListener('click', (e) => {
//     const parent = e.target.closest('.what-we-do__card'); // ищем родителя карточки
//     console.log(parent);
//     const modal = parent.querySelector('.modal'); // находим модалку внутри этой карточки
//     console.log(modal);
//     modal.classList.add('open');
//   });
// });

// document.addEventListener('click', (e) => {
//   if (e.target.classList.contains('modal__close') || e.target.classList.contains('modal')) {
//     e.target.closest('.modal').classList.remove('open');
//   }
// });
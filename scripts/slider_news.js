document.addEventListener('DOMContentLoaded', () => {

const cards = document.querySelectorAll('.news__card');


cards.forEach(card => {
  const textEl = card.querySelector('.news__card_text');
  const fullText = textEl.dataset.full;
  const shortText = textEl.textContent;


  const shortHeight = textEl.scrollHeight;

  textEl.textContent = fullText;
  const fullHeight = textEl.scrollHeight;

  textEl.textContent = shortText;

  textEl.style.height = shortHeight + 'px';

  card.addEventListener('click', () => {
    const isOpen = card.classList.toggle('open');

    if (isOpen) {
      textEl.textContent = fullText;
      textEl.style.height = fullHeight + 'px';
    } else {
      textEl.textContent = shortText;
      textEl.style.height = shortHeight + 'px';
    }
  });
});

});

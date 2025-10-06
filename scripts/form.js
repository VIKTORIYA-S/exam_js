'use strict';

const form = document.querySelector('.form__content_right');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // предотвращает отправку, пока не проверим поля

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  // проверка имени
  if (nameValue.length < 2) {
    showError('Name must be at least 2 characters long.');
    return;
  }

  // проверка email с помощью регулярного выражения
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    showError('Please enter a valid email address.');
    return;
  }

  // если всё ок — очищаем сообщение об ошибке
  errorMessage.style.display = 'none';

  // имитация успешной отправки
  alert('Form submitted successfully!');
  form.reset();
});

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}
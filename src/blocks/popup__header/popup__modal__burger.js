/* eslint-env es6 */
/* eslint-disable no-console */

const headeBurger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const popup = document.querySelector('.popup__modal__burger');
const clouse = document.querySelector('.nav__clouse');

headeBurger.addEventListener('click', () => {
  header.classList.add('popup__show');
  main.classList.add('popup__show');
  footer.classList.add('popup__show');
  popup.classList.add('position__popup__burger');
  if (popup.classList.contains('popup__modal__burger--hidden')) {
    popup.classList.remove('popup__modal__burger--hidden');
  }
});

clouse.addEventListener('click', () => {
  header.classList.remove('popup__show');
  main.classList.remove('popup__show');
  footer.classList.remove('popup__show');
  popup.classList.remove('position__popup__burger');
  popup.classList.add('popup__modal__burger--hidden');
});

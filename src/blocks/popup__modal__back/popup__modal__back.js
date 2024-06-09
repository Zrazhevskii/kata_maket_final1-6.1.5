/* eslint-env es6 */
/* eslint-disable no-console */

const backBtnClouse = document.querySelector(
  '.popup__modal__back__clouse__btn'
);
const popupHeader = document.querySelector('.popup__burger');
const popupModalCall = document.querySelector('.popup__modal__back');
const btnCall = document.querySelector('.header__call');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const popupModalBtn = document.querySelector('.popup__footer__item .call');

let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
});

btnCall.addEventListener('click', () => {
  header.classList.add('popup__show__call__feedback');
  main.classList.add('popup__show__call__feedback');
  footer.classList.add('popup__hidden');
  popupModalCall.classList.add('position__popup__servises');
  if (popupModalCall.classList.contains('popup__modal__back--hidden')) {
    popupModalCall.classList.remove('popup__modal__back--hidden');
  }
});

backBtnClouse.addEventListener('click', clousePopup);

popupModalBtn.addEventListener('click', openPopup);

popupModalCall.addEventListener('click', (evt) => {
  if (evt.target === popupModalCall) {
    clousePopup();
  }
});

function openPopup() {
  if (width >= 1120) {
    header.classList.add('popup__show__call__feedback');
    main.classList.add('popup__show__call__feedback');
  }

  if (width >= 768 && width < 1120) {
    header.classList.remove('popup__show_middle');
    main.classList.remove('popup__show_middle');
    header.classList.add('popup__show__call__feedback');
    main.classList.add('popup__show__call__feedback');
  }

  footer.classList.add('popup__hidden');
  popupHeader.classList.remove('position__popup__burger');
  popupModalCall.classList.remove('popup__modal__back--hidden');
  popupHeader.classList.add('popup__burger_hidden');
  popupModalCall.classList.add('position__popup__servises');
}

function clousePopup() {
  if (width >= 1120) {
    header.classList.remove('popup__show');
    main.classList.remove('popup__show');
    popupHeader.classList.remove('popup__burger_hidden');
  }

  popupModalCall.classList.add('popup__modal__back--hidden');
  popupModalCall.classList.remove('position__popup__servises');

  if (width < 768) {
    header.classList.remove('popup__show');
    main.classList.remove('popup__show');
  }

  header.classList.remove('popup__show__call__feedback');
  main.classList.remove('popup__show__call__feedback');
  footer.classList.remove('popup__hidden');
}

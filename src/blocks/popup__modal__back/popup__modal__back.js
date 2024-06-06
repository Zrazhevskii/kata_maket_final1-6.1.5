/* eslint-env es6 */
/* eslint-disable no-console */

const backBtnClouse = document.querySelector(
  '.popup__modal__back__clouse__btn'
);
const popupHeader = document.querySelector('.popup__modal__burger');
const popupModalCall = document.querySelector('.popup__modal__back');
const btnCall = document.querySelector('.header__call');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const popupModalBtn = document.querySelector('.footer__list__item .call');
// const bodyContent = document.querySelector('.body__content');

let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
});

btnCall.addEventListener('click', () => {
  header.classList.add('popup__show');
  main.classList.add('popup__show');
  footer.classList.add('popup__show');
  popupModalCall.classList.add('position__popup__servises');
  if (popupModalCall.classList.contains('popup__modal__back--hidden')) {
    popupModalCall.classList.remove('popup__modal__back--hidden');
  }
});

backBtnClouse.addEventListener('click', clousePopup);

popupModalBtn.addEventListener('click', openPopup);

function openPopup() {
  if (width >= 1440) {
    header.classList.add('popup__show');
    main.classList.add('popup__show');
    footer.classList.add('popup__show');
    popupHeader.classList.add('popup__modal__burger--hidden');
    popupModalCall.classList.remove('popup__modal__back--hidden');
    popupModalCall.classList.add('position__popup__servises');
  } else {
    popupHeader.classList.add('popup__modal__burger--hidden');
    popupHeader.classList.remove('position__popup__burger');
    popupModalCall.classList.add('position__popup__servises');
    popupModalCall.classList.remove('popup__modal__back--hidden');
  }
}

function clousePopup() {
  if (width >= 1440) {
    header.classList.remove('popup__show');
    main.classList.remove('popup__show');
    footer.classList.remove('popup__show');
    popupHeader.classList.remove('popup__modal__burger--hidden');
    popupModalCall.classList.add('popup__modal__back--hidden');
    popupModalCall.classList.remove('position__popup__servises');
  } else {
    header.classList.remove('popup__show');
    main.classList.remove('popup__show');
    footer.classList.remove('popup__show');
    popupModalCall.classList.add('popup__modal__back--hidden');
    popupModalCall.classList.remove('position__popup__servises');
  }
}

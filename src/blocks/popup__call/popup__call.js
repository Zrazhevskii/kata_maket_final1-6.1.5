/* eslint-env es6 */
/* eslint-disable no-console */

const backBtnClouse = document.querySelector('.popup__call__btn__clouse');
const popupHeader = document.querySelector('.popup__burger');
const popupModalCall = document.querySelector('.popup__call');
const btnCall = document.querySelector('.call__btn');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const popupModalBtn = document.querySelector('.popup__footer__item .call');

let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  clousePopup();
});

btnCall.addEventListener('click', () => {
  header.classList.add('popup__show_middle');
  main.classList.add('popup__show_middle');
  footer.classList.add('popup_hidden');
  popupModalCall.classList.add('popup__servises_position');
  if (popupModalCall.classList.contains('popup__call_hidden')) {
    popupModalCall.classList.remove('popup__call_hidden');
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
  if (width >= 1440) {
    header.classList.add('popup__show_middle');
    main.classList.add('popup__show_middle');
  }

  if (width >= 768 && width < 1440) {
    header.classList.remove('popup__show_middle');
    main.classList.remove('popup__show_middle');
    header.classList.add('popup__show_middle');
    main.classList.add('popup__show_middle');
  }

  footer.classList.add('popup_hidden');
  popupHeader.classList.remove('popup__burger_position');
  popupModalCall.classList.remove('popup__call_hidden');
  popupHeader.classList.add('popup__burger_hidden');
  popupModalCall.classList.add('popup__servises_position');
}

function clousePopup() {
  if (width >= 1440) {
    header.classList.remove('popup__show_little');
    main.classList.remove('popup__show_little');
    popupHeader.classList.remove('popup__burger_hidden');
  }

  popupModalCall.classList.add('popup__call_hidden');
  popupModalCall.classList.remove('popup__servises_position');

  if (width < 768) {
    header.classList.remove('popup__show_little');
    main.classList.remove('popup__show_little');
  }

  header.classList.remove('popup__show_middle');
  main.classList.remove('popup__show_middle');
  footer.classList.remove('popup_hidden');
}

/* eslint-env es6 */
/* eslint-disable no-console */

const backBtnClouse = document.querySelector('.popup-call__btn-clouse');
const popupHeader = document.querySelector('.popup-burger');
const popupModalCall = document.querySelector('.popup-call');
const btnCall = document.querySelector('.navigation__btn_call');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const popupModalBtn = document.querySelector('.popup-footer__item .popup-footer__btn_call');

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
  if (popupModalCall.classList.contains('popup-call_hidden')) {
    popupModalCall.classList.remove('popup-call_hidden');
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
  // if (width >= 1440) {
  //   header.classList.add('popup__show_middle');
  //   main.classList.add('popup__show_middle');
  // }

  if (width >= 768) {
    // header.classList.remove('popup__show_middle');
    // main.classList.remove('popup__show_middle');
    header.classList.add('popup__show_middle');
    main.classList.add('popup__show_middle');
  }

  footer.classList.add('popup_hidden');
  popupHeader.classList.remove('popup__burger_position');
  popupModalCall.classList.remove('popup-call_hidden');
  popupHeader.classList.add('popup-burger_hidden');
  popupModalCall.classList.add('popup__servises_position');
}

function clousePopup() {
  if (width >= 1440) {
    header.classList.remove('popup__show_little');
    main.classList.remove('popup__show_little');
    popupHeader.classList.remove('popup-burger_hidden');
  }

  popupModalCall.classList.add('popup-call_hidden');
  popupModalCall.classList.remove('popup__servises_position');

  if (width < 768) {
    header.classList.remove('popup__show_little');
    main.classList.remove('popup__show_little');
  }

  header.classList.remove('popup__show_middle');
  main.classList.remove('popup__show_middle');
  footer.classList.remove('popup_hidden');
}

/* eslint-env es6 */
/* eslint-disable no-console */

const headeBurger = document.querySelector('.burger__btn');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const popup = document.querySelector('.popup-burger');
const clouse = document.querySelector('.clouse');

let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  clousePopup();
});

headeBurger.addEventListener('click', () => {
  popup.classList.add('popup__burger_position');
  if (width >= 768) {
    header.classList.add('popup__show_middle');
    main.classList.add('popup__show_middle');
  } else {
    header.classList.add('popup__show_little');
    main.classList.add('popup__show_little');
  }

  footer.classList.add('popup_hidden');

  if (popup.classList.contains('popup__burger_hidden')) {
    popup.classList.remove('popup__burger_hidden');
  }
});

clouse.addEventListener('click', clousePopup);

popup.addEventListener('click', (evt) => {
  if (evt.target === popup) {
    clousePopup();
  }
});

function clousePopup() {
  popup.classList.remove('popup__burger_position');
  if (width >= 768) {
    header.classList.remove('popup__show_middle');
    main.classList.remove('popup__show_middle');
  } else {
    header.classList.remove('popup__show_little');
    main.classList.remove('popup__show_little');
  }

  footer.classList.remove('popup_hidden');
  popup.classList.add('popup__burger_hidden');
}

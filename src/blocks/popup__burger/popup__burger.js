/* eslint-env es6 */
/* eslint-disable no-console */

const headeBurger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const popup = document.querySelector('.popup__burger');
const clouse = document.querySelector('.clouse');

let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  clousePopup()
});

headeBurger.addEventListener('click', () => {
  popup.classList.add('position__popup__burger')
  // console.log(width);
  if (width >= 768) {
    header.classList.add('popup__show_middle');
    main.classList.add('popup__show_middle');
  } else {
    header.classList.add('popup__show');
    main.classList.add('popup__show');
  }

  footer.classList.add('popup__hidden');

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
  popup.classList.remove('position__popup__burger')
  if (width >= 768) {
    header.classList.remove('popup__show_middle');
    main.classList.remove('popup__show_middle');
  } else {
    header.classList.remove('popup__show');
    main.classList.remove('popup__show');
  }

  footer.classList.remove('popup__hidden');
  popup.classList.add('popup__burger_hidden');
}

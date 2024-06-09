/* eslint-env es6 */
/* eslint-disable no-console */

const feedbackBtn = document.querySelector('.header__chat');
const feedbackPopup = document.querySelector('.popup__modal__feedback');
const feedbackBtnClouse = document.querySelector(
  '.popup__modal__feedback__clouse__btn'
);
const popupHeader = document.querySelector('.popup__burger');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const popupFeedbackBtn = document.querySelector('.popup__footer__item .chat');

let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  clousePopup()
});

feedbackBtn.addEventListener('click', () => {
  header.classList.add('popup__show__call__feedback');
  main.classList.add('popup__show__call__feedback');
  footer.classList.add('popup__hidden');
  feedbackPopup.classList.add('position__popup__servises');
  if (feedbackPopup.classList.contains('popup__modal__feedback--hidden')) {
    feedbackPopup.classList.remove('popup__modal__feedback--hidden');
  }
});

feedbackPopup.addEventListener('click', (evt) => {
  if (evt.target === feedbackPopup) {
    clousePopup();
  }
});

feedbackBtnClouse.addEventListener('click', clousePopup);

popupFeedbackBtn.addEventListener('click', openPopup);

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
  feedbackPopup.classList.remove('popup__modal__feedback--hidden');
  popupHeader.classList.add('popup__burger_hidden');
  feedbackPopup.classList.add('position__popup__servises');
}

function clousePopup() {
  if (width >= 1120) {
    header.classList.remove('popup__show');
    main.classList.remove('popup__show');
    popupHeader.classList.remove('popup__burger_hidden');
  }

  feedbackPopup.classList.add('popup__modal__feedback--hidden');
  feedbackPopup.classList.remove('position__popup__servises');

  if (width < 768) {
    header.classList.remove('popup__show');
    main.classList.remove('popup__show');
  }

  header.classList.remove('popup__show__call__feedback');
  main.classList.remove('popup__show__call__feedback');
  footer.classList.remove('popup__hidden');
}

/* eslint-env es6 */
/* eslint-disable no-console */

const feedbackBtn = document.querySelector('.chat__btn');
const feedbackPopup = document.querySelector('.popup__feedback');
const feedbackBtnClouse = document.querySelector(
  '.popup__feedback__btn__clouse'
);
const popupHeader = document.querySelector('.popup-burger');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const popupFeedbackBtn = document.querySelector('.popup__footer__item .chat');

let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  clousePopup();
});

feedbackBtn.addEventListener('click', () => {
  header.classList.add('popup__show_middle');
  main.classList.add('popup__show_middle');
  footer.classList.add('popup_hidden');
  feedbackPopup.classList.add('popup__servises_position');
  if (feedbackPopup.classList.contains('popup__feedback_hidden')) {
    feedbackPopup.classList.remove('popup__feedback_hidden');
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
  feedbackPopup.classList.remove('popup__feedback_hidden');
  popupHeader.classList.add('popup__burger_hidden');
  feedbackPopup.classList.add('popup__servises_position');
}

function clousePopup() {
  if (width >= 1440) {
    header.classList.remove('popup__show_little');
    main.classList.remove('popup__show_little');
    popupHeader.classList.remove('popup__burger_hidden');
  }

  feedbackPopup.classList.add('popup__feedback_hidden');
  feedbackPopup.classList.remove('popup__servises_position');

  if (width < 768) {
    header.classList.remove('popup__show_little');
    main.classList.remove('popup__show_little');
  }

  header.classList.remove('popup__show_middle');
  main.classList.remove('popup__show_middle');
  footer.classList.remove('popup_hidden');
}

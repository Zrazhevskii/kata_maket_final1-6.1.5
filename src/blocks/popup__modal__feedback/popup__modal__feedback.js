const feedbackBtn = document.querySelector('.header__chat');
const feedbackPopup = document.querySelector('.popup__modal__feedback');
const feedbackBtnClouse = document.querySelector(
    '.popup__modal__feedback__clouse__btn'
);
const popupHeader = document.querySelector('.popup__modal__burger');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const popupFeedbackBtn = document.querySelector('.footer__list__item .chat');

let width = window.innerWidth;

window.addEventListener('resize', () => {
    width = window.innerWidth;
});

feedbackBtn.addEventListener('click', () => {
    header.classList.add('popup__show');
    main.classList.add('popup__show');
    footer.classList.add('popup__show');
    if (feedbackPopup.classList.contains('popup__modal__feedback--hidden')) {
        feedbackPopup.classList.remove('popup__modal__feedback--hidden');
    }
});

feedbackBtnClouse.addEventListener('click', clousePopup);

popupFeedbackBtn.addEventListener('click', openPopup);

function openPopup() {

  if (width >= 1200) {
      header.classList.add('popup__show');
      main.classList.add('popup__show');
      footer.classList.add('popup__show');
      popupHeader.classList.add('popup__modal__burger--hidden');
      feedbackPopup.classList.remove('popup__modal__feedback--hidden');
  } else {
      popupHeader.classList.add('popup__modal__burger--hidden');
      feedbackPopup.classList.remove('popup__modal__feedback--hidden');
  }
}

function clousePopup() {
  if (width >= 1200) {
      header.classList.remove('popup__show');
      main.classList.remove('popup__show');
      footer.classList.remove('popup__show');
      popupHeader.classList.remove('popup__modal__burger--hidden');
      feedbackPopup.classList.add('popup__modal__feedback--hidden');
  } else {
      header.classList.remove('popup__show');
      main.classList.remove('popup__show');
      footer.classList.remove('popup__show');
      feedbackPopup.classList.add('popup__modal__feedback--hidden');
  }
}

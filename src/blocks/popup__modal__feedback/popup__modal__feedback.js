const feedbackBtn = document.querySelector('.header__chat');
// console.log(feedbackBtn);
const feedbackPopup = document.querySelector('.popup__modal__feedback')
const feedbackBtnClouse = document.querySelector(
    '.popup__modal__feedback__clouse__btn'
);

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

feedbackBtn.addEventListener('click', () => {
    header.classList.add('popup__show');
    main.classList.add('popup__show');
    footer.classList.add('popup__show');
    if (feedbackPopup.classList.contains('popup__modal__feedback--hidden')) {
        feedbackPopup.classList.remove('popup__modal__feedback--hidden');
    }
});

feedbackBtnClouse.addEventListener('click', () => {
    header.classList.remove('popup__show');
    main.classList.remove('popup__show');
    footer.classList.remove('popup__show');
    feedbackPopup.classList.add('popup__modal__feedback--hidden');
})

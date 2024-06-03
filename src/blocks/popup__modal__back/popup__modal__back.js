const popupBtnClouse = document.querySelector(
    '.popup__modal__back__clouse__btn'
);
const popupHeader = document.querySelector('.pop__up__menu');
const popupModalCall = document.querySelector('.popup__modal__back');
const btnCall = document.querySelector('.header__call');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const popupModalBtn = document.querySelector('.footer__list_item .call');

btnCall.addEventListener('click', () => {
    header.classList.add('popup__show');
    main.classList.add('popup__show');
    footer.classList.add('popup__show');
    if (popupModalCall.classList.contains('popup__modal__back--hidden')) {
        popupModalCall.classList.remove('popup__modal__back--hidden');
    }
});

popupBtnClouse.addEventListener('click', () => {
    header.classList.remove('popup__show');
    main.classList.remove('popup__show');
    footer.classList.remove('popup__show');
    popupModalCall.classList.add('popup__modal__back--hidden');
});

popupModalBtn.addEventListener('click', () => {
    popupHeader.classList.add('pop__up__menu--hidden');
    popupModalCall.classList.remove('popup__modal__back--hidden');
});

const headeBurger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const popup = document.querySelector('.pop-up');
const clouse = document.querySelector('.nav__clouse');

console.log(clouse);

headeBurger.addEventListener('click', () => {
    // console.log('Привет');
    header.classList.add('popup__show');
    main.classList.add('popup__show');
    footer.classList.add('popup__show');
    if (popup.classList.contains('pop-up--hidden')) {
        popup.classList.remove('pop-up--hidden')
    }

});

clouse.addEventListener('click', () => {
    // console.log('я тут');
    header.classList.remove('popup__show');
    main.classList.remove('popup__show');
    footer.classList.remove('popup__show');
    popup.classList.add('pop-up--hidden')
})
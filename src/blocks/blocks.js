import './main/main_content/main_content';
import './main/sliders__brend/sliders__brend';
import './main/appliances__items/appliances__items';
import './main/price__items/price__items';
import './popup__header/popup__modal__burger';
import './popup__modal__back/popup__modal__back';
import './popup__modal__feedback/popup__modal__feedback';
import './main/main__description/main__description';

const popupBurger = document.querySelector('.popup__modal__burger');
const desctop = document.querySelector('.desctop');
let width = window.innerWidth;

window.addEventListener('resize', () => {
    width = window.innerWidth;
    checkChildren();
});

function checkChildren() {
    if (width >= 1200) {
        desctop.classList.add('body__all__content');
        popupBurger.classList.remove('popup__modal__burger--hidden');
    }

    if (width < 1200) {
        popupBurger.classList.add('popup__modal__burger--hidden');
        desctop.classList.remove('body__all__content');
    }
}

checkChildren();

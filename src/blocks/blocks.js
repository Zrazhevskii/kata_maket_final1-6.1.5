import './main/main_content/main_content.js';
import './main/sliders__brend/sliders__brend.js';
import './main/appliances__items/appliances__items.js';
import './main/price__items/price__items.js';
import './popup__header/popup__modal__burger.js';
import './popup__modal__back/popup__modal__back.js';
import './popup__modal__feedback/popup__modal__feedback.js';
import './main/main__description/main__description.js';

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

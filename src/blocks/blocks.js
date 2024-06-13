import './main/sliders__brend/sliders__brend.js';
import './main/sliders__appliances/sliders__appliances.js';
import './main/sliders__price/sliders__price.js';
import './popup__burger/popup__burger.js';
import './popup__call/popup__call.js';
import './popup__feedback/popup__feedback.js';
import './main/main__description/servises/servises.js';
import './main/main__description/content/content.js';

const popupBurger = document.querySelector('.popup__burger');
const desctop = document.querySelector('.desctop');
let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  checkChildren();
});

function checkChildren() {
  if (width >= 1120) {
    desctop.classList.add('body__all__content');
    popupBurger.classList.remove('popup__burger_hidden');
  }

  if (width < 1120) {
    popupBurger.classList.add('popup__burger_hidden');
    desctop.classList.remove('body__all__content');
  }
}

checkChildren();

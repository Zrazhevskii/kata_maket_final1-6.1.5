/* eslint-env es6 */
/* eslint-disable no-console */

const slidersBrend = document.querySelector('.sliders__brend');
const slidersBtn = document.querySelector('.sliders__brend__btn');
const slider = document.querySelector('.box__brend__container');

const containerSlider = Array.from(
  document.querySelectorAll('.box__brend__item')
);
let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  // if (width >= 768) {
  checkChildren();
  // }
});

slidersBtn.addEventListener('click', function () {
  if (slidersBtn.classList.contains('sliders__brend__btn_show')) {
    changeHeightOpen();
  } else {
    changeHeightClose();
  }
});

function checkChildren() {
  if (width < 768) {
    for (let i = 0; i < containerSlider.length; i++) {
      containerSlider[i].classList.remove('box__brend__item_hidden');
    }
  }

  if (width >= 768 && width < 1440) {
    for (let i = 0; i < containerSlider.length; i++) {
      if (i >= 6) {
        containerSlider[i].classList.add('box__brend__item_hidden');
      }
    }
  }

  if (width >= 1440) {
    for (let i = 0; i < containerSlider.length; i++) {
      if (i <= 7) {
        containerSlider[i].classList.remove('box__brend__item_hidden');
      } else if (i > 7) {
        containerSlider[i].classList.add('box__brend__item_hidden');
      }
    }
  }
}

const changeHeightOpen = () => {
  if (width >= 768 && width < 1440) {
    slidersBrend.classList.add('sliders__brends__screen_middle');

    for (let i = 0; i < containerSlider.length; i++) {
      if (containerSlider[i].className.includes('box__brend__item_hidden')) {
        containerSlider[i].classList.remove('box__brend__item_hidden');
      }
    }
  } else {
    slidersBrend.classList.add('sliders__brend_little');
    for (let i = 0; i < containerSlider.length; i++) {
      if (containerSlider[i].className.includes('box__brend__item_hidden')) {
        containerSlider[i].classList.remove('box__brend__item_hidden');
      }
    }
  }

  slidersBtn.classList.remove('sliders__brend__btn_show');
  slidersBtn.classList.add('sliders__brend__btn_hide');
};

const changeHeightClose = () => {
  if (width >= 768 && width < 1440) {
    slidersBrend.classList.remove('sliders__brends__screen_middle');
    for (let i = 0; i < containerSlider.length; i++) {
      if (i >= 6) {
        containerSlider[i].classList.add('box__brend__item_hidden');
      }
    }
  } else if (width >= 1440) {
    slidersBrend.classList.remove('sliders__brend_little');
    for (let i = 0; i < containerSlider.length; i++) {
      if (i >= 8) {
        containerSlider[i].classList.add('box__brend__item_hidden');
      }
    }
  }

  slidersBtn.classList.add('sliders__brend__btn_show');
  slidersBtn.classList.remove('sliders__brend__btn_hide');
};

checkChildren();

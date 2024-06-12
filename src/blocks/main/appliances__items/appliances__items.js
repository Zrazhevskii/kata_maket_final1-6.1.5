/* eslint-env es6 */
/* eslint-disable no-console */

const appliancesItems = document.querySelector('.sliders__appliances');
const appliancesBtn = document.querySelector('.sliders__appliances__btn');
const appliancesContainer = document.querySelector(
  '.box__appliances__container'
);
const appliancesBox = document.querySelector('.box__appliances');

const appliancesArray = Array.from(
  document.querySelectorAll('.box__appliances__item')
);
let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  if (width >= 768) {
    checkChildren();
  }
});

appliancesBtn.addEventListener('click', function () {
  if (appliancesBtn.classList.contains('sliders__appliances__btn_show')) {
    changeHeightOpen();
  } else {
    changeHeightClose();
  }
});

function checkChildren() {

  if (width >= 768 && width < 1120) {
    appliancesArray[4].classList.add('hidden');
  }

  if (width >= 1120) {
    appliancesArray[4].classList.remove('hidden');
  }
}

const changeHeightOpen = () => {
  for (let i = 0; i < appliancesArray.length; i++) {
    appliancesArray[i].classList.remove('hidden');
  }

  if (width >= 768 && width < 1120) {
    appliancesItems.classList.add('sliders__appliances_big');
    appliancesContainer.classList.add('sliders__appliances_middle');
  } else {
    appliancesItems.classList.add('sliders__appliances_little');
  }

  appliancesBtn.classList.remove('sliders__appliances__btn_show');
  appliancesBtn.classList.add('sliders__appliances__btn_hide');
};

const changeHeightClose = () => {
  if (width >= 768 && width < 1120) {
    for (let i = 0; i < appliancesArray.length; i++) {
      if (i >= 3) {
        appliancesArray[i].classList.add('hidden');
      }
    }
    appliancesItems.classList.remove('sliders__appliances_big');
    appliancesContainer.classList.remove('sliders__appliances_middle');
  } else if (width >= 1120) {
    for (let i = 0; i < appliancesArray.length; i++) {
      if (i >= 4) {
        appliancesArray[i].classList.add('hidden');
      }
    }

    appliancesItems.classList.remove('sliders__appliances_little');
  }
  appliancesBtn.classList.add('sliders__appliances__btn_show');
  appliancesBtn.classList.remove('sliders__appliances__btn_hide');
};

checkChildren();

/* eslint-env es6 */
/* eslint-disable no-console */

const appliancesItems = document.querySelector('.appliances__items');
const appliancesBtn = document.querySelector('.appliances__items__btn');
const appliancesBoxContainer = document.querySelector(
  '.appliances__box__container'
);
const appliancesBox = document.querySelector('.appliances__box');

const appliancesArray = Array.from(
  document.querySelectorAll('.container__slide__appliances')
);
let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  if (width >= 768) {
    checkChildren();
  }
});

appliancesBtn.addEventListener('click', function () {
  if (appliancesBtn.classList.contains('btn-show')) {
    changeHeightOpen();
  } else {
    changeHeightClose();
  }
});

function checkChildren() {
  if (width >= 768 && width < 1200) {
    appliancesArray[4].classList.add('hidden');
  }

  if (width >= 1200) {
    appliancesArray[4].classList.remove('hidden');
  }
}

const changeHeightOpen = () => {
  for (let i = 0; i < appliancesArray.length; i++) {
    appliancesArray[i].classList.remove('hidden');
  }

  if (width >= 768 && width < 1200) {
    appliancesItems.classList.add('popup__open__appliances--big');
    appliancesBoxContainer.classList.add('popup__open__appliances--middle');
  } else {
    appliancesItems.classList.add('popup__open__appliances--little');
  }

  appliancesBtn.classList.remove('btn-show');
  appliancesBtn.classList.add('btn-hide');
};

const changeHeightClose = () => {
  if (width >= 768 && width < 1200) {
    for (let i = 0; i < appliancesArray.length; i++) {
      if (i >= 3) {
        appliancesArray[i].classList.add('hidden');
      }
    }
    appliancesItems.classList.remove('popup__open__appliances--big');
    appliancesBoxContainer.classList.remove('popup__open__appliances--middle');
  } else if (width >= 1200) {
    for (let i = 0; i < appliancesArray.length; i++) {
      if (i >= 4) {
        appliancesArray[i].classList.add('hidden');
      }
    }

    appliancesItems.classList.remove('popup__open__appliances--little');
  }
  appliancesBtn.classList.add('btn-show');
  appliancesBtn.classList.remove('btn-hide');
};

checkChildren();

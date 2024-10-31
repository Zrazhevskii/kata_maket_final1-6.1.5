/* eslint-env es6 */
/* eslint-disable no-console */

const appliancesItems = document.querySelector('.sliders-appliances');
const appliancesBtn = document.querySelector('.sliders-appliances__btn');
const appliancesContainer = document.querySelector(
  '.box-appliances__container'
);
const appliancesBox = document.querySelector('.box-appliances');

const appliancesArray = Array.from(
  document.querySelectorAll('.box-appliances__item')
);
let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  checkChildren();
});

appliancesBtn.addEventListener('click', function () {
  if (appliancesBtn.classList.contains('sliders-appliances__btn_show')) {
    changeHeightOpen();
  } else {
    changeHeightClose();
  }
});

function checkChildren() {
  if (width < 768) {
    for (let i = 0; i < appliancesArray.length; i++) {
      appliancesArray[i].classList.remove('box-appliances__item_hidden');
    }
  }

  if (width >= 768 && width < 1440) {
    for (let i = 0; i < appliancesArray.length; i++) {
      if (i >= 3) {
        appliancesArray[i].classList.add('box-appliances__item_hidden');
      }
    }
  }

  if (width >= 1440) {
    for (let i = 0; i < appliancesArray.length; i++) {
      appliancesArray[3].classList.remove('box-appliances__item_hidden');
      if (i >= 4) {
        appliancesArray[i].classList.add('box-appliances__item_hidden');
      }
    }
  }
}

const changeHeightOpen = () => {
  for (let i = 0; i < appliancesArray.length; i++) {
    appliancesArray[i].classList.remove('box-appliances__item_hidden');
  }

  if (width >= 768 && width < 1440) {
    appliancesItems.classList.add('sliders-appliances_big');
    appliancesContainer.classList.add('sliders-appliances_middle');
  } else {
    appliancesItems.classList.add('sliders-appliances_little');
  }

  appliancesBtn.classList.remove('sliders-appliances__btn_show');
  appliancesBtn.classList.add('sliders-appliances__btn_hide');
};

const changeHeightClose = () => {
  if (width >= 768 && width < 1440) {
    for (let i = 0; i < appliancesArray.length; i++) {
      if (i >= 3) {
        appliancesArray[i].classList.add('box-appliances__item_hidden');
      }
    }
    appliancesItems.classList.remove('sliders-appliances_big');
    appliancesContainer.classList.remove('sliders-appliances_middle');
  } else if (width >= 1440) {
    for (let i = 0; i < appliancesArray.length; i++) {
      if (i >= 4) {
        appliancesArray[i].classList.add('box-appliances__item_hidden');
      }
    }

    appliancesItems.classList.remove('sliders-appliances_little');
  }
  appliancesBtn.classList.add('sliders-appliances__btn_show');
  appliancesBtn.classList.remove('sliders-appliances__btn_hide');
};

checkChildren();

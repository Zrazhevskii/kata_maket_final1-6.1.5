/* eslint-env es6 */
/* eslint-disable no-console */

const mainItem = document.querySelector('.servises__box-item');
const mainItemLink = document.querySelectorAll('.servises__link');

let width = window.innerWidth;

window.addEventListener('resize', () => {
  width = window.innerWidth;
  checkChildren();
});

mainItem.addEventListener('click', (evt) => {
  evt.preventDefault();

  mainItemLink.forEach((item) => {
    if (item.classList.contains('servises__link_active')) {
      item.classList.remove('servises__link_active');

      if (width >= 768 && width < 1440) {
        if (evt.target === mainItemLink[0]) {
          mainItemLink[0].classList.add('servises__link_background');
          mainItemLink[0].classList.remove('servises__link_gradient');
        } else {
          mainItemLink[0].classList.remove('servises__link_background');
          mainItemLink[0].classList.add('servises__link_gradient');
        }
      } else {
        if (evt.target !== mainItemLink[0]) {
          mainItemLink[0].classList.remove('servises__link_background');
        }
      }
    }
  });

  evt.target.classList.add('servises__link_active');
});

function checkChildren() {
  if (width < 768 || width > 1440) {
    if (!mainItemLink[0].classList.contains('servises__link_active')) {
      mainItemLink[0].classList.remove('servises__link_background');
      mainItemLink[0].classList.remove('servises__link_gradient');
    }
  } else {
    if (!mainItemLink[0].classList.contains('servises__link_active')) {
      mainItemLink[0].classList.add('servises__link_gradient');
    }
  }
}

checkChildren();

/* eslint-env es6 */
/* eslint-disable no-console */

const mainItem = document.querySelector('.servises__box__item');
const mainItemLink = document.querySelectorAll('.servises__link');

mainItem.addEventListener('click', (evt) => {
  evt.preventDefault();

  mainItemLink.forEach((item) => {
    if (item.classList.contains('servises__link_active')) {
      item.classList.remove('servises__link_active');
      if (item === mainItemLink[0]) {
        mainItemLink[0].classList.remove('servises__link_background');
        mainItemLink[0].classList.add('servises__link_gradient');
      } else if (
        mainItemLink[0].classList.contains('servises__link_gradient')
      ) {
        return;
      }
    }
  });

  if (evt.target === mainItemLink[0]) {
    mainItemLink[0].classList.add('servises__link_background');
    mainItemLink[0].classList.remove('servises__link_gradient');
  }

  evt.target.classList.add('servises__link_active');
});

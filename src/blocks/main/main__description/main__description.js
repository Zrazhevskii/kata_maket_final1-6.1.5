/* eslint-env es6 */
/* eslint-disable no-console */

const mainItem = document.querySelector('.servises__box__item');
const mainItemLink = document.querySelectorAll('.servises__link');

mainItem.addEventListener('click', (evt) => {
  evt.preventDefault();

  mainItemLink.forEach((item) => {
    if (item.classList.contains('servises__link_active')) {
      item.classList.remove('servises__link_active');
    }
  });

  evt.target.classList.add('servises__link_active');
});

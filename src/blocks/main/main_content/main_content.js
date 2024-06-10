/* eslint-env es6 */
/* eslint-disable no-console */

const contentBtn = document.querySelector('.content__btn');
const moreText = document.querySelector('.content__more__text');
const contentTextHidden = document.querySelector('.content__text_hidden');
const moreHidden = document.querySelector('.content__more__hidden');
const mainContentTextBox = document.querySelector('.content__text__box');

contentBtn.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (contentBtn.classList.contains('content__btn_control')) {
    contentBtn.classList.remove('content__btn_control');

    contentTextHidden.classList.remove('content__text_hidden');
    moreText.classList.remove('content__more__text');
    moreHidden.classList.remove('content__more__hidden');

    contentBtn.classList.add('content__btn_hide');
  } else {
    contentBtn.classList.remove('content__btn_hide');

    contentTextHidden.classList.add('content__text_hidden');
    moreText.classList.add('content__more__text');
    moreHidden.classList.add('content__more__hidden');
    contentBtn.classList.add('content__btn_control');
  }
});

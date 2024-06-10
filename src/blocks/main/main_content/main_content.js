/* eslint-env es6 */
/* eslint-disable no-console */

const contentBtn = document.querySelector('.main__content-ownards-btn');
const moreText = document.querySelector('.main__content-more-text');
const contentTextHidden = document.querySelector('.content__text_hidden');
const moreHidden = document.querySelector('.more--hidden');
const mainContentTextBox = document.querySelector('.content__text__box');

contentBtn.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (contentBtn.classList.contains('content-btn')) {
    contentBtn.classList.remove('content-btn');

    contentTextHidden.classList.remove('content__text_hidden');
    moreText.classList.remove('main__content-more-text');
    moreHidden.classList.remove('more--hidden');

    contentBtn.classList.add('content-btn--hide');
  } else {
    contentBtn.classList.remove('content-btn--hide');

    contentTextHidden.classList.add('content__text_hidden');
    moreText.classList.add('main__content-more-text');
    moreHidden.classList.add('more--hidden');
    contentBtn.classList.add('content-btn');
  }
});

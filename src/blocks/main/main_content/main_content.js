/* eslint-env es6 */
/* eslint-disable no-console */

const contentBtn = document.querySelector('.main__content-ownards-btn');
const moreText = document.querySelector('.main__content-more-text');
const contentTextHidden = document.querySelector('.main__content-text--hidden');
const moreHidden = document.querySelector('.more--hidden');
const mainContentTextBox = document.querySelector('.main-content-text-box');

contentBtn.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (contentBtn.classList.contains('content-btn')) {
    contentBtn.classList.remove('content-btn');

    contentTextHidden.classList.remove('main__content-text--hidden');
    moreText.classList.remove('main__content-more-text');
    moreHidden.classList.remove('more--hidden');

    contentBtn.classList.add('content-btn--hide');
  } else {
    contentBtn.classList.remove('content-btn--hide');

    contentTextHidden.classList.add('main__content-text--hidden');
    moreText.classList.add('main__content-more-text');
    moreHidden.classList.add('more--hidden');
    contentBtn.classList.add('content-btn');
  }
});

const mainItem = document.querySelector('.main__servises-items');
const mainItemLink = document.querySelectorAll('.main__item-link');
// console.log(mainItemLink);

mainItem.addEventListener('click', (evt) => {
    evt.preventDefault();

    mainItemLink.forEach((item) => {
        // console.log(item);
        if (item.classList.contains('main__item-link-active')) {
            item.classList.remove('main__item-link-active');
        }
    });

    evt.target.classList.add('main__item-link-active');
});

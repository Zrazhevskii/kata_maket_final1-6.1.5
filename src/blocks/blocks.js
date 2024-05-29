import './main/main_content/main_content';
import './main/sliders__brend/sliders__brend';
import './main/appliances__items/appliances__items';
import './main/price__items/price__items';

const mainItem = document.querySelector('.main__servises-items');
const mainItemLink = document.querySelectorAll('.main__item-link')
// console.log(mainItemLink);

mainItem.addEventListener('click', (evt) => {
    evt.preventDefault();

    mainItemLink.forEach(item => {
        // console.log(item);
        if (item.classList.contains('main__item-link-active')) {
            item.classList.remove('main__item-link-active')
        }
    });

      evt.target.classList.add('main__item-link-active');
})

import './index.html';
import './blocks/blocks';
import './index.scss';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';


// const slider = document.querySelector('.swiper');
// const pagination = document.querySelector('.swiper-pagination');
let { clientWidth } = document.body;

let yourSlider;

const sliderInit = () => {
    yourSlider = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: true,
        loop: true,
    })
}

const resizeHandlerSlider = (number) => {
    if (number >= 768) {
        if (yourSlider) {
            yourSlider.destroy();
            return
        }
    }
    sliderInit();
}

window.addEventListener('resize', () => {

    // width = window.innerWidth;
    resizeHandlerSlider(window.innerWidth);

});

resizeHandlerSlider(clientWidth)

// let { clientWidth } = document.body;
// let mySlider;

// const sliderInit = () => {
//     mySlider = new Swiper('.swiper', {
//         modules: [Navigation, Pagination],
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         slidesPerView: 'auto',
//         spaceBetween: 20,
//         // freeMode: true,
//         loop: true,
//         breakpoints: { 320: { enabled: true }, 768: { enabled: false } },
//     });
// };

// const handlerSlider = (number) => {
//     if (number >= 768) {
//         if (mySlider) {
//             mySlider.destroy();
//             console.log(mySlider);
//             return;
//         } else {
//             mySlider = null;
//         }
//     }
//     sliderInit();
// };

// window.addEventListener('resize', () => {
//     handlerSlider(window.innerWidth);
//     console.log('Это window.innerWidth' + window.innerWidth);
// });

// console.log(clientWidth);

// handlerSlider(window.innerWidth);

// new Swiper('.swiper', {
//     modules: [Navigation, Pagination],
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//     freeMode: true,
//     loop: true,
//     breakpoints: { 320: { enabled: true }, 768: { enabled: false } },
// });

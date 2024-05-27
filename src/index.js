import './index.html';
import './blocks/blocks';
import './index.scss';
// import './index.css';
import './blocks/blocks'

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

window.addEventListener('DOMContentLoaded', () => {
    
    const resizableSwiper = (
        breakpoint,
        swiperClass,
        swiperSettings,
        callback
    ) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        };

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) {
                    console.log('я тут');
                    swiper.destroy(true, true);
                }
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    };

    const someFunc = (instance) => {
        if (instance) {
            instance.on('slideChange', function (e) {
                console.log('*** mySwiper.activeIndex', instance.activeIndex);
            });
        }
    };

    resizableSwiper(
        '(max-width: 767.9px)',
        '.box__brend',
        {
            modules: [Pagination],
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 'auto',
            spaceBetween: 20,
            freeMode: true,
            loop: true,
        },
        someFunc
    );
});
// const slider = document.querySelector('.swiper');
// const pagination = document.querySelector('.swiper-pagination');
// let { clientWidth } = document.body;

// let yourSlider;

// const sliderInit = () => {
//     yourSlider = new Swiper('.swiper', {
//         modules: [Navigation, Pagination],
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         slidesPerView: 'auto',
//         spaceBetween: 20,
//         freeMode: true,
//         loop: true,
//     })
// }

// const resizeHandlerSlider = (number) => {
//     if (number >= 768) {
//         if (yourSlider) {
//             console.log(number);
//             yourSlider.destroy(true, true);
//             // yourSlider = undefined;
//             console.log(yourSlider);
//         }
//     } else {
//         sliderInit();
//     }

// }

// window.addEventListener('resize', () => {

//     // width = window.innerWidth;
//     resizeHandlerSlider(window.innerWidth);
//     // console.log(window.innerWidth);
// });
// // console.log(clientWidth);
// resizeHandlerSlider(clientWidth)

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

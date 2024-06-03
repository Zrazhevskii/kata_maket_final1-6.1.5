import './index.html';
import './blocks/blocks';
import './index.scss';
// import './index.css';

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
                    // console.log('я тут');
                    swiper.destroy(true, true);
                }
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    };

    // const sliderFunc = (instance) => {
    //     if (instance) {
    //         instance.on('slideChange', function (e) {
    //             console.log('*** mySwiper.activeIndex', instance.activeIndex);
    //         });
    //     }
    // };

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
        // sliderFunc
    );

    resizableSwiper(
        '(max-width: 767.9px)',
        '.appliances__box',
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
        // sliderFunc
    );

    resizableSwiper(
        '(max-width: 767.9px)',
        '.price__box',
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
        // sliderFunc
    );

    // resizableSwiper(
    //     '(max-width: 1119.9px)',
    //     '.main__services',
    //     {
    //         modules: [Pagination],
    //         // pagination: {
    //         //     el: '.swiper-pagination',
    //         //     clickable: true,
    //         // },
    //         slidesPerView: 'auto',
    //         spaceBetween: 20,
    //         freeMode: true,
    //         loop: true,
    //     },
    //     // sliderFunc
    // );
});

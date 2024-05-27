import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const swiper = new Swiper('.swiper', {
//     modules: [Navigation, Pagination],
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//     freeMode: true,
//     loop: true,
// });

// const slider = document.querySelector('.swiper-container');
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
//     });
// };
// console.log(yourSlider);

// const handlerSlider = (number) => {
//     if (number >= 768) {
//         if (yourSlider) {
//             yourSlider.destroy();
//             return;
//         }
//     } else {
//         sliderInit();
//     }
// };

window.addEventListener('resize', () => {
    // console.log(clientWidth);
    // width = window.innerWidth;

    handlerSlider(clientWidth);
    console.log(yourSlider);
});

handlerSlider(clientWidth);

// export default swiper;

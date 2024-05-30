const appliancesItems = document.querySelector('.appliances__items');
// console.log(appliancesItems);
const appliancesBtn = document.querySelector('.appliances__items__btn');
// console.log(appliancesBtn);
const appliancesBoxContainer = document.querySelector(
    '.appliances__box__container'
);
const appliancesBox = document.querySelector('.appliances__box');

const appliancesArray = Array.from(
    document.querySelectorAll('.container__slide__appliances')
);
// console.log(containerSlider);
// let width = window.innerWidth;

// window.addEventListener('resize', () => {
//     width = window.innerWidth;
//     // console.log(width);
//     if (width >= 768) {
//         checkChildren();
//     }
// });

appliancesBtn.addEventListener('click', function () {
    if (appliancesBtn.classList.contains('btn-show')) {
        changeHeightOpen();
    } else {
        changeHeightClose();
    }
});

// function checkChildren() {
//     if (width >= 768 && width < 1120) {
//         for (let i = 0; i < containerSlider.length; i++) {
//             if (i >= 6) {
//                 containerSlider[i].classList.add('hidden');
//             }
//         }
//     }

//     if (width >= 1120) {
//         for (let i = 0; i < containerSlider.length; i++) {
//             if (i <= 7) {
//                 containerSlider[i].classList.remove('hidden');
//             } else {
//                 containerSlider[i].classList.add('hidden');
//             }
//         }
//     }
// }

const changeHeightOpen = () => {
    // if (width >= 768 && width < 1120) {
    // console.log(mainSliders);
    // mainSliders.style = '';
    // appliancesBtn.classList.add('show-more');

    for (let i = 0; i < appliancesArray.length; i++) {
        if (appliancesArray[i].className.includes('hidden')) {
        }

        appliancesArray[i].classList.remove('hidden');
        // appliancesBoxContainer.classList.add('show-more');
        // appliancesBox.classList.add('show-more');
        // appliancesItems.classList.add('show-more');
    }

    appliancesItems.style.height = '670px';
    appliancesBoxContainer.style.height = '550px';

    // } else {
    // slidersBrend.classList.add('show-more-small');
    // for (let i = 0; i < containerSlider.length; i++) {
    //     if (containerSlider[i].className.includes('hidden')) {
    //         containerSlider[i].classList.remove('hidden');
    //     }
    // }
    // }

    appliancesBtn.classList.remove('btn-show');
    appliancesBtn.classList.add('btn-hide');
};

const changeHeightClose = () => {
    // if (width >= 768 && width < 1120) {
    //     slidersBrend.classList.remove('show-more');

    for (let i = 0; i < appliancesArray.length; i++) {
        if (i >= 3) {
            appliancesArray[i].classList.add('hidden');
        }
        // appliancesArray[i].classList.remove('hidden');
    }

    // appliancesBoxContainer.classList.remove('show-more');
    // appliancesBox.classList.add('show-more');
    // appliancesItems.classList.remove('show-more');
    appliancesItems.style = '';
    appliancesBoxContainer.style = '';

    // }
    // else if (width >= 1120) {
    //     slidersBrend.classList.remove('show-more-small');
    //     for (let i = 0; i < containerSlider.length; i++) {
    //         if (i >= 8) {
    //             containerSlider[i].classList.add('hidden');
    //         }
    //     }
    // }
    appliancesBtn.classList.add('btn-show');
    appliancesBtn.classList.remove('btn-hide');
};

// checkChildren();

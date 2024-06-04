const appliancesItems = document.querySelector('.appliances__items');
const appliancesBtn = document.querySelector('.appliances__items__btn');
const appliancesBoxContainer = document.querySelector(
    '.appliances__box__container'
);
const appliancesBox = document.querySelector('.appliances__box');

const appliancesArray = Array.from(
    document.querySelectorAll('.container__slide__appliances')
);
// console.log(containerSlider);
let width = window.innerWidth;

window.addEventListener('resize', () => {
    width = window.innerWidth;
    // console.log(width);
    if (width >= 768) {
        checkChildren();
    }
});

appliancesBtn.addEventListener('click', function () {
    if (appliancesBtn.classList.contains('btn-show')) {
        changeHeightOpen();
    } else {
        changeHeightClose();
    }
});

function checkChildren() {
    if (width >= 768 && width < 1200) {
        // console.log('Ширина от 768 до ');
        appliancesArray[4].classList.add('hidden');
    }

    if (width >= 1200) {
        // console.log(appliancesArray[4]);
        appliancesArray[4].classList.remove('hidden');
        // for (let i = 0; i < containerSlider.length; i++) {
        //     if (i <= 7) {
        //         containerSlider[i].classList.remove('hidden');
        //     }
        // else {
        //     containerSlider[i].classList.add('hidden');
        // }
        //     }
    }
}

const changeHeightOpen = () => {
    for (let i = 0; i < appliancesArray.length; i++) {
        appliancesArray[i].classList.remove('hidden');
    }

    if (width >= 768 && width < 1120) {
        appliancesItems.style.height = '680px';
        appliancesBoxContainer.style.height = '550px';
    } else {
        appliancesItems.style.height = '510px';
        // appliancesBoxContainer.style.height = '400px';
    }

    // appliancesItems.style.height = '570px';
    // appliancesBoxContainer.style.height = '450px';

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
    if (width >= 768 && width < 1200) {
        // slidersBrend.classList.remove('show-more');

        for (let i = 0; i < appliancesArray.length; i++) {
            if (i >= 3) {
                appliancesArray[i].classList.add('hidden');
            }
        }
        appliancesItems.style = '';
        appliancesBoxContainer.style = '';
    }
    else if (width >= 1200) {
        // slidersBrend.classList.remove('show-more-small');
        for (let i = 0; i < appliancesArray.length; i++) {
            if (i >= 4) {
                appliancesArray[i].classList.add('hidden');
            }
        }

        appliancesItems.style = '';
        appliancesBoxContainer.style = '';
    }
    appliancesBtn.classList.add('btn-show');
    appliancesBtn.classList.remove('btn-hide');
};

checkChildren();

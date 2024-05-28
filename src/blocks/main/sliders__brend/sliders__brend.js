const mainSliders = document.querySelector('.sliders__brend');
const slidersBtn = document.querySelector('.sliders__brend__btn');

const containerSlider = Array.from(
    document.querySelectorAll('.container__slide__brend')
);
let width = window.innerWidth;

window.addEventListener('resize', () => {
    width = window.innerWidth;
    // console.log(width);
    if (width >= 768) {
        checkChildren();
    }
});

slidersBtn.addEventListener('click', function () {
    if (slidersBtn.classList.contains('btn-show')) {
        changeHeightOpen();
    } else {
        changeHeightClose();
    }
});

function checkChildren() {
    if (width >= 768 && width < 1120) {
        for (let i = 0; i < containerSlider.length; i++) {
            if (i >= 6) {
                containerSlider[i].classList.add('hidden');
            }
        }
    }

    if (width >= 1120) {
        for (let i = 0; i < containerSlider.length; i++) {
            if (i <= 7) {
                containerSlider[i].classList.remove('hidden');
            } else {
                containerSlider[i].classList.add('hidden');
            }
        }
    }
}

const changeHeightOpen = () => {
    
    if (width >= 768 && width < 1120) {
        // console.log(mainSliders);
        mainSliders.classList.remove('show--sliders')
        mainSliders.classList.add('show-more');

        for (let i = 0; i < containerSlider.length; i++) {
            if (containerSlider[i].className.includes('hidden')) {
                containerSlider[i].classList.remove('hidden');
            }
        }
    } else {
        mainSliders.classList.add('show-more-small');
        for (let i = 0; i < containerSlider.length; i++) {
            if (containerSlider[i].className.includes('hidden')) {
                containerSlider[i].classList.remove('hidden');
            }
        }
    }

    slidersBtn.classList.remove('btn-show');
    slidersBtn.classList.add('btn-hide');
};

const changeHeightClose = () => {
    if (width >= 768 && width < 1120) {
        mainSliders.classList.remove('show-more');

        for (let i = 0; i < containerSlider.length; i++) {
            if (i >= 6) {
                containerSlider[i].classList.add('hidden');
            }
        }
    } else if (width >= 1120) {
        mainSliders.classList.remove('show-more-small');
        for (let i = 0; i < containerSlider.length; i++) {
            if (i >= 8) {
                containerSlider[i].classList.add('hidden');
            }
        }
    }
    slidersBtn.classList.add('btn-show');
    slidersBtn.classList.remove('btn-hide');
};

checkChildren();

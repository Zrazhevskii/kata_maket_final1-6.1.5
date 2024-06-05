const slidersBrend = document.querySelector('.sliders__brend');
const slidersBtn = document.querySelector('.sliders__brend__btn');

const containerSlider = Array.from(
    document.querySelectorAll('.container__slide__brend')
);
let width = window.innerWidth;

window.addEventListener('resize', () => {
    width = window.innerWidth;
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
    if (width >= 768 && width < 1200) {
        for (let i = 0; i < containerSlider.length; i++) {
            if (i >= 6) {
                containerSlider[i].classList.add('hidden');
            }
        }
    }

    if (width >= 1200) {
        for (let i = 0; i < containerSlider.length; i++) {
            if (i <= 7) {
                containerSlider[i].classList.remove('hidden');
            } else if (i > 7) {
                containerSlider[i].classList.add('hidden');
            }
        }
    }
}

const changeHeightOpen = () => {
    if (width >= 768 && width < 1200) {
        slidersBrend.classList.add('popup__open__sliders--middle');

        for (let i = 0; i < containerSlider.length; i++) {
            if (containerSlider[i].className.includes('hidden')) {
                containerSlider[i].classList.remove('hidden');
            }
        }
    } else {
        slidersBrend.classList.add('popup__open__sliders--little');
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
    if (width >= 768 && width < 1200) {
        slidersBrend.classList.remove('popup__open__sliders--middle');
        for (let i = 0; i < containerSlider.length; i++) {
            if (i >= 6) {
                containerSlider[i].classList.add('hidden');
            }
        }
    } else if (width >= 1200) {
        slidersBrend.classList.remove('popup__open__sliders--little');
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

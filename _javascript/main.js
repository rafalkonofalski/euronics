function validateForm() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    var isValid = true;

    clearAllErrors();

    if (usernameInput.value === '') {
        showError('error-username', 'Type your name please.');
        isValid = false;
    }

    if (emailInput.value === '' || !validateEmail(emailInput.value)) {
        showError('error-email', 'Type correct e-mail address please.');
        isValid = false;
    }

    if (messageInput.value === '') {
        showError('error-message', 'Type your message please.');
        isValid = false;
    }

    if (isValid) {
        return true;
    }
    return false;
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email, re.test(email));
    return re.test(email);
}

function showError(elemId, msg) {
    document.getElementById(elemId).innerHTML = msg;
}

function clearAllErrors() {
    const errorHints = document.querySelectorAll('.error-hint');
    [...errorHints].forEach((hint) => (hint.innerHTML = ''));
    console.log('cleared');
}

document.addEventListener('DOMContentLoaded', () => {
    const accLabel = document.querySelectorAll('.accordion__label');
    const accContent = document.querySelectorAll('.accordion__content');

    [...accLabel].forEach((element) => {
        element.addEventListener('click', function () {
            [...accLabel].forEach((item) => {
                item.classList.remove('active');
            });

            [...accContent].forEach((item) => {
                item.style.maxHeight = null;
            });

            this.classList.add('active');
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });

    function setSlider() {
        $('.slider').slick({
            infinite: false,
            slide: '.slide',
        });
    }

    if (window.innerWidth <= 768) {
        setSlider();
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth < 768) {
            if (!$('.slider').hasClass('slick-initialized')) {
                setSlider();
            }
        } else {
            if ($('.slider').hasClass('slick-initialized')) {
                $('.slider').slick('unslick');
            }
        }
    });
});

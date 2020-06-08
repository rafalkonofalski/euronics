'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function validateForm() {
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
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
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email, re.test(email));
    return re.test(email);
}

function showError(elemId, msg) {
    document.getElementById(elemId).innerHTML = msg;
}

function clearAllErrors() {
    var errorHints = document.querySelectorAll('.error-hint');
    [].concat(_toConsumableArray(errorHints)).forEach(function (hint) {
        return hint.innerHTML = '';
    });
    console.log('cleared');
}

document.addEventListener('DOMContentLoaded', function () {
    var accLabel = document.querySelectorAll('.accordion__label');
    var accContent = document.querySelectorAll('.accordion__content');

    [].concat(_toConsumableArray(accLabel)).forEach(function (element) {
        element.addEventListener('click', function () {
            [].concat(_toConsumableArray(accLabel)).forEach(function (item) {
                item.classList.remove('active');
            });

            [].concat(_toConsumableArray(accContent)).forEach(function (item) {
                item.style.maxHeight = null;
            });

            this.classList.add('active');
            var panel = this.nextElementSibling;
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
            slide: '.slide'
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
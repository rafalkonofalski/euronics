'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
});
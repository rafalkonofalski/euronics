document.addEventListener('DOMContentLoaded', () => {
    const accLabel = document.querySelectorAll('.accordion__label');
    const accContent = document.querySelectorAll('.accordion__content');

    [...accLabel].forEach(element => {
        element.addEventListener('click', function () {
            [...accLabel].forEach(item => {
                item.classList.remove('active');
            });

            [...accContent].forEach(item => {
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
});

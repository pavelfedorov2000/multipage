$(function () {

    @@include('../blocks/modules/burger/burger.js')

    @@include('../blocks/modules/popups/popups.js')

    @@include('tabs.js')

    @@include('accordion.js')

    @@include('sliders.js')

    @@include('validate.js')

    @@include('scroll.js')

    @@include('dinamic-adapt.js')

    /* $('.filter-style').styler(); */

    // Custom select
    /* let selectItem = document.querySelector('.select');
    let selectTitle = selectItem.querySelector('.select__title');
    let selectLabels = selectItem.querySelectorAll('.select__label');
    // Toggle menu
    selectTitle.addEventListener('click', () => {
        if ('active' === selectItem.getAttribute('data-state')) {
            selectItem.setAttribute('data-state', '');
        } else {
            selectItem.setAttribute('data-state', 'active');
        }
    });
    // Close when click to option
    for (let i = 0; i < selectLabels.length; i++) {
        selectLabels[i].addEventListener('click', (e) => {
            selectTitle.textContent = e.target.textContent;
            selectItem.setAttribute('data-state', '');
        });
    } */
});




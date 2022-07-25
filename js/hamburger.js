const hamburger = document.querySelector('.hamburger--js');
const submenu_a = document.querySelector('.navigation__item--school-js');
const submenu_b = document.querySelector('.navigation__item--vocal-js');
const submenu_c = document.querySelector('.navigation__item--instruments-js');


hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation__list');
    nav.classList.toggle('navigation__list--visible');
});


submenu_a.addEventListener('click', () => {
    const school = document.querySelector('.navigation__sublist--school-js');
    school.classList.toggle('navigation__sublist--visible');
});

submenu_b.addEventListener('click', () => {
    const vocal = document.querySelector('.navigation__sublist--vocal-js');
    vocal.classList.toggle('navigation__sublist--visible');
});

submenu_c.addEventListener('click', () => {
    const instruments = document.querySelector('.navigation__sublist--instruments-js');
    instruments.classList.toggle('navigation__sublist--visible');
});

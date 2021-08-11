const showMenu = document.querySelector('.header .burger-menu');
showMenu.addEventListener('click', () => {
    document.querySelector('header').classList.toggle('show');
});
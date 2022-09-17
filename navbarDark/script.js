const mobileMenu = document.querySelector('.mobile-menu');
const mainMenus = document.querySelector('.main-menus');
mobileMenu.addEventListener('click', e => {
    mainMenus.classList.toggle('show-main-menu');
    mainMenus.style.transform = 'translateY(8.5em)';
    

})


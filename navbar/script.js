const mainMenus = document.querySelectorAll('.main-menu-li');
const header = document.querySelector('header');

mainMenus.forEach((mainMenu) => {
    const subMenu = mainMenu.querySelector('.sub-menu');
    const arrow = mainMenu.querySelector('.arrow-down');
    arrow.addEventListener('click' , e => {
        subMenu.classList.toggle('show-sub-menu');
    })
    })

const mobileNav = header.querySelector('.mobile-nav');
mobileNav.addEventListener('click', e => {
    const mainMenuUl = header.querySelector('.main-menu-ul');
    mainMenuUl.classList.toggle('show-main-menu-ul');
})
const mainMenus = document.querySelectorAll('.drop');
const header = document.querySelector('header');

mainMenus.forEach((mainMenu) => {
    const subMenu = mainMenu.querySelector('.sub-menu');
    const subHead = mainMenu.querySelector('.sub-head');
    subHead.addEventListener('click' , e => {
        subMenu.classList.toggle('show-sub-menu');
    })
    })

const mobileNav = header.querySelector('.mobile-nav');
mobileNav.addEventListener('click', e => {
    const mainMenuUl = header.querySelector('.main-menu-ul');
    mainMenuUl.classList.toggle('show-main-menu-ul');
})
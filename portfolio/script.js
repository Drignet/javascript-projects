const mobileMenu = document.querySelector('.menus');
const menuHandle = document.querySelector('.menu-handle');

menuHandle.addEventListener('click' , (e) => {
    mobileMenu.classList.toggle('show')
})

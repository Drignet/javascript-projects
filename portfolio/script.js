const header = document.querySelector('header');
const wrapper = document.querySelector('.wrapper');
const btnDarkMode = header.querySelector('.circle');
const menuHandle = document.querySelector('.menu-handle');

const contactSocial = document.querySelector('.contact-socials');
const share = document.querySelector('.share');



menuHandle.addEventListener('click' , () => {
    const mobileMenu = header.querySelector('.menus');
    mobileMenu.classList.toggle('show')
})

btnDarkMode.addEventListener('click' , () => {
    const darkBtn = header.querySelector('.dark-btn');
    darkBtn.classList.toggle('dark-mode');
    wrapper.classList.toggle('d');
})

share.addEventListener('mouseover' , () => {
    
        contactSocial.classList.toggle('show-social');

    setTimeout(() => {
        contactSocial.classList.remove('show-social');
    }, 10000)
    
})


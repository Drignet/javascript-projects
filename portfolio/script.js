const header = document.querySelector('header');
const wrapper = document.querySelector('.wrapper');
const btnDarkMode = header.querySelector('.circle');
const menuHandle = document.querySelector('.menu-handle');

const contactSocial = document.querySelector('.contact-socials');
const share = document.querySelector('.share');
const whatDo = wrapper.querySelector('.what-i-do');
const autoText = wrapper.querySelector('.auto-text');

const mes = ['I Am A Creator' , 'A Software Engineer' , 'A FrontEnd Developer' , 'A UI Designer'];

setInterval(() => {
        autoText.textContent = mes[Math.floor(Math.random() * mes.length)];
        autoText.style.color = '#' + (Math.random().toString(16).slice(2,8));
}, 2000)

menuHandle.addEventListener('click' , () => {
    const mobileMenu = header.querySelector('.menus');
    mobileMenu.classList.toggle('show')
})

btnDarkMode.addEventListener('click' , () => {
    const darkBtn = header.querySelector('.dark-btn');
    darkBtn.classList.toggle('dark-mode-control');
    document.body.classList.toggle('dark-mode');
})

share.addEventListener('click' , () => {
    
        contactSocial.classList.toggle('show-social');

    
    
})


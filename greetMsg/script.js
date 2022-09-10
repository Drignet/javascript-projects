const wrapper = document.querySelector('.wrapper');
const msg = document.querySelector('.msg');
const greet = document.querySelector('#greet');
const btn = document.querySelector('button');

const closeIcon = document.createElement('span');
closeIcon.classList = 'close';
closeIcon.innerHTML = '&#9938';
closeIcon.style.position = 'fixed';
closeIcon.style.top = '1%';
closeIcon.style.right = '1%';

btn.addEventListener('click' , e => {
    wrapper.textContent = `Good Morning , ${greet.value.toUpperCase()}`;
    msg.style.display = 'none';
    wrapper.appendChild(closeIcon);
})

closeIcon.addEventListener('click', e => {
    location.reload();
})
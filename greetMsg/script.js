const wrapper = document.querySelector('.wrapper');
const msg = document.querySelector('.msg');
const greet = document.querySelector('#greet');
const btn = document.querySelector('button');

const closeIcon = document.createElement('span');
closeIcon.classList = 'close';
closeIcon.innerHTML = '&#9938';
closeIcon.style.position = 'fixed';
closeIcon.style.top = '2%';
closeIcon.style.right = '2%';
closeIcon.style.fontSize = '2em';
closeIcon.style.color = 'yellow';
closeIcon.style.cursor = 'pointer';

btn.addEventListener('click' , e => {
    wrapper.textContent = `Good Morning , ${greet.value.toUpperCase()}`;
    msg.style.display = 'none';
    wrapper.appendChild(closeIcon);
})

closeIcon.addEventListener('click', e => {
    location.reload();
})
const wrapper = document.querySelector('.wrapper');

const greet = prompt('What is your name? ');
wrapper.innerHTML = `${greet.toLocaleUpperCase()}<br> Welcome To my Arena `;
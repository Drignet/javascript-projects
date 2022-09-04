const result = document.querySelector('span');
const btns = document.querySelectorAll('.btns');

result.textContent = localStorage.getItem('number');

btns.forEach((btn) => {
    btn.addEventListener('click', e => {
        e.preventDefault;
result.textContent = localStorage.getItem('number');
    const ele = e.currentTarget.classList
    ele.contains('increase') ? count++ : ele.contains('decrease') ? count-- : count = 0;

result.textContent = count;                             count > 0 ? result.style.color = 'green' : count < 0 ? result.style.color = 'red' : result.style.color = 'go    ld';

localStorage.setItem('number' , count);
    })
})

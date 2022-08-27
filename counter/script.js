const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
let number = document.querySelector('.number');

number.textContent = localStorage.getItem('num')

increase.addEventListener('click', increaseFunc);
up.addEventListener('click', increaseFunc);
function increaseFunc(){
    increaseNumber = +number.innerHTML + 1;
    number.textContent = increaseNumber;
    localStorage.setItem('num', increaseNumber)
}

decrease.addEventListener('click', decreaseFunc);
down.addEventListener('click', decreaseFunc)
function decreaseFunc(){
    decreaseNumber = +number.innerHTML - 1;
    number.textContent = decreaseNumber;
    localStorage.setItem('num', decreaseNumber)
}
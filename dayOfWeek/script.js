const day = document.querySelector('p');

const now = new Date();
const today = now.getDay();

const days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
day.textContent = days[today];

setInterval(randomColor, 1000);
function randomColor(){
    let randCol = '#' + (Math.random() * 10).toString(16).slice(2, 8);
    day.style.color = randCol;
}
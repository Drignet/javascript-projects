const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const timer = document.querySelector('.timer');

const deadline = new Date('Dec 24 2022 24:00:00').getTime();

setInterval(countDown, 1000);
function countDown(){
    const now = new Date().getTime();

    const limit = (deadline - now);

    let day = Math.floor(limit/(1000 * 60 * 60 * 24));
    let hour = Math.floor((limit % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor(((limit % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((((limit % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60)) / 1000)

    days.style.color = 'green';
    hours.style.color = 'blue';
    minutes.style.color = ' gold';
    seconds.style.color = 'red';

    days.textContent = `${day}d`;
    hours.textContent = ` ${hour}h`;
    minutes.textContent = `${minute}m`;
    seconds.textContent = `${second}s`;

    if(limit < 0){
        clearInterval(countDown);
        timer.textContent = 'Happy X-Mas';
        timer.style.color = 'red';
        timer.style.textAlign = 'center';
        timer.style.fontSize = '2rem';
    }
}
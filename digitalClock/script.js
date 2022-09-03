const clock = document.querySelector('.clock');
let timeSymbol = document.querySelector('.am-pm');

setInterval(digitalClock, 1000)
function digitalClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ourTime;

    const amPm = [' AM', ' PM'];
    (hours >= 12) ? clock.childNodes[1].textContent = amPm[1] : clock.childNodes[1].textContent = amPm[0];
    console.log(hours)
hours = hours % 12;
hours = hours ? hours : 12;

    if (hours < 10) {
        hours = `${'0' + hours}`;
    }
    if (minutes < 10) {
        minutes = `${'0' + minutes}`;
    }
    if (seconds < 10) {
        seconds = `${'0' + seconds}`;
    }

    ourTime = `${hours}:${minutes}:${seconds}`;
    clock.childNodes[0].textContent = ourTime;

    
}

setInterval(color, 3000)
function color() {
    let randomColor = '#' + (Math.random() * 10).toString(16).slice(2, 8);
    timeSymbol.style.color = randomColor;
}



const clock = document.querySelector('.clock');

setInterval(digitalClock, 1000)
function digitalClock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ourTime;
    if(hours < 10){
        hours = `${'0' + hours}`;
    }
    if(minutes < 10){
        minutes = `${'0' + minutes}`;
    }
    if(seconds < 10){
        seconds = `${'0' + seconds}`;
    }

    if(hours >= 12 && hours <24){
        hours = hours - 12;
    ourTime = `${hours}:${minutes}:${seconds} PM`;
    }else if(hours === 24){
        hours = hours - 12;
            ourTime = `${hours}:${minutes}:${seconds} AM`;
    }
    else{
        ourTime = `${hours}:${minutes}:${seconds} AM`;
}
    clock.textContent = ourTime;
}
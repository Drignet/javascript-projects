const day = document.querySelector('p');

setInterval(randomColor, 1000);
function randomColor(){
    let randCol = '#' + (Math.random() * 10).toString(16).slice(2, 8);
    day.style.color = randCol;
}
const wrapper = document.querySelector('.wrapper');
const number = document.querySelector('.number');
let load = 0
let x = setInterval( () => {
    let blurer = 100 - load
    wrapper.style.filter = `blur(${blurer}px)`
    load++;
    number.textContent = `${load}%`;
    if (load > 99){
        clearInterval(x);
        number.textContent = '';
    }
}, 30)
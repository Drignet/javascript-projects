const bulb = document.querySelector('.bulb-off');

bulb.addEventListener('click' , e => {
    e.target.classList.toggle('bulb-on')
})
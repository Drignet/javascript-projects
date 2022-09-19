const wrapper = document.querySelector('.wrapper');
const buttons = wrapper.querySelectorAll('button');
const indicator = wrapper.querySelector('.progress-indicator');
let indicatorWidth = 0;
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        button.classList.contains('prev').disabled = false;
        if (button.classList.contains('next')) {

            if (indicatorWidth < 100) {
                indicatorWidth += 25;
                indicator.style.width = `${indicatorWidth}%`;
            } else {
                button.classList.contains('prev').disabled = true;
            }
        }
    })

    button.addEventListener('click', (e) => {
        button.classList.contains('next').disabled = false;
        if (button.classList.contains('prev')) {
            if (indicatorWidth > 0) {
                indicatorWidth -= 25;
                indicator.style.width = `${indicatorWidth}%`;
            } else {
                button.classList.contains('prev').disabled = true;
            }
        }
    })
})




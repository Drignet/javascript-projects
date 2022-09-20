const sliders = document.querySelectorAll('.sliders');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
const body = document.body;

sliders.forEach((slide) => {
    let length = 0;
    btnRight.addEventListener('click' , () => {
        if (length < 4){
        sliders[length].style.display = 'none';
        sliders[length + 1].style.display = 'block';
        body.style.backgroundImage = `url('images/img${length + 1}.jpg')`;
        length++;
        }
    })
    
    btnLeft.addEventListener('click' , () => {
        if (length > 0){
        sliders[length].style.display = 'none';
        sliders[length - 1].style.display = 'block'
        body.style.backgroundImage = `url('images/img${length - 1}.jpg')`;
        length--;
        }
    })
    
})


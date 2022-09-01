const colors = document.querySelectorAll('.color');
const colorArea = document.querySelector('.color-area');
const colorsArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

colorsArr.forEach((color, i) => {
colors[i].addEventListener('click', e => {
    colorArea.style.backgroundColor = color;
})
})

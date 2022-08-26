const colors = ['blue', 'red', 'pink', 'brown', 'orange', 'yellow', 'cyan', 'azure', 'maroon', 'lime', 'violet', 'fuchsia', 'aquamarine', 'aqua', 'silver'];

const main = document.querySelector('main');
const colorName = document.createElement('div');
const button = document.querySelector('button');


button.addEventListener('click', e => {
    e.preventDefault();
    main.appendChild(colorName);
    const color = colors[randomColor()];
    main.style.backgroundColor = color;
    colorName.textContent = color.toUpperCase();
});
colorName.style = `
            margin-top: -55%;
            font-size: 30px;
            padding: 10px;
            color: #FFFFFF;
        `
function randomColor(){
    let randomNumber = Math.floor(Math.random() * colors.length);
    return randomNumber;
}
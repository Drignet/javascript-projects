const main = document.querySelector('main');
const buttonColor = document.querySelector('.change-background-color');
const buttonMeal = document.querySelector('.change-meal');
const img = document.querySelector('img');

const foods = ['food1', 'food2', 'food3', 'food4', 'food5', 'food6', 'food7', 'food8', 'food9'];
function randomColorSwitch(){
    let randColSwitch = '#' + Math.random().toString(16).slice(2,8).toUpperCase();
    return randColSwitch
}

buttonColor.addEventListener('click', e => {
    e.preventDefault();
    main.style.backgroundColor = randomColorSwitch();
})


function randomMealSwitch(){
    let randMealSwitch = Math.floor(Math.random() * foods.length)
    return randMealSwitch
}

buttonMeal.addEventListener('click', e => {
    e.preventDefault();
    img.setAttribute('src', '');
    img.setAttribute('src', `images/${foods[randomMealSwitch()]}.jpg`);
    console.log(img)
})
const enter = document.querySelector('.enter');
let wrapper = document.querySelector('.wrapper');
const wrapperGroup = document.querySelector('.wrapper-group');
let teams = document.querySelector('.teams');
let team = document.querySelectorAll('.team');
const closeBtn = document.querySelector('.close-button');
const clubImage = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let img = document.createElement('img');
const returnHome = document.querySelector('.return-home');

enter.addEventListener('click', e => {
    e.preventDefault();
    wrapper.style.display = 'none';
    wrapperGroup.style.display = 'grid';
    returnHome.style.display = 'block';
})


for(let i = 0; i < team.length ; i++){
team[i].addEventListener('click', e => {
    e.preventDefault();
    wrapperGroup.style.display = 'none';
    returnHome.style.display = 'none';
    img.setAttribute('src' , `images/${clubImage[i]}.jpg`);
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.backgroundColor = 'black'
    teams.style.display = 'block';
    teams.appendChild(img);
    teams.style.overflow = 'hidden';
})
}

closeBtn.addEventListener('click', e => {
    e.preventDefault();
    returnHome.style.display = 'block';
    teams.style.display = 'none';
    wrapperGroup.style.display = 'grid';
})


let res = window.matchMedia("(max-width: 780px)");
if(res.matches){
    returnHome.addEventListener('click', e => {
        e.preventDefault();
        returnHome.style.display = 'none';
        wrapperGroup.style.display = 'none';
        wrapper.style.display = 'block';    
    })
}else{
    returnHome.addEventListener('click', e => {
        e.preventDefault();
        returnHome.style.display = 'none';
        wrapperGroup.style.display = 'none';
        wrapper.style.display = 'grid';    
    })
}






const p = document.querySelector('p');
const h1 = document.querySelector('h1');
const btn = document.querySelector('button');


const url = 'https://official-joke-api.appspot.com/random_joke';


    
btn.addEventListener('click' , () => {
fetch(url)
.then((res) => res.json())
.then((data) => {
        h1.textContent = data.setup;
        p.textContent = data.punchline;
    });
    
});


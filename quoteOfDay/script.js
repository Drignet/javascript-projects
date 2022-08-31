const button = document.querySelector('button');
const quote = document.querySelector('.quote-text');
const author = document.querySelector('.author');

quote.textContent = localStorage.getItem('q')
author.textContent = localStorage.getItem('a')

let url = 'https://type.fit/api/quotes'
async function quoteFunc(){
    let res = await fetch(url);
    let data = await res.json();
    let randNum = Math.floor(Math.random() * 1644);
	quote.style.backgroundColor = '#C393A6';
    quote.textContent = data[randNum].text;
    localStorage.setItem('q', data[randNum].text);
    if(data[randNum].author === null){
        author.textContent = 'Anonymous'
    }else{
    author.textContent = data[randNum].author;
    }
    localStorage.setItem('a', data[randNum].author);
    console.log(data[randNum].author)
    console.log(typeof data[randNum].author)
}

button.addEventListener('click', quoteFunc)

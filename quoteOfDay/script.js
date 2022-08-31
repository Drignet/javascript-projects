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
	if(data[randNum].text === null){
		quote.textContent = 'Anonymous'
	}else{
    quote.textContent = data[randNum].text
	}
    localStorage.setItem('q', data[randNum].text)
    author.textContent = data[randNum].author
    localStorage.setItem('a', data[randNum].author)

button.addEventListener('click', quoteFunc)

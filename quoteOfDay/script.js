const button = document.querySelector('button');
const quote = document.querySelector('.quote-text');
const author = document.querySelector('.author');



let url = 'https://type.fit/api/quotes'
async function quoteFunc(){
    let res = await fetch(url);
    let data = await res.json();
    let randNum = Math.floor(Math.random() * 1644);
    quote.textContent = data[randNum].text
    author.textContent = data[randNum].author
}

button.addEventListener('click', quoteFunc)

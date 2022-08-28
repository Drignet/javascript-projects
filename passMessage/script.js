const input = document.querySelector('#message');
const button = document.querySelector('button');
const deliver = document.querySelector('h2');

button.addEventListener('click', e => {
    deliver.textContent = input.value;
})

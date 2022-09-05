const textarea = document.querySelector('textarea');
const words = document.querySelector('.word-count');
const chars = document.querySelector('.char-count');
const spaces = document.querySelector('.space-count');


textarea.addEventListener('input', e => {
    const inputs = textarea.value;
    if(inputs === ''){
        words.textContent = '0 word';
        chars.textContent = '0 character';
        spaces.textContent = '0 space';
    }
    else{
        words.textContent = `${inputs.split(' ').length} words`;
        chars.textContent = `${inputs.match(/ \w/g).length} characters`;
        spaces.textContent = `${inputs.match(/\s/g).length} spaces`;
    }
})
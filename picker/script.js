const wrapper = document.querySelector('.wrapper');
const textarea = wrapper.querySelector('textarea');
const outputArea = wrapper.querySelector('.output-area');
const button = document.querySelector('button');

textarea.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        if (textarea.value === '' || textarea.value === ' ') {
            alert('empty')
        }
        else {
            const output = document.createElement('span');
            output.classList.add('tag');
            outputArea.appendChild(output);
            output.style.backgroundColor = 'white';
            output.style.padding = '0.2em';
            output.style.marginLeft = '0.4em';
            output.style.marginTop = '0.6em';
            output.style.borderRadius = '6px';
            output.style.lineHeight = '1.8em';
            output.style.color = '#222';
            output.style.fontSize = '1.2rem';
            output.textContent = textarea.value.toLowerCase();
            output.style.backgroundColor = 'purple';
            output.style.color = '#fff';
            setTimeout(() => {
                e.target.value = ''
            }, 10)
        }

    }
})

button.addEventListener('click', e => {
    const tags = outputArea.querySelectorAll('.tag');

    tags.forEach((tag) => {
        const interval = setInterval(() => {
            const randTagNum = Math.floor(Math.random() * tags.length);
    
            tags[randTagNum].style.backgroundColor = 'red';

            setTimeout(() => {
                tags[randTagNum].style.backgroundColor = 'purple'
            }, 100);

        }, 100);

        setTimeout(() => {
            clearInterval(interval);
    
            setTimeout(() => {
                const randTagNum = Math.floor(Math.random() * tags.length);
                tags[randTagNum].style.backgroundColor = 'red';
            }, 100);
    
        }, 20 * 100);
    })

    

})
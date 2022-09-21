const wrapper = document.querySelector('.wrapper');
const share = document.querySelector('.share');
const cancel = document.querySelector('.cancel');

share.addEventListener('click' , () => {
    share.classList.add('share-remove');
    wrapper.style.opacity = '1';
})

cancel.addEventListener('click' , () => {
    wrapper.style.opacity = '0';
    setTimeout(() => {
        share.classList.remove('share-remove');
    }, 2000)
    
})
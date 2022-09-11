const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click' , e => {
        const questionClass = e.currentTarget.parentElement.parentElement.parentElement.classList;
        questionClass.toggle('show-text');
    })
})

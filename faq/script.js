const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('button');
    btn.addEventListener('click' , e => {
        questions.forEach((ques) => {
            if (ques !== question){
                ques.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text')
    })
})

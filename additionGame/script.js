const nums = document.querySelectorAll('.num');
const ans = document.querySelector('#ans');
const check = document.querySelector('#check');
const reset = document.querySelector('#reset');
const correct = document.querySelector('.correct');
const inCorrect = document.querySelector('.incorrect');


let correctScore = 0;
let incorrectScore = 0;


check.addEventListener('click', e=> {
    let num1 = +nums[0].textContent;
    let num2 = +nums[1].textContent;
    let answer = (num1 + num2);

    if (ans.value === ''){
        alert('please input your answer');
    }

    else if (answer === +ans.value){
        correctScore++;
        correct.childNodes[1].textContent = correctScore;
    }
    else{
        incorrectScore++;
        inCorrect.childNodes[1].textContent = incorrectScore;
        inCorrect.childNodes[1].style.color = 'red';
    }

    nums[0].textContent = '';
    nums[1].textContent = '';
    ans.value = '';

    nums[0].textContent = randomNumber();
    nums[1].textContent = randomNumber();
})

reset.addEventListener('click', e => {
    correct.childNodes[1].textContent = '0';
    inCorrect.childNodes[1].textContent = '0';
    correctScore = 0;
    incorrectScore = 0;
})

function randomNumber(){
    return (Math.floor(Math.random() * 10));
}


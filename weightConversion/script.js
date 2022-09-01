const input = document.querySelector('#pounds');
const button = document.querySelector('button');
const result = document.querySelector('.result');

button.addEventListener('click', convert);
function convert(){
    if(input.value == ''){
        alert('Please input pounds value');
    }else if(+input.value < 0){
        alert('please pounds must be positive');
    }else{
    result.textContent = `${input.value} Pounds is equal to ${(0.454 * +input.value).toFixed(2)}kg`;
    }
    console.log(typeof input.value)
} 
const bill = document.querySelector('#bill');
const tip = document.querySelector('#tip');
const people = document.querySelector('#people');
const btns = document.querySelectorAll('button');
const results = document.querySelectorAll('.value');

btns.forEach((btn) => {
    btn.addEventListener('click', e => {
        let style = e.currentTarget.classList;
        if (style.contains('reset')){
            bill.value = '';
            tip.value = '';
            people.value = '';

            for(let i = 0; i < results.length; i++){
            results[i].textContent = '';
            }
        }
        else if (style.contains('calculate') && (+bill.value === '') || (+tip.value === '') || people.value === ''){
            alert('Dont leave your values empty');
            }
        else if (+bill.value <=0 || +people.value <= 0){
            alert('Please Re-confirm your bill / Number of people')
        }
        else if (+people.value !== Math.floor(+people.value)){
            alert('we dont have decimal human')
        }
        else {
                const tipAmount = Math.ceil(((+tip.value / 100) * +bill.value));
                const totalAmount = (+bill.value + tipAmount);
                results[0].textContent = `#${tipAmount}`;
                results[1].textContent = `#${totalAmount}`;
                results[2].textContent = `#${Math.ceil((totalAmount / +people.value))}`;

            }
        })
    })

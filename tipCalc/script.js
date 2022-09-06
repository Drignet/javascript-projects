const bill = document.querySelector('#bill');
const tip = document.querySelector('#tip');
const people = document.querySelector('#people');
const btns = document.querySelectorAll('button');
const results = document.querySelectorAll('span');

btns.forEach((btn) => {
    btn.addEventListener('click', e => {
        let style = e.currentTarget.classList;
        if (style.contains('reset')){
            bill.value = '';
            tip.value = '';
            people.value = '';

            for(let i = 0; i < results.length; i++){
            results[i].textContent = '0';
            }
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

const examForm = document.getElementsByName('exam');
const surname = document.querySelector('#surname');
const otherNames = document.querySelector('#other-names');
const birthDate = document.querySelector('#birth-date');
const state = document.querySelector('#state');
const lga = document.querySelector('#lga');
const phone = document.querySelector('#phone');
const subject = document.querySelector('#subject');
const btn = document.querySelector('button');

const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
const regPhone = /^\d{11}$/;
const regName = /\d+$/g;

btn.addEventListener('click' , (e) => {
    e.preventDefault();
    console.log(birthDate.value)
    if (surname.value === '' || regName.test(surname.value)){
        alert('Please enter your surname properly');
        surname.focus();
    }

    if (otherNames.value === '' || regName.test(otherNames.value)){
        alert('Please enter your other names properly');
        otherNames.focus();
    }

    if (birthDate.value === '' ){
        alert('Please enter your date of Birth');
        birthDate.focus();
    }

    if (+state.value === 0){
        alert('Please choose your state');
        state.focus();
    }

    if (lga.value === ''){
        alert('Please enter your local government area properly');
        lga.focus();
    }

    if (phone.value === '' || !regPhone.test(phone.value)){
        alert('Please enter your phone number properly');
        phone.focus();
    }

    if (+subject.value === 0){
        alert('Please choose your Nine(9) Subjects');
        subject.focus();
    }
})




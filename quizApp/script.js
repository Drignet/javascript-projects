document.addEventListener("DOMContentLoaded", function() {
  checkLocation();
});

const questionNumber = document.querySelector('.question-number');
const question = document.querySelector('.question');
const answersDiv = document.querySelectorAll('i');
const navBtns = document.querySelector('.nav');
const submitBtn = document.querySelector('#submit');
const nextBtn = document.querySelector('#next');
const answerBtns = document.querySelectorAll('.ans-btn');

// console.log(document.querySelector('.dashboard-wrapper'))

let i = 0;
let data;
const ans = ["A", "C", "D", "C", "A", "A", "B", "A", "B", "D", "A", "B", "A", "A", "D", "D", "C", "A", "D", "A", "C", "A"];
let correctAns = 0;
let incorrectAns = 0;
let score = 0;
let percent = 0;

const dataUrl = "question.json";
fetch(dataUrl)
.then(res => res.json())
.then(result => {
  data = result;
  if (i !== data.length - 1){
    submitBtn.style.display = "none"
  }
  
  Array.from(navBtns.children).forEach(navBtn => {
    navBtn.addEventListener("click", (e) => {
      e.preventDefault()
     if(e.target.id === "next"){
      if (i < data.length){
        i++;
      updateQuestionAndAnswers();
      }
     }else if(e.target.id === "prev"){
       if(i > 1){
         i--;
         updateQuestionAndAnswers();
       }
     }
     
     if (i !== data.length){
    submitBtn.style.display = "none"
  }else{
    submitBtn.style.display = "block"
}
    })
  })
})

answerBtns.forEach(answerBtn => {
  answerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList[1] === ans[i-1]) {
      correctAns++
    }else{
      incorrectAns++
    }
    console.log("correctAns", correctAns)
    console.log("incorrectAns", incorrectAns)
  });
});


  submitBtn.addEventListener("click", () => {
    score = `${correctAns} / ${data.length}`;
    percent = `${(correctAns / data.length) * 100}%`;
    document.querySelector(".dashboard-score strong").innerHTML = score;
    document.querySelector(".dashboard-percentage strong").innerHTML = percent;
});



function updateQuestionAndAnswers() {
  questionNumber.querySelector('span').textContent = i;
  question.textContent = data[i-1].question;
  
  for (let j = 0; j < answersDiv.length; j++) {
    answersDiv[j].textContent = Object.values(data[i - 1].options)[j];
  }
}

function checkLocation() {
  if (location.href.includes("index.html")) {
    setTimeout(() => {
      location.href = "about.html";
    }, 5000);
  }
}



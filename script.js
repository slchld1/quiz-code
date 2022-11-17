const startBtn = document.getElementById('start-btn')
const startMsg = document.getElementById('start-msg')
const questionText = document.getElementById('container')
const submitBtn = document.getElementById('next-btn')
let timer = document.getElementById('timer')
let questionEl = document.getElementById('questions')
let answerIndex = document.getElementsByClassName('answer')


let score = 0;

const hideStartMsg = () => {
    startMsg.classList.add("hide");
}
// timer 
function countdown() {
    var timeLeft = 1000;

    var timeInterval = setInterval(function () {

    timeLeft--;
    timer.textContent = "Time remaining: " + timeLeft + " seconds"

    if(timeLeft === 0) {
        clearInterval(timeInterval);
        displayMessage();
    }
    }, 1000);
}
//data list for questions and answers

let questionsList = [
    
    {
        question: 'what is 2 + 2?',
        answers: ['4', '8', '90','100'],
        correct: 1
    }
]

//shows questions in random order from questionsList
const showQuestion = () => {
var randomQuestions = Math.floor(Math.random() * questionsList.length);

questionEl.innerHTML = questionsList[randomQuestions].question;

    for (let i = 0; i < answerIndex.length; i++) {
        answerIndex[i].innerHTML = questionsList[randomQuestions].answers[i];
    }

}


// clears status of buttons
const clear = () => {
    e.classList.remove('correct')
    e.classList.remove('wrong')
}

startBtn.addEventListener("click", function() {
    startBtn.classList.toggle("hide");
    hideStartMsg();
    questionText.classList.toggle("hide");
    showQuestion();
    score = 0;
    countdown();
});




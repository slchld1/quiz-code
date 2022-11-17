const startBtn = document.getElementById('start-btn')
const startMsg = document.getElementById('start-msg')
const questionText = document.getElementById('container')
const submitBtn = document.getElementById('next-btn')
let questionEl = document.getElementById('questions')
let answerIndex = document.getElementsByClassName('answer')


let score = 0;
let timer = 1000;

const hideStartMsg = () => {
    startMsg.classList.add("hide");
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

});




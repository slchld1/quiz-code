const startBtn = document.getElementById('start-btn')
const startMsg = document.getElementById('start-msg')
const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('answer'))
const questionText = document.getElementById('container')
const nextBtn = document.getElementById('next-btn')
const scoreNum = document.getElementById('score')
let timer = document.getElementById('timer')
let acceptingAnswer = true;
let currentQuestion = {};
let questionIndex = 0;
let availableQuestions = [];
let score = 0



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
        alert("Time is up!")
        return;
    }
}, 1000);
}

// removes time from timer if answer is wrong
function removeTime() {
    var remainingT = timer.innerHTML;
    remainingT -= 25;
}
//data list for questions and answers

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];

const correctScore = 1;
const maxQuestions = 6;

startGame = () => {
    questionIndex = 0;
    score = 0;
    availableQuestions = [ ... questions];
    newQuestion();
}

newQuestion = () => {
    questionIndex++;
    //finding the location of current question
    const rnQuestion = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[rnQuestion];
    //prints current question
    question.innerText = currentQuestion.question
    //link the answer choices through data-set from the data-set number
    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    });
    
    availableQuestions.splice(rnQuestion, 1);
    acceptingAnswer = true;
};
choices.forEach((choice) => {
        choice.addEventListener('click', (event) => {
            if(!acceptingAnswer){
                return;
            };
            
            acceptingAnswer = false;
            const selChoice = event.target;
            const selAnswer = selChoice.dataset['number'];
            //if answer is correct-incorrect
            const currentAns = "incorrect";
            if(selAnswer === currentQuestion.answer) {
                    currentAns = 'correct';
                }
                const c_wResponse = selAnswer == currentQuestion.answer ? 'correct ' : 'incorrect';
                console.log(c_wResponse)
                selChoice.classList.add(c_wResponse)
                if (selChoice === 'correct') {
                    addScore(1);
                }  
                
                setTimeout(() => {
                    selChoice.classList.remove(c_wResponse)
                    newQuestion()
                }, 1000);
                if (selChoice === 'incorrect'){
                    timeLeft -= 300
                }
        });
    });        
        addScore = n => {
            score += n;
            scoreNum.textContent = score
        }
        
        // clears status of buttons
const clear = () => {
    answerBtn.classList.remove('correct')
    answerBtn.classList.remove('wrong')
    nextBtn.classList.toggle('hide')
    correctAns.classList.add('hide')
    wrongAns.classList.add('hide')
}

startBtn.addEventListener("click", function() {
    startBtn.classList.toggle("hide");
    hideStartMsg();
    questionText.classList.toggle("hide");
    startGame();

    countdown();
});

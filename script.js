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
let scoreCount = 0



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
    return;
}, 1000);
}
//data list for questions and answers

let questions = [
    {
        question: 'What is 2 + 2?',
        choice1: '4',
        choice2: '44',
        choice3: '120',
        choice4: '90',
        answer: 1,
    },
    {
        question: "How do you link a css file from your Index.html file?",
        choice1: "<script class='style.css'>",
        choice2: "<link name='style.css'>",
        choice3: "<link href='style.css'>",
        choice4: "<style class='style.css'>",
        answer: 3,
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
    {
        question: "Constant can",
        choice1: "be changed",
        choice2: "be undefined",
        choice3: "not be changed",
        choice4: "be used in html",
        answer: 3,
    }
];

const correctScore = 1;
const maxQuestions = 4;

startGame = () => {
    score = 0;
    scoreCount = 0
    questionIndex = 0;
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
    if (currentQuestion >= maxQuestions) {
        userInput();
    }
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
                const c_wResponse 
                = selAnswer == currentQuestion.answer ? 'correct ' : 'incorrect';

                if (c_wResponse === 'correct') {
                    addScore(1)
                }
                selChoice.classList.add(c_wResponse)
                setTimeout(() => {
                    selChoice.classList.remove(c_wResponse)
                    newQuestion()
                }, 1500);
            });
    });        
        function subtractTime() {
            timer.innerText - 200;
            countdown();
        }
        addScore = n => {
                score += n
                parseInt(scoreNum.innerText = +score);
        }
        var array = [];
        function dataInfo(data) {
            trackScore = data
            array.push(trackScore)
            var val = "";
            for(i = 0; i < array.length; i++){
                val = val + array[i] + "<br/>"
            }
            document.getElementById('high-score').innerHTML = val
        }
        
        function userInput(){
                trackScore = window.prompt("What is your name")
                pushData(data)
        }

startBtn.addEventListener("click", function() {
    startBtn.classList.toggle("hide");
    hideStartMsg();
    questionText.classList.toggle("hide");
    startGame();
    countdown();
});

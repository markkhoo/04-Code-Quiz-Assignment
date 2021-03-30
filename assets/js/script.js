// ALL Variables
// Pointers
var gameStart = document.getElementById("gameStart");
var timerSpan = document.getElementById("Timer");
var quizChoice = document.querySelector("#quizChoices");
var quizQuestion = document.querySelector("#quizQuestion");

// Quiz Questions and Answers
var quizes = {
    set1: {
        question: "question",
        answers: {
            answerCorrect: "ASD",
            answerWrong02: "asd",
            answerWrong03: "asd",
            answerWrong04: "asd"
        }
    },
    set2: {
        question: "question",
        answers: {
            answerCorrect: "ASD",
            answerWrong02: "asd",
            answerWrong03: "asd",
            answerWrong04: "asd"
        }
    },
    set3: {
        question: "question",
        answers: {
            answerCorrect: "ASD",
            answerWrong02: "asd",
            answerWrong03: "asd",
            answerWrong04: "asd"
        }
    }
};

// Other Global Variables
var gameOver = true;
var globalTimer = 0;
var currentScore = 0;

// ALL Functions
// Render Question for id="quizQuestion"
function renderQuestion(content) {
    document.getElementById("quizQuestion").innerHTML = content; 
};

// Render Choices with buttons as children for id="quizChoices"
function renderListItems(content) {
    var li = document.createElement("li");
    li.textContent = content;

    var button = document.createElement("button");
    button.textContent = "<<<";

    li.appendChild(button);
    quizChoice.appendChild(li);
};

// Start Timer
function countdown() {
    timerSpan.textContent = "00:0" + Math.floor(globalTimer / 60) + ":" + Math.floor((globalTimer % 60)/10) + (globalTimer % 10);;
    var timeInterval = setInterval(function() {
        globalTimer--;
        timerSpan.textContent = "00:0" + Math.floor(globalTimer / 60) + ":" + Math.floor((globalTimer % 60)/10) + (globalTimer % 10);
        if (globalTimer <=0) {
            clearInterval(timeInterval);
            gameOver = true;
        }
    }, 1000);
};

// INITIALIZE

// GAME START
gameStart.addEventListener("click", function(event) {
    // Start Settings
    event.preventDefault();
    gameOver = false;
    globalTimer = 120;
    // Hide Button


    // Start Timer
    countdown();

    console.log("Game Start Test");
});

// TESTS
renderQuestion("Test Question");
renderListItems("TEST1");
renderListItems("TEST2");
renderListItems("TEST3");
renderListItems("TEST4");
console.log("test at end");
// ALL Variables
// Pointers
var gameStart = document.getElementById("gameStart");
var timerSpan = document.getElementById("Timer");
var quizChoice = document.querySelector("#quizChoices");
var quizQuestion = document.querySelector("#quizQuestion");

// Quiz Questions and Answers
var setsOfQuestions = 3;
var quizes = {
    set1: {
        question: "question1",
        answers: "ASD",
        choices: ["ASD", "asd", "sad", "das"]
    },
    set2: {
        question: "question2",
        answers: "ASD",
        choices: ["ASD", "asd", "sad", "das"]
    },
    set3: {
        question: "question3",
        answers: "ASD",
        choices: ["ASD", "asd", "sad", "das"]
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

// Hide and Show Button
function hideButton() {
    gameStart.style.setProperty('display', 'none');
};
function showButton() {
    gameStart.style.setProperty('display', 'initial');
};

// INITIALIZE
function init() {
    timerSpan.textContent= "00:00:00";
};
init();

// GAME START
gameStart.addEventListener("click", function(event) {
    // Start Settings
    event.preventDefault();
    gameOver = false;
    globalTimer = 120;
    hideButton();
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
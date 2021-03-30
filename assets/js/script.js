// ALL Variables
// Pointers
var gameStart = document.getElementById("gameStart");
var timerSpan = document.getElementById("Timer");
var quizChoice = document.querySelector("#quizChoices");
var quizQuestion = document.querySelector("#quizQuestion");

// Quiz Questions and Answers
var quizes = {
    0: {
        question: "question1",
        answer: "ASD",
        choices: ["ASD", "ssd1", "sad1", "das1"]
    },
    1: {
        question: "question2",
        answer: "ASD",
        choices: ["ASD", "ssd2", "sad2", "das2"]
    },
    2: {
        question: "question3",
        answer: "ASD",
        choices: ["ASD", "ssd3", "sad3", "das3"]
    }
};
var indexOfQuestions = Object.keys(quizes).length - 1;

// Other Global Variables
var gameOver = true;
var globalTimer = 0;
var currentScore = 0;
var currentElement;

// ALL Functions
// Render Question for id="quizQuestion"
function renderQuestion(content) {
    document.getElementById("quizQuestion").innerHTML = content; 
};

// Render Choices with buttons as children for id="quizChoices"
function renderListItems(content) {
    var li = document.createElement("li");
    li.textContent = content;
    
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

// Game Loop

// INITIALIZE
function init() {
    timerSpan.textContent= "00:00:00";
    showButton()
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

});

// Choice Listener
quizChoice.addEventListener("click", function(event) {
    currentElement = event.target;

    // Game Loop
    for (var i = 0; i <= indexOfQuestions; 0) {
        var currentQuestion = quizes[i].question;
        var currentAnswer = quizes[i].answer;
        var currentChoices = quizes[i].choices;
        renderQuestion(currentQuestion);
        renderListItems(currentChoices[0]);
        renderListItems(currentChoices[1]);
        renderListItems(currentChoices[2]);
        renderListItems(currentChoices[3]);
        if (currentElement.textContent == currentAnswer) {
            console.log("check correct");
            quizChoice.innerHTML = "";
            i++;
        } else {
            console.log("check wrong");
            quizChoice.innerHTML = "";
            i++;
        };
    };
});

// TESTS
renderListItems(quizes[0].choices[0]);

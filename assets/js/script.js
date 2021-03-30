// ALL Variables
// Pointers
var gameStart = document.getElementById("gameStart");
var timerSpan = document.getElementById("Timer");
var quizArea = document.querySelector(".quizArea");
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
var globalTimer = 0;
var currentScore = 0;
var questionStart = 0;

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

// Render Game Over and Submit Highscore
function enterHighScore () {
    quizQuestion.innerHTML = "Final Score: " + currentScore;
    var endForm = document.createElement("form");

    var formLabel = document.createElement("label")
    formLabel.setAttribute("for", "initials");

    var formInput = document.createElement("input");
    formInput.setAttribute("type", "text");
    formInput.setAttribute("id", "initials");
    formInput.setAttribute("name", "initials");
    formInput.setAttribute("value", "input initials here");

    var formButton = document.createElement("input");
    formButton.setAttribute("type","submit");
    formButton.setAttribute("value","submit");

    endForm.appendChild(formLabel);
    endForm.appendChild(formInput);
    endForm.appendChild(formButton);
    quizArea.appendChild(endForm);
};

// Display Set
function displaySet(i) {
    renderQuestion(quizes[i].question);
    renderListItems(quizes[i].choices[0]);
    renderListItems(quizes[i].choices[1]);
    renderListItems(quizes[i].choices[2]);
    renderListItems(quizes[i].choices[3]);
};

// Next Set of Questions and Choices
function NextSet() {
    quizChoice.innerHTML = "";
    questionStart++;
    if (questionStart <= indexOfQuestions) {
        displaySet(questionStart);
    } else {
        currentScore += globalTimer;
        quizChoice.innerHTML = "";
        timerSpan.textContent= "00:00:00";
        enterHighScore();
    };
};

// Start Timer
function countdown() {
    timerSpan.textContent = "00:0" + Math.floor(globalTimer / 60) + ":" + Math.floor((globalTimer % 60)/10) + (globalTimer % 10);;
    var timeInterval = setInterval(function() {
        globalTimer--;
        timerSpan.textContent = "00:0" + Math.floor(globalTimer / 60) + ":" + Math.floor((globalTimer % 60)/10) + (globalTimer % 10);

        if (globalTimer <=0) {
            clearInterval(timeInterval);
            quizChoice.innerHTML = "";

            if (questionStart == indexOfQuestions) {
                enterHighScore();
            };
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
    timerSpan.textContent = "00:00:00";
    showButton();
    globalTimer = 0;
    currentScore = 0;
    questionStart = 0;
};
init();

// GAME START
gameStart.addEventListener("click", function(event) {
    // Start Settings
    event.preventDefault();
    globalTimer = 120;
    hideButton();
    countdown();
    
    // This displays the initial question set
    displaySet(questionStart);
});

// Choice Listener
quizChoice.addEventListener("click", function(event) {
    currentElement = event.target;

    if (currentElement.textContent == quizes[questionStart].answer) {
        console.log("check correct");
        currentScore += 100;
    } else {
        console.log("check wrong");
        globalTimer -= 30;
    };
    // Calling this function in the choice listener is essentially the game loop
    NextSet();
});

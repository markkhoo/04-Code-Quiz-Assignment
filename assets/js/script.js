// --- ALL Variables -------------------------------------------------
// Pointers
var gameStart = document.getElementById("gameStart");
var timerSpan = document.getElementById("Timer");
var quizArea = document.querySelector(".quizArea");
var quizChoice = document.querySelector("#quizChoices");
var quizQuestion = document.querySelector("#quizQuestion");

// Quiz Object is moved to ./quiz-objects.js 
var indexOfQuestions = Object.keys(quizes).length - 1;

// Other Global Variables
var globalTimer = 0;
var currentScore = 0;
var questionStart = 0;

// --- ALL Functions -------------------------------------------------
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
function displaySet(x) {
    // Display Question
    renderQuestion(quizes[x].question);

    // Randomly Sort Choices
    var randSeq = [];
    for (var i = 0; i <= 3; i++) {
        randSeq.push(i);
    };
    randSeq.sort(function(a, b){return 0.5 - Math.random()});

    // Display Choices
    renderListItems(quizes[x].choices[randSeq[0]]);
    renderListItems(quizes[x].choices[randSeq[1]]);
    renderListItems(quizes[x].choices[randSeq[2]]);
    renderListItems(quizes[x].choices[randSeq[3]]);
};

// Next Set of Questions and Choices (See quizChoice event listener)
function NextSet() {
    quizChoice.innerHTML = "";
    questionStart++;
    if (questionStart <= indexOfQuestions) {
        displaySet(questionStart);
    } else {
        currentScore += globalTimer;
        globalTimer = 0;
        quizChoice.innerHTML = "";
        enterHighScore();
    };
};

// Start Timer
function countdown() {
    timerSpan.textContent = "00:0" + Math.floor(globalTimer / 60) + ":" + Math.floor((globalTimer % 60)/10) + (globalTimer % 10);;
    var timeInterval = setInterval(function() {
        globalTimer--;
        timerSpan.textContent = "00:0" + Math.floor(globalTimer / 60) + ":" + Math.floor((globalTimer % 60)/10) + (globalTimer % 10);
        
        // Game Ends when timer runs out
        if (globalTimer <=0) {
            clearInterval(timeInterval);
            timerSpan.textContent = "00:00:00";
            quizChoice.innerHTML = "";

            // Enter High Screen redundant check (See NextSet(); )
            if (questionStart <= indexOfQuestions) {
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

// --- ALL Listeners -------------------------------------------------
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

    // Checks if answer is corrent or wrong
    if (currentElement.textContent == quizes[questionStart].answer) {
        // Correct Answer
        currentScore += 100;
        globalTimer += 5;
    } else {
        // Wrong Answer
        globalTimer -= 15;
    };
    // Calling function 'NextSet()' in the choice listener is essentially the game loop
    NextSet();
});

// Store Highscores
document.querySelector(".quizArea").addEventListener("submit", function() {
    // I want the webpage to refresh after submission
    // event.preventDefault();

    // Store the current score of this play through in am object
    var initials = document.querySelector(".quizArea").lastChild.firstChild.nextSibling.value;
    var finalScores = {
        names: initials,
        score: currentScore
    };

    // Get the stored scores and parse it
    var storedScores = JSON.parse(localStorage.getItem("allScores"));

    // Check if saved scores exist or not
    if(storedScores !== null) {

        // Push the new object into the array of score objects
        storedScores.push(finalScores);

        // Stringify and store all saved scores
        localStorage.setItem("allScores", JSON.stringify(storedScores));

    } else {

        // Push the new object into an empty array
        var stringComplete2 = [];
        stringComplete2.push(finalScores);

        // Stringify and store all saved scores
        localStorage.setItem("allScores", JSON.stringify(stringComplete2));
    };
});

// TEST

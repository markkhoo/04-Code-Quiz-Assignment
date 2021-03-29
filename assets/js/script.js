// Pointers
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

// functions
function renderQuestion(content) {
    document.getElementById("quizQuestion").innerHTML = content; 
}

function renderListItems(content) {
    var li = document.createElement("li");
    li.textContent = content;

    var button = document.createElement("button");
    button.textContent = "<<<";

    li.appendChild(button);
    quizChoice.appendChild(li);
};

// TESTS
renderQuestion("Test Question");
renderListItems("TEST1");
renderListItems("TEST2");
renderListItems("TEST3");
renderListItems("TEST4");
console.log("test at end");
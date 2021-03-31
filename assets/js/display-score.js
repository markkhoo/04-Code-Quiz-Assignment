// Display Score
function displayScore() {

    // Get the stored scores and parse it
    var storedScores = JSON.parse(localStorage.getItem("allScores"));

    // Check if saved scores exist or not
    if(storedScores !== null) {
        for (var i = 0; i < storedScores.length; i++) {

            // Store initials and score in variables
            var names = storedScores[i].names;
            var score = storedScores[i].score;

            // Create Score Elements
            var p = document.createElement("p");
            p.textContent = names + ": " + score;
            document.querySelector(".quizArea").appendChild(p);
        };
    } else {

        // Display "No-Players-Yet"
        var p = document.createElement("p");
        p.textContent = "No Players Yet!";
        document.querySelector(".quizArea").appendChild(p);
    };
    return;
};


displayScore();
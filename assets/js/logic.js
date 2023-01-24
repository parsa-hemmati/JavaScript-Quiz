// creates initial variables
let currentQuestion = 0;
let score = 0;
let timer = 60;

document.getElementById("start").addEventListener("click", function () {
    document.getElementById("start").style.display = "none";
    document.getElementById("questions").classList.remove("hide")
    displayQuestion(currentQuestion);
    // startTimer();
})

function displayQuestion(currentQuestion) {
    let question = questions[currentQuestion].question;
    let answers = questions[currentQuestion].answers;

    document.getElementById("question-title").innerHTML = question;

    let answerButtons = "";
    for (let key in answers) {
        answerButtons += '<button class="choice">' + answers[key] + '</button>';
    }
    document.getElementById("choices").innerHTML = answerButtons;
}

document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("choice")) {
        if (event.target.innerHTML === questions[currentQuestion].correctAnswer) {
            console.log("Correct answer!")
            score++;
        };
        currentQuestion++;
        if (currentQuestion < questions.length - 1) {
            displayQuestion(currentQuestion)
        } else {
            endQuiz()
        }
    }
});

function endQuiz() {
    document.getElementById("questions").classList.add("hide")
    document.getElementById("end-screen").classList.remove("hide")
    document.getElementById("score").innerHTML = "Your score: " + score;
}

document.getElementById("submit").addEventListener("click", function () {
    let initials = document.getElementById("initials").value;
    localStorage.setItem(initials, score);
    console.log("Saved to local storage!")
})
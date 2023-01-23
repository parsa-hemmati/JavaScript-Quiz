// creates initial variables
let currentQuestion = 0;
let score = 0;
let timer = 60;

document.getElementById("start").addEventListener("click", function () {
    document.getElementById("start").style.display = "none";
    document.getElementById("questions").classList.remove("hide")
    displayQuestion();
    // startTimer();
})

function displayQuestion() {
    if (currentQuestion < questions.length || timer > 0) {
        let question = questions[currentQuestion].question;
        let answers = questions[currentQuestion].answers;

        document.getElementById("question-title").innerHTML = question;

        let answerButtons = "";
        for (let key in answers) {
            answerButtons += '<button class="choice">' + answers[key] + '</button>';
        }
        document.getElementById("choices").innerHTML = answerButtons;
    }
}

document.body.addEventListener("click", function(event) {
    if (event.target.classList.contains("choice")) {
        if (event.target.innerHTML === questions[currentQuestion].correctAnswer) {
            console.log("Correct answer!")
            score++;
        };
        currentQuestion++;
        displayQuestion();

    }
  });
  





// document.getElementsByClassName("choice").forEach(button => {
//     button.addEventListener("click", function() {
//       console.log("Button clicked!");
//     });
//   });
  

// function checkAnswer(answer) {
    // if (answer === questions[currentQuestion].correctAnswer) {
    //     score++;
    // };

//     if (currentQuestion === questions.length - 1 || timer === 0) {
//         endQuiz();
//     } else {
//         currentQuestion++;
//         displayQuestion();
//     }
// }
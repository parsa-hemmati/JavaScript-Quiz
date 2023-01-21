// creates initial variables
let currentQuestion = 0;
let score = 0;
let timer = 60;

document.getElementById("start").addEventListener("click", function () {
    document.getElementById("start").style.display = "none";
    displayQuestion();
    // startTimer();
})

function displayQuestion() {
    let question = questions[currentQuestion].question;
    let answers = questions[currentQuestion].answers;
    
    document.getElementById("question-title").innerHTML = question;
    
    let answerButtons = "";
    for (let key in answers) {
      answerButtons += "<button onclick='checkAnswer(" + key + ")'>" + answers[key] + "</button>";
    }
    document.getElementById("choices").innerHTML = answerButtons;
  }
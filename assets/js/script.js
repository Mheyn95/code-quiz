var quizStartHandler = function() {
    // change header
    var mainText = document.getElementById("main-text");
    mainText.innerHTML = "Question One";
    // remove description and start button
    var description = document.getElementById("description");
    description.style.display = "none";
    var startBtn = document.getElementById("start");
    startBtn.style.display = "none";
    // make options visable
    var answerBts = document.getElementById("answer-choices");
    answerBts.style.display = "flex";
}

var startEl = document.querySelector("main");
startEl.addEventListener("click", quizStartHandler);

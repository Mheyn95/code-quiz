var questions = [
    {
        question: 'What is NOT a common data type in JavaScript?',
        answers: [
            "a: Git",
            "b: Boolean",
            "c: Integer",
            "d: String"
        ],
        correctAnswer: "a: Git"
    },
    {
        question: 'What do we use to iterate in JaveScript?',
        answers: [
            "a: Booleans",
            "b: Arrays",
            "c: For Loops",
            "d: Varibales"
        ],
        correctAnswer: "c: For Loops"
    },
    {
        question: 'Arrays can be used to store _____? ',
        answers: [
            "a: Other Arrays",
            "b: Strings",
            "c: Objects",
            "d: All of the Above"
        ],
        correctAnswer: "d: All of the Above"
    },
    {
        question: 'What is a tool we can use to debug our code?',
        answers: [
            "a: Git",
            "b: If Statements",
            "c: console.log()",
            "d: While Loops"
    ],
        correctAnswer: "c: console.log()"
    },
    {
        question: 'How do we enclose a condition in an if statement?',
        answers: [
            "a: Curly Brackets",
            "b: Paranthesis",
            "c: Hyphens",
            "d: Quotation marks"
        ],
        correctAnswer: "b: Paranthesis"
    }
  ];
  
  var questionNum = 0;
  var startEl = document.querySelector(".btn");
  var introText = document.getElementById("intro-text");
  var description = document.getElementById("description");
  var startBtn = document.getElementById("start");
  var answerBtns = document.querySelector("#answer-choices");
  var questionText = document.querySelector("#question-text");
  var nextQuestion = document.getElementsByClassName("q-btn");
  var firstSection = document.getElementById("start-div");
  var timeCounter = document.getElementById("timerEl");
  var scoreContainer = document.getElementById("score-box");
  var playAgain = document.getElementById("play-again");
  var currentSet = [];
  var timeLeft = 60;

var quizStart = function() {

    //start timer


    var timeCounter = setInterval( function() {
        if (timeLeft < 1) {
          timerEl.textContent = "";
          clearInterval(timeCounter);
        }
        else {
          timerEl.textContent = "Time Remaing: " + timeLeft;
          timeLeft--;
        }
    }, 1000);


    firstSection.style.display = "none";

    // make options visable
    answerBtns.style.display = "flex";

    quiz();

}

var quiz = function() {


    if (questionNum < questions.length) {    
        // make question text appear
        questionText.textContent = questions[questionNum].question;

        // put answer set in answer buttons
        currentSet = questions[questionNum].answers;

        for (i = 0; i < currentSet.length; i++) {

            var answerBtn = document.createElement("button")
            answerBtn.className = "q-btn";
            answerBtn.textContent = currentSet[i]
            answerBtn.setAttribute("data-value", currentSet[i]);
            document.querySelector("#answer-choices").appendChild(answerBtn);
            
            answerBtn.onclick = answerCheck;

            
        }
        return
    }
   
    endQuiz();

}

var answerCheck = function() {
    // clear out old responses
    while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
    }
    
    // check if the data-value of the clicked button is equal to the correct answerfor that questions
    if (this.getAttribute("data-value") === questions[questionNum].correctAnswer) {
        console.log('You are correct!');
    }
    else {
        console.log("You are wrong, sorry!")
        timeLeft = timeLeft - 10;
    }

    // increment questionNum to go to next question
    questionNum++;

    // run quiz function again to capture resonse of next question
    quiz();
}

var endQuiz = function () {

    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
        }
    
    //store timer
    var userName = window.prompt("Great job! What is your name?");
    window.alert("You had a score of " + timeLeft);
    
    var newScore = {
        name: userName,
        score: timeLeft
    };

    var highScores = document.createElement("div");
    highScores.textContent = newScore.name + " - " + newScore.score;
    highScores.className = "scores";
    scoreContainer.appendChild(highScores);

    localStorage.setItem("scores", JSON.stringify(newScore));

    // clear timer
    clearInterval(timeCounter);

    highScore();

}

var highScore = function() {
    
    //clear page
    questionText.style.display = "none";
    timeCounter.style.display = "none";

    // show score grid
    scoreContainer.style.display = "flex"
    
    // get high scores
    var savedScores = localStorage.getItem(JSON.parse("scores"));

    // populate score box
    var highScore = document.createElement("div");
    highScore.textContent = savedScores.name + " - " + savedScores.score;
    highScore.className = "scores";
    scoreContainer.appendChild(highScore);

    playAgain.style.display = "block";

}


startEl.addEventListener("click", quizStart);


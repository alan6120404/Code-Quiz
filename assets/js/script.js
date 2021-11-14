var timerEl = document.getElementById('#timer');
var quizQuestionEl = document.querySelector("#quiz-title");
var quizBodyEl = document.querySelector("#quiz-body");
var pageContentEl = document.querySelector("#quiz");
//countdown timer
function countdown() {
    var timeLeft = 60;

    var timer = setInterval(function() {
        if (timeLeft >= 1) {
            timerEl.textContent = "Time: " + timeLeft;

            timeLeft--;
        }else{
            // stop the setInterval function
            // telling the user "quiz over"
            clearInterval(timer);
            console.log("quiz over");
        }
    }, 1000);
}

// jump to the quiz itself, make it repeats the function with different questions. 
//creating an array of quiz questions answers to pull from
var quizArr = [
    {
        questions: "lorem ljahdbf lkjhbasdf lkjbsdf?",
        answers: {
            a: "lkjsbf kjn",
            b: "dfj sodnf",
            c: "kuhdf lkml",
            d: "sdf sdfljn"
        }
    }
];
// a multiple choice question with 4 answers. 
var quizCreatorEl = function() {
    // change quiz title to quiz questions
    document.querySelector("#quiz-title").textContent = quizArr[questions];
    console.log(quizArr[questions]);
    // change quiz body to 4 buttons
    // 4 buttons should have 1 true response and 3 false response
    // feedback for the 2 type responses
    // store results into localStorage as scores
    // getItem localStorage to display as high scores. 
}





// time runs out, jump to quiz over screen with option to save your high score and view high score.


pageContentEl.addEventListener("click", quizCreatorEl);

countdown();
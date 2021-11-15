var timerEl = document.getElementById('timer');
var quizQuestionEl = document.querySelector("#quiz-title");
var quizBodyEl = document.querySelector("#quiz-body");
var pageContentEl = document.querySelector("#quiz");
var quizButtonEl = document.querySelector("#quiz-button");
var counterEl = 0;
//countdown timer
function countdown() {
    var timeLeft = 60;

    var timer = setInterval(function() {
        if (timeLeft >= 0) {
            timerEl.textContent = "Time: " + timeLeft;

            timeLeft--;
        }else{
            // stop the setInterval function
            // telling the user "quiz over"
            clearInterval(timer);
            console.log("quiz over");
        }
    }, 1000);

    // what happen when countdown reaches 0, end game.
    if (timeLeft === 0) {
        endGame();
    };
}

// jump to the quiz itself, make it repeats the function with different questions. 
//creating an array of quiz questions answers to pull from
var quizArr = [
    {
        questions: "Inside which HTML element do we put the JavaScript?",
        choices: {
            a: "<script>",
            b: "<scripting>",
            c: "<javascript>",
            d: "<js>"
        },
        answer: "a"
    },
    {
        questions: "Where is the best place to insert a JavaScript?",
        choices: {
            a: "<head>",
            b: "<meta>",
            c: "<link>",
            d: "<body>"
        },
        answer: "d"
    },
    {
        questions: "How do you create a function in JavaScript?",
        choices: {
            a: "function myfunction()",
            b: "function:myfunction()",
            c: "function = myfunction()",
            d: "function, myfunction()"
        },
        answer: "a"
    },
    {
        questions: 'How do you call a function named "myFunction"?',
        choices: {
            a: "call myFunction()",
            b: "call function()",
            c: "myFunction()",
            d: "function()"
        },
        answer: "c"
    },
    {
        questions: "How to write an IF statement in JavaScript?",
        choices: {
            a: "if i = 5",
            b: "if i == 5 then",
            c: "if i = 5 then",
            d: "if (i == 5)"
        },
        answer: "d"
    }
];


// a multiple choice question with 4 answers. 
var quizCreatorEl = function() {
    // change quiz title to quiz questions
    document.querySelector("#quiz-title").textContent = quizArr[counterEl].questions;

    // remove the <p> within the quiz body 
    var removePEl = document.querySelector(".quiz-text");
    removePEl.remove();

    // remove the quiz button to start the quiz 
    var removeQuizBtnEl = document.querySelector(".quiz-button");
    removeQuizBtnEl.remove();
    // change quiz body to 4 buttons
    buttonCreatorEl();
    // start countdown
    countdown();

}

var buttonCreatorEl = function() {
    //creating a container for the button
    var buttonContainerEl = document.createElement("div");
    buttonContainerEl.className = "four-buttons";

    quizBodyEl.appendChild(buttonContainerEl);

    // create container for button 1 & 2 and button 3 & 4
    var createContainer1El = document.createElement("div");
    createContainer1El.className = "button-container";
    buttonContainerEl.appendChild(createContainer1El);

    var createContainer2El = document.createElement("div");
    createContainer2El.className = "button-container";
    buttonContainerEl.appendChild(createContainer2El);
    // create button 1
    var createButton1El = document.createElement("button");
    createButton1El.textContent = quizArr[counterEl].choices.a;
    createButton1El.className = "multiple-btn btn";
    createButton1El.id = "a";

    createContainer1El.appendChild(createButton1El);

    // create button 2
    var createButton2El = document.createElement("button");
    createButton2El.textContent = quizArr[counterEl].choices.b;
    createButton2El.className = "multiple-btn btn";
    createButton2El.id = "b";

    createContainer1El.appendChild(createButton2El);

    // create button 3
    var createButton3El = document.createElement("button");
    createButton3El.textContent = quizArr[counterEl].choices.c;
    createButton3El.className = "multiple-btn btn";
    createButton3El.id = "c";

    createContainer2El.appendChild(createButton3El);

    // create button 4
    var createButton4El = document.createElement("button");
    createButton4El.textContent = quizArr[counterEl].choices.d;
    createButton4El.className = "multiple-btn btn";
    createButton4El.id = "d";

    createContainer2El.appendChild(createButton4El);

    buttonContainerEl.addEventListener("click", storeAnswerEl);

}

var storeAnswerEl = function(event) {
    //comparing the selection to answer
    if (quizArr[counterEl].answer == event.target.id) {
        //logging correct for the player to see

        var createCorrectEl = document.createElement("h1");
        createCorrectEl.textContent = "Correct!";
        createCorrectEl.className = "Correct";

        var buttonContainerEl = document.querySelector(".four-buttons");
        buttonContainerEl.appendChild(createCorrectEl);
        // call function to the next question

    } else if(quizArr[counterEl].answer != event.target.id) {

        var createIncorrectEl = document.createElement("h1");
        createIncorrectEl.textContent = "Incorrect!";
        createIncorrectEl.className = "Incorrect";

        var buttonContainerEl = document.querySelector(".four-buttons");
        buttonContainerEl.appendChild(createIncorrectEl);
        //call function to the next question

    };


};

    // button clicked to store data


    

    // button clicked to trigger next question


    // 4 buttons should have 1 true response and 3 false response
    // feedback for the 2 type responses
    // store results into localStorage as scores
    // getItem localStorage to display as high scores. 

// time runs out, jump to quiz over screen with option to save your high score and view high score.


quizButtonEl.addEventListener("click", quizCreatorEl);

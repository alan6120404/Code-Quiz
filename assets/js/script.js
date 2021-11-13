var timerEl = document.getElementById('timer');


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

// time runs out, jump to quiz over screen with option to save your high score and view high score.



countdown();
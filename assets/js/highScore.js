var saveScore = JSON.parse(localStorage.getItem("highscore"));
var tableBody = document.getElementById("highScore");
var mainBody = document.querySelector("#highscore-body");
var sortedScore = saveScore.sort((a,b) => parseInt(b.timeLeft) - parseInt(a.timeLeft));
var displayScore = function() {
    sortedScore.map((item , i) => {
        var tableRow = document.createElement("tr");
        tableRow.className = "table-row";
        var positionCell = document.createElement("td");
        positionCell.className = "table-body";
        var initialCell = document.createElement("td");
        initialCell.className = "table-body";
        var scoreCell = document.createElement("td");
        scoreCell.className = "table-body";
        positionCell.textContent = i + 1;
        initialCell.textContent = item.userName;
        scoreCell.textContent = item.timeLeft;
        tableRow.append(positionCell);
        tableRow.append(initialCell);
        tableRow.append(scoreCell);
        tableBody.append(tableRow);
    })
}

var clear = function () {
    var removeHighScoreEl = document.querySelector(".table-row")
    removeHighScoreEl.remove();
}

var reload = function() {
    location.href = "index.html";
}

    //create buttons to restart and clear high scores
var functionButton = function() {

    var btnContainerEl = document.createElement("div");
    mainBody.appendChild(btnContainerEl);
    var goBackBtnEl = document.createElement("button");
    goBackBtnEl.className = "goback-btn";
    goBackBtnEl.textContent = "Go back";


    btnContainerEl.appendChild(goBackBtnEl);


    var clearHSBtnEl = document.createElement("button");
    clearHSBtnEl.className = "clear-btn";
    clearHSBtnEl.textContent = "Clear high scores";

    btnContainerEl.appendChild(clearHSBtnEl);

    //function for the buttons
    // reloading the page when the button is clicked
    var BackBtnEl = document.querySelector(".goback-btn");
    BackBtnEl.addEventListener("click", reload);

    // clear the high score when the button is clicked
    var clearBtnEl = document.querySelector(".clear-btn");
    clearBtnEl.addEventListener("click", clear);
}



displayScore();
functionButton();
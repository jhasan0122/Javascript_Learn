
const choices = ["rock","paper","scissors"];
const  playerDisplay = document.getElementById("playerDisplay");
const  computerDisplay = document.getElementById("computerDisplay");
const  resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const compuerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === compuerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch (playerChoice){
            case "rock":
                result = (compuerChoice === "scissors") ? "YOU WIN!!" : "YOU LOSE";
                break
            case "paper":
                result = (compuerChoice === "rock") ? "YOU WIN!!" : "YOU LOSE";
                break
            case "scissors":
                result = (compuerChoice === "paper") ? "YOU WIN!!" : "YOU LOSE";
                break
        }
    }

    playerDisplay.textContent = `Player Choice: ${playerChoice}`;
    computerDisplay.textContent = `Computer Choice: ${compuerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");

    switch (result){
        case "YOU WIN!!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break
        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break
    }

}

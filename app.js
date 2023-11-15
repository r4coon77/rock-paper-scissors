// Rock Paper Scissors Game

// variables of each player choice, Rock, Paper or Scissors

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let rpsButtonClick = document.querySelectorAll('.RPS-button');
let pScore = document.querySelector('.playerScore > span')
let cScore = document.querySelector('.computerScore > span')
let results = document.querySelector('.results > p')
let results2ndP = document.querySelectorAll('.results > p')[1]
let isGameOver = false;


for (i of rpsButtonClick) {
    i.addEventListener('click', function(e) {
      e.stopPropagation()
      game(e.target.id)
    });
  }

// functions based on player & computer chocies

function getPlayerChoice(playerChoice) {
    if (playerChoice === "rock") {
        return rock;
    } else if (playerChoice === "paper") {
        return paper;
    } else
        return scissors;
}

function getComputerChoice(computerChoice) {
    if (computerChoice === 1) {
        return rock;
    } else if (computerChoice === 2) {
        return paper;
    } else
        return scissors;
}

// play round function which determines which choice wins

function playRound(playerSelection, computerSelection) {
    console.log("Player Selection", playerSelection);
    console.log("Computer Selection", computerSelection);
    switch (true) {
        case playerSelection === computerSelection:
        console.log("Draw!")
        results.textContent = `Draw! ${playerSelection} ties with ${computerSelection}`;
        break;
        case playerSelection === "Rock" && computerSelection === "Scissors":
        case playerSelection === "Scissors" && computerSelection === "Paper":
        case playerSelection === "Paper" && computerSelection === "Rock":
        results.textContent = `${playerSelection} beats ${computerSelection}`;
        playerScore++;
        break;
        default: 
        results.textContent = `${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

}

// intialising varibales to be used in game function includes player scores & round number

let playerScore = 0;
let computerScore = 0;
let round = 0;

function countRound() {
        round++
}

function appendScores () {
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}

function endRound () {
   if (computerScore > playerScore) {
        results.textContent = `Computer Wins! with ${computerScore} Points!`;
    } else if (playerScore > computerScore) {
        results.textContent = `Player Wins!! with ${playerScore} Points!"`;
    } else {results.textContent = "Its a Draw!";}

    results2ndP.textContent = `End Game `;
    isGameOver = true;
    createResetBTN()
    buttonDisable(rpsButtonClick)
}

function buttonDisable() {
    if (isGameOver === true) {
    for (i of rpsButtonClick) {
        i.disabled = true;
      } 
     }
     else
        for (i of rpsButtonClick) {
            i.disabled = false;
          }
}

// game function which plays 5 rounds of rock, paper, scissors and returns score

function game(choice) {
    if (round < 4) {
    let playerSelection = getPlayerChoice(choice);
    let computerSelection = getComputerChoice(Math.floor((Math.random() * 3) + 1));
    console.log("Player Selection", playerSelection);
    console.log("Computer Selection", computerSelection);
    playRound(playerSelection, computerSelection);
    appendScores(playerScore, computerScore);
    countRound();
    results2ndP.textContent = `Round ${round}`;
    } else if (round = 4) {
            let playerSelection = getPlayerChoice(choice);
            let computerSelection = getComputerChoice(Math.floor((Math.random() * 3) + 1));
            console.log("Player Selection", playerSelection);
            console.log("Computer Selection", computerSelection);
            playRound(playerSelection, computerSelection);
            appendScores(playerScore, computerScore);
            countRound();
            endRound();
            } 
}

function createResetBTN() {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    results2ndP.appendChild(resetBtn);
    resetBtn.addEventListener('click', function(e) {
        e.stopPropagation()
        reset()
      });
}

function reset() {
    isGameOver = false;
    playerScore = 0;
    computerScore = 0;
    round = 0;
    results.textContent = `Player Match Start!`;
    results2ndP.textContent = `Make A Slection`;
    appendScores();
    buttonDisable(rpsButtonClick)
}




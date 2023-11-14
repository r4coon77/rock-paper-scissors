// Rock Paper Scissors Game

// console.log("hello world")

// let randomNumber = Math.floor((Math.random() * 3) + 1);

// variables of each player choice, Rock, Paper or Scissors

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

let rpsButtonClick = document.querySelectorAll('.RPS-button');
let pScore = document.querySelector('.playerScore > span')
let cScore = document.querySelector('.computerScore > span')
let results = document.querySelector('.results > p')
let results2ndP = document.querySelectorAll('.results > p')[1]


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

// game function which plays 5 rounds of rock, paper, scissors and returns score

function appendScores () {
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}

function endRound () {
   if (computerScore > playerScore) {
        results.textContent = `Computer Wins! with ${computerScore} Points!`;
        console.log("Computer Wins! with ", computerScore, "Points!")
        results2ndP.textContent = `End Game`;
        createResetBTN()
    } else if (playerScore > computerScore) {
        results.textContent = `Player Wins!! with ${playerScore} Points!"`;
        console.log("Player Wins!! with ", playerScore, "Points!")
        results2ndP.textContent = `End Game `;
        createResetBTN()
    } else 
    results.textContent = "Its a Draw!";
    console.log("Its a Draw!")
}

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
}

// Calls game function 6 times (6th time gives winning game message)

// for(let i = 0; i <= 6; i++) {
//     game()
// }



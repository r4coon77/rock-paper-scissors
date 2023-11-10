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
        results.textContent = `Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`;
        results2ndP.textContent = `Draw!`;
        break;
        case playerSelection === "Rock" && computerSelection === "Scissors":
        case playerSelection === "Scissors" && computerSelection === "Paper":
        case playerSelection === "Paper" && computerSelection === "Rock":
        results.textContent = `Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`;
        results2ndP.textContent = `Player Wins!`;
        playerScore++;
        break;
        default: 
        results.textContent = `Player Selection: ${playerSelection} Computer Selection: ${computerSelection}`;
        results2ndP.textContent = `Computer Wins!`;
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


function game(choice) {
    if (round <= 5) {
    let playerSelection = getPlayerChoice(choice);
    let computerSelection = getComputerChoice(Math.floor((Math.random() * 3) + 1));
    console.log("Player Selection", playerSelection);
    console.log("Computer Selection", computerSelection);
    playRound(playerSelection, computerSelection)
    appendScores(playerScore, computerScore)
    countRound()
    } else
        if (computerScore > playerScore) {
            results.textContent = `Computer Wins! with ${computerScore} Points!`;
            console.log("Computer Wins! with ", computerScore, "Points!")
            results2ndP.textContent = "End Game";
        } else if (playerScore > computerScore) {
            results.textContent = `Player Wins!! with ${playerScore} Points!"`;
            console.log("Player Wins!! with ", playerScore, "Points!")
            results2ndP.textContent = "End Game";
        } else 
        results.textContent = "Its a Draw!";
        console.log("Its a Draw!")
}

// Calls game function 6 times (6th time gives winning game message)

// for(let i = 0; i <= 6; i++) {
//     game()
// }









// console.log(computerChoice)


// function game(playerSelection, computerSelection) {
//     if (playerSelection === "Rock" && computerSelection === "Scissors") {
//         console.log("Player Wins!");
//     } else if (playerSelection === "Rock" && computerSelection === "Paper") {
//         console.log("Computer Wins!")
//     } else if (playerSelection === "Rock" && computerSelection === "Rock") {
//         console.log("Draw")
//     } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
//         console.log("Player Wins!");
//     } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
//         console.log("Computer Wins!")
//     } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
//         console.log("Draw")
//     } else if (playerSelection === "Paper" && computerSelection === "Rock") {
//         console.log("Player Wins!");
//     } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
//         console.log("Computer Wins!")
//     } else if (playerSelection === "Paper" && computerSelection === "Paper") {
//         console.log("Draw")  
// }
// }

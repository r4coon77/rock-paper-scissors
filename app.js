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
    switch (true) {
        case playerSelection === computerSelection:
        console.log("Draw!")
        break;
        case playerSelection === "Rock" && computerSelection === "Scissors":
        case playerSelection === "Scissors" && computerSelection === "Paper":
        case playerSelection === "Paper" && computerSelection === "Rock":
        console.log("Player Wins!")
        playerScore++;
        break;
        default: 
        console.log("Computer Wins!")
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

function game(choice) {
    if (round <= 5) {
    let playerSelection = getPlayerChoice(choice);
    let computerSelection = getComputerChoice(Math.floor((Math.random() * 3) + 1));
    playRound(playerSelection, computerSelection)
    countRound()
    console.log("Player Selection", playerSelection);
    console.log("Computer Selection", computerSelection);
    console.log("Player Score:", playerScore)
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    console.log("Computer Score:", computerScore)
    } else
        if (computerScore > playerScore) {
            console.log("Computer Wins! with ", computerScore, "Points!")
        } else if (playerScore > computerScore) {
            console.log("Player Wins!! with ", playerScore, "Points!")
        } else 
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

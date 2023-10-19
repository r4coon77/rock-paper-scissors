// Rock Paper Scissors Game

// console.log("hello world")

// let randomNumber = Math.floor((Math.random() * 3) + 1);

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice(computerChoice) {
    if (computerChoice === 1) {
        return rock;
    } else if (computerChoice === 2) {
        return paper;
    } else
    return scissors;
}

let computerSelection = getComputerChoice(Math.floor((Math.random() * 3) + 1))





// console.log(computerChoice)


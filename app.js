// Rock Paper Scissors Game

// console.log("hello world")

// let randomNumber = Math.floor((Math.random() * 3) + 1);

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getPlayerChoice(playerChoice) {
    if (playerChoice === rock) {
        return rock;
    } else if (playerChoice === paper) {
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

function game(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Player Wins!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("Computer Wins!")
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("Draw")
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("Player Wins!");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Computer Wins!")
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("Draw")
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Player Wins!");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("Computer Wins!")
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("Draw")  
}
}

let playerSelection = getPlayerChoice(paper);
let computerSelection = getComputerChoice(Math.floor((Math.random() * 3) + 1));

game(playerSelection, computerSelection)







// console.log(computerChoice)


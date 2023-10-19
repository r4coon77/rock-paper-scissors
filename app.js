// Rock Paper Scissors Game

// console.log("hello world")

// let randomNumber = Math.floor((Math.random() * 3) + 1);

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice(computerChoice) {
    if (computerChoice === 1) {
        console.log(rock)
        return rock;
    } else if (computerChoice === 2) {
        console.log(paper)
        return paper;
    } else
        console.log(scissors)
    return scissors;
}

getComputerChoice(Math.floor((Math.random() * 3) + 1))



// console.log(computerChoice)


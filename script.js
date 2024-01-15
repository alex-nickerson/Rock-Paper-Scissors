function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }
    if (choice == 1) {
        return "paper";
    }
    if (choice == 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log("Tie!");
            return 0;
        }
        if (computerSelection == "paper") {
            console.log("Your lose! Paper beats Rock.");
            return 2;
        }
        if (computerSelection == "scissors") {
            console.log("You win! Rock beats Scissors.");
            return 1;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You win! Paper beats Rock.");
            return 1;
        }
        if (computerSelection == "paper") {
            console.log("Tie!");
            return 0;
        }
        if (computerSelection == "scissors") {
            console.log("You lose! Scissors beats Paper.");
            return 2;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log("You lose! Rock beats Scisssors!");
            return 2;
        }
        if (computerSelection == "paper") {
            console.log("You win! Scissors beats Paper.");
            return 1;
        }
        if (computerSelection == "scissors") {
            console.log("Tie!");
            return 0;
        }
    }
}

function game(choice) {
    const playerSelection = choice;
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection,computerSelection);
    if (result == 1) {
        document.querySelector('#playerScore').innerHTML = score + 1;
    }
    if (result == 2) {
        document.querySelector('#playerScore').innerHTML = pc_score + 1;
    }
    if (result == 0) {
    }
    console.log("Your score: " + score);
    console.log("Computer score:  " + pc_score);
}

let score = 0;
let pc_score = 0;

const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')

rockButton.addEventListener('click', function (e) {
    let choice = e.target.id;
    game(choice);
});

paperButton.addEventListener('click', function (e) {
    let choice = e.target.id;
    game(choice);
});

scissorsButton.addEventListener('click', function (e) {
    let choice = e.target.id;
    game(choice);
});
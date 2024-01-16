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
            document.querySelector('#message').innerHTML = "It was a Tie!";
            return 0;
        }
        if (computerSelection == "paper") {
            document.querySelector('#message').innerHTML = ("Your lose! Paper beats Rock.");
            return 2;
        }
        if (computerSelection == "scissors") {
            document.querySelector('#message').innerHTML = ("You win! Rock beats Scissors.");
            return 1;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            document.querySelector('#message').innerHTML = ("You win! Paper beats Rock.");
            return 1;
        }
        if (computerSelection == "paper") {
            document.querySelector('#message').innerHTML = "It was a Tie!";;
            return 0;
        }
        if (computerSelection == "scissors") {
            document.querySelector('#message').innerHTML = ("You lose! Scissors beats Paper.");
            return 2;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            document.querySelector('#message').innerHTML = ("You lose! Rock beats Scisssors!");
            return 2;
        }
        if (computerSelection == "paper") {
            document.querySelector('#message').innerHTML = ("You win! Scissors beats Paper.");
            return 1;
        }
        if (computerSelection == "scissors") {
            document.querySelector('#message').innerHTML = "It was a Tie!";;
            return 0;
        }
    }
}

function game(choice) {
    const playerSelection = choice;
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection,computerSelection);
    if (result == 1) {
        score = score + 1;
        document.querySelector('#playerScore').innerHTML = score;
    }
    if (result == 2) {
        pc_score = pc_score + 1;
        document.querySelector('#pcScore').innerHTML = pc_score;
    }
    if (result == 0) {
    }
    if (score == 5 || pc_score == 5) {
        const container = document.querySelector('#end');
        const playAgain = document.createElement('button');
        playAgain.classList.add('playAgain');
        playAgain.textContent = "Play Again";
        playAgain.addEventListener('click', function (e) {
            window.location.reload();
        });
        container.appendChild(playAgain);
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
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
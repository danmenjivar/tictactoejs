
// Function randomly returns rock, paper, or scissors
function computerPlay() {

    let playSelections = ["Rock", "Paper", "Scissors"];

    let computerSelection = playSelections[Math.floor(Math.random() * playSelections.length)];

    return computerSelection;

}
// Helper function capitalizes first letter and lowercases the rest of the string
function capitalize(str) {

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

}


function playRound(playerSelection) {

    // Transform input to lower case to avoid hiccups
    playerSelection = capitalize(playerSelection);
    let computerSelection = computerPlay();

    let winCondition = (playerSelection == "Rock" && computerSelection == "Scissors")
        || (playerSelection == "Paper" && computerSelection == "Rock")
        || (playerSelection == "Scissors" && computerSelection == "Paper");

    // check for a draw
    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
        return "It's a draw!";
    } else if (winCondition) { // check for win
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        console.log(`You Lost! ${playerSelection} loses to ${computerSelection}`);
        return `You Lost! ${playerSelection} loses to ${computerSelection}`;
    }
}


function game() {

    let playerTally = 0;
    let computerTally = 0;

    const results = document.querySelector("#results");

    const rockButton = document.querySelector("#rock-btn");
    rockButton.addEventListener('click', () => {
        results.textContent += playRound('rock') + "\n";
    });

    const paperButton = document.querySelector("#paper-btn");
    paperButton.addEventListener('click', () => results.textContent += playRound('paper') + "\n");

    const scissorsButton = document.querySelector("#scissors-btn");
    scissorsButton.addEventListener('click', () => results.textContent += playRound('scissors') + "\n");




    // do {



    // } while (playerTally < 5 || computerTally < 5);

}







game();


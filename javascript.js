function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    return "ROCK";
  }
  else if (random == 1) {
    return "PAPER";
  }
  else if (random == 2) {
    return "SCISSORS";
  }
  else {
    return "ERROR"
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "ERROR") {
    return "An unexpected problem has occurred";
  }
  else if (playerSelection.toUpperCase() === computerSelection)
    return "Draw! Try again.";
  else if (playerSelection.toUpperCase() === "ROCK") {
    if (computerSelection === "PAPER") {
      return "Paper beats Rock! You lose!";
    }
    else {
      return "Rock beats Scissors! You win!";
    }
  }
  else if (playerSelection.toUpperCase() === "PAPER") {
    if (computerSelection === "ROCK") {
      return "Rock beats Paper! You win!";
    }
    else {
      return "Scissors beats Paper! You lose!";
    }
  }
  else if (playerSelection.toUpperCase() === "SCISSORS") {
    if (computerSelection === "ROCK") {
      return "Rock beats Scissors! You lose!";
    }
    else {
      return "Scissors beats Paper! You win!";
    }
  }
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
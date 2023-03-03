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
  if (playerSelection.toUpperCase() === computerSelection)
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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?")
    const computerSelection = getComputerChoice();
    console.log(playerSelection + " vs " + computerSelection);
    if (playRound(playerSelection, computerSelection).includes("win")) {
      playerScore++;
    }
    else if (playRound(playerSelection, computerSelection).includes("lose")) {
      computerScore++;
    }
    else if (playRound(playerSelection, computerSelection).includes("Draw")) {
      i--;
    }
    else {
      return "An unexpected error has occurred";
    }
  }
  if (playerScore > computerScore) {
    return playerScore + " : " + computerScore + " You Win!";
  }
  else {
    return playerScore + " : " + computerScore + " You Lose!"
  }
}

console.log(game());
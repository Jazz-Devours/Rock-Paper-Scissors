function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    return "rock";
  }
  else if (random == 1) {
    return "paper";
  }
  else if (random == 2) {
    return "scissors";
  }
  else {
    return "error"
  }
}

function playRound() {
  const playerSelection = this.id;
  const computerSelection = getComputerChoice();
  if (playerSelection === computerSelection)
    return results.textContent = "Draw! Try again.";
    else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return results.textContent = "Paper beats Rock! You lose!";
    }
    else {
      return results.textContent = "Rock beats Scissors! You win!";
    }
  }
  else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return results.textContent = "Rock beats Paper! You win!";
    }
    else {
      return results.textContent = "Scissors beats Paper! You lose!";
    }
  }
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return results.textContent = "Rock beats Scissors! You lose!";
    }
    else {
      return results.textContent = "Scissors beats Paper! You win!";
    }
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', playRound)
});

const results = document.querySelector('#results');

/*function game() {
  let playerScore = 0;
  let computerScore = 0;
  //for (let i = 0; i < 5; i++) {
   console.log(playerSelection + " vs " + computerSelection);
    if (playRound(playerSelection, computerSelection).includes("win")) {
      playerScore++;
    }
    else if (playRound(playerSelection, computerSelection).includes("lose")) {
      computerScore++;
    }
    else if (playRound(playerSelection, computerSelection).includes("Draw")) {

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
}*/
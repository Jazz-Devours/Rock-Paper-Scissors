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
  if (playerScore == 5 || computerScore == 5) {
    playerScore = 0;
    computerScore = 0;
  }
  if (playerScore < 5 && computerScore < 5) {
    const playerSelection = this.id;
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection)
      results.textContent = "Draw! Try again.";
      else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        computerScore++;
        results.textContent = "Paper beats Rock! You lose!";
      }
      else {
        playerScore++;
        results.textContent = "Rock beats Scissors! You win!";
      }
    }
    else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        playerScore++;
        results.textContent = "Rock beats Paper! You win!";
      }
      else {
        computerScore++;
        results.textContent = "Scissors beats Paper! You lose!";
      }
    }
    else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        computerScore++;
        results.textContent = "Rock beats Scissors! You lose!";
      }
      else {
        playerScore++;
        results.textContent = "Scissors beats Paper! You win!";
      }
    }
    scoreboard.textContent = `Player: ${playerScore} vs. Computer: ${computerScore}`;
    if (playerScore == 5) {
      return results.textContent = `YOU WIN! ${playerScore} to ${computerScore}!!`
    }
    else if (computerScore == 5) {
      return results.textContent = `YOU LOSE! ${computerScore} to ${playerScore}!!`
    }
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', playRound);
});
const scoreboard = document.querySelector('#scoreboard');
let playerScore = 0;
let computerScore = 0;
scoreboard.textContent = `Player: ${playerScore} vs. Computer: ${computerScore}`;

const results = document.querySelector('#results');
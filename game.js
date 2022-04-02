let playerScore = 0;
let computerScore = 0;
const pointsToWin = 5;

const displayContainer = document.querySelector("#display-container");
const buttonContainer = document.querySelector("#button-container");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const display = document.querySelector("#display");

// Randomly generate a move selection for the computer.
function computerPlay() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)]
}

// Update the scoreboard and display after every round.
function updateScore(outcome, playerSelection, computerSelection) {
  const displayOutcomes = {
    rock: "Rock",
    paper: "Paper",
    scissors: "Scissors"
  }
  if (outcome === "tie") {
    display.textContent = `Round TIED. You both picked ${playerSelection}.`;
    return
  } else if (outcome === "win") {
    playerScoreDisplay.textContent = ++playerScore;
    if (playerScore === pointsToWin) {
      display.textContent = "Game Over. You WIN!";
      buttons.forEach(btn => btn.remove());
      buttonContainer.appendChild(resetButton);
    } else {
      display.textContent = `Round WON! ${displayOutcomes[playerSelection]} beats ${computerSelection}.`;
    }
    return;
  } else {
    computerScoreDisplay.textContent = ++computerScore;
    if (computerScore === pointsToWin) {
      display.textContent = `Game Over. You LOSE!`;
      buttons.forEach(btn => btn.remove());
      buttonContainer.appendChild(resetButton);
    } else {
      display.textContent = `Round LOST! ${displayOutcomes[playerSelection]} loses to ${computerSelection}.`
    }
    return;
  }
}

// Play a round. Determine who won, handle the result.
function round(playerSelection, computerSelection) {
  // Object to represent game rules in the format <property> beats <value>
  const winRules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
  }
  if (playerSelection === computerSelection) {
    const result = "tie";
    updateScore(result, playerSelection, computerSelection);
  } else if (winRules[playerSelection] === computerSelection) {
    const result = "win";
    updateScore(result, playerSelection, computerSelection);
  } else {
    const result = "lose";
    updateScore(result, playerSelection, computerSelection);
  }
}

// onClick function for each player selection button
function startRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  round(playerSelection, computerSelection);
}
const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.setAttribute("id", "rock");
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.setAttribute("id", "paper");
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.setAttribute("id", "scissors");
const buttons = [rockButton, paperButton, scissorsButton]
buttons.forEach(btn => {
  btn.addEventListener("click", startRound);
  buttonContainer.appendChild(btn);
});

// onClick function for the reset button to restart the game
function reset() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resetButton.remove();
  buttons.forEach(btn => buttonContainer.appendChild(btn));
}
const resetButton = document.createElement("button");
resetButton.setAttribute("id", "reset-button");
resetButton.textContent = "Play Again";
resetButton.addEventListener("click", reset);
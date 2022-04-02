// Randomly generate a move selection for the computer.
function computerPlay() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)]
}

// Update the scoreboard after every round.
function updateScore(outcome) {
  const playerScoreDisplay = document.querySelector("#player-score");
  const computerScoreDisplay = document.querySelector("#computer-score");
  let playerScore = Number(playerScoreDisplay.textContent);
  let computerScore = Number(computerScoreDisplay.textContent);
  if (outcome === "tie") {
    return
  } else if (outcome === "win") {
    playerScoreDisplay.textContent = ++playerScore;
  } else {
    computerScoreDisplay.textContent = ++computerScore;
  }
}
// Create a reset button to be rendered when the game is over
const resetButton = document.createElement("button");
resetButton.setAttribute("id", "reset-button");
resetButton.textContent = "Play Again";
// Create a reset function for the reset button
function reset() {
  document.querySelectorAll(".score").forEach(score => score.textContent = "0");
  document.querySelector("#reset-button").remove();
}
resetButton.addEventListener("click", reset);
// Determine who won a round, return the result
function round(playerSelection, computerSelection) {
  const playerCheckScore = Number(document.querySelector("#player-score").textContent) === 3;
  const computerCheckScore = Number(document.querySelector("#computer-score").textContent) === 3;

  if (playerCheckScore || computerCheckScore) {
    document.querySelector("#display").textContent = "Game Over.";
    document.querySelector("#display-container").appendChild(resetButton);
    return;
  }

  const heroGuess = playerSelection.toLowerCase();

  function displayResults(hero, computer, result) {
    const display = document.querySelector("#display");
    display.textContent = `${result} - You play: ${hero}, opponent plays: ${computer}`;
  }  
  // Object to represent game rules in the format <property> beats <value>
  const winRules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
  }
  
  if (heroGuess === computerSelection) {
    const result = "tie";
    displayResults(heroGuess, computerSelection, result);
    updateScore(result);
  } else if (winRules[heroGuess] === computerSelection) {
    const result = `win`;
    displayResults(heroGuess, computerSelection, result);
    updateScore(result);
  } else {
    const result = `lose`;
    displayResults(heroGuess, computerSelection, result);
    updateScore(result);
  }
}
function startRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  round(playerSelection, computerSelection);
}
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener("click", startRound));

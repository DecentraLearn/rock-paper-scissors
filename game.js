// Global variables to track the score
let playerScore = 0;
let computerScore = 0;
const pointsToWin = 5;

// DOM elements
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
  setSelectionDisplay(playerSelection, computerSelection);
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
async function startRound(e) {
  // Trigger button click animation
  this.classList.add('playing');
  // Disable button functionality while title animation is running
  buttons.forEach(btn => btn.removeEventListener("click", startRound));
  // Set the displays to round start defaults
  document.querySelector("#player-selection").textContent = "?";
  document.querySelector("#computer-selection").textContent = "?"; 
  document.querySelector("#display").textContent = "...";
  // Trigger the title animation and wait for it to finish
  await rockPaperScissors(document.querySelector("#title"));
  // Play a round
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  round(playerSelection, computerSelection);
  // Reactivate click functionality of selection buttons
  buttons.forEach(btn => btn.addEventListener("click", startRound));
}

// Define the selection buttons to be added and removed from dom
const rockButton = document.createElement("button");
rockButton.textContent = "🪨";
rockButton.setAttribute("id", "rock");
rockButton.setAttribute("class", "player-choice");
const paperButton = document.createElement("button");
paperButton.textContent = "📜";
paperButton.setAttribute("id", "paper");
paperButton.setAttribute("class", "player-choice");
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "✂️";
scissorsButton.setAttribute("id", "scissors");
scissorsButton.setAttribute("class", "player-choice");
// Clicking a selection button starts the round function and the click animation
const buttons = [rockButton, paperButton, scissorsButton]
buttons.forEach(btn => {
  btn.addEventListener("click", startRound);
  btn.addEventListener("transitionend", removeTransition);
  buttonContainer.appendChild(btn);
});

// Define the reset button
const resetButton = document.createElement("button");
resetButton.setAttribute("id", "reset-button");
resetButton.textContent = "Play Again";
resetButton.addEventListener("click", reset);
resetButton.addEventListener("transitionend", removeTransition);
// onClick function for the reset button to restart the game
function reset() {
  // Trigger click animation
  this.classList.add('playing');
  // Reset all the game elements back to the default
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  document.querySelector("#player-selection").textContent = "?";
  document.querySelector("#computer-selection").textContent = "?";
  document.querySelector("#title").textContent = "Rock, Paper, Scissors";
  display.textContent = "Make your move, human...";
  // Remove the reset button and rerender the selection buttons
  resetButton.remove();
  buttons.forEach(btn => {
    buttonContainer.appendChild(btn);
  });
}
// Function to remove the transition styling
function removeTransition(e) {
  this.classList.remove("playing");
}

// Function that changes the title display to run at the beginning of each round
async function rockPaperScissors(domElement) {
  // Define a promise that resolves every half second
  function setTextAfterTimeout(text) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(text);
      }, 500)
    });
  }
  // Call the promise function to cycle through the title animation
  domElement.textContent = "Rock...";
  domElement.textContent = await setTextAfterTimeout("Paper...");
  domElement.textContent = await setTextAfterTimeout("Scissors...");  
  domElement.textContent = await setTextAfterTimeout("Shoot!");
}

// Function that handles setting the selection display each round
function setSelectionDisplay(playerSelection, computerSelection) {
  const selectionImage = {
    rock: "🪨",
    scissors: "✂️",
    paper: "📜"
  }
  document.querySelector("#player-selection").textContent = selectionImage[playerSelection];
  document.querySelector("#computer-selection").textContent = selectionImage[computerSelection]; 
}
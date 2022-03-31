// Randomly generate a move selection for the computer.
function computerPlay() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)]
}
// Determine who won a round, return the result
function round(playerSelection, computerSelection) {
  const heroGuess = playerSelection.toLowerCase();

  function displayResults(hero, computer, result) {
    const display = document.querySelector("#display");
    display.textContent = `${result} - You play: ${hero}, opponent plays: ${computer}`
  }
  
  if (heroGuess === computerSelection) {
    const result = "tie";
    displayResults(heroGuess, computerSelection, result);
    updateScore(result);
  } else if (heroGuess === "rock") {
    if (computerSelection === "paper") {
      const result = `lose`;
      displayResults(heroGuess, computerSelection, result);
      updateScore(result);
    } else {
      const result = `win`;
      displayResults(heroGuess, computerSelection, result);
      updateScore(result);
    }
  } else if (heroGuess === "paper") {
    if (computerSelection === "scissors") {
      const result = `lose`;
      displayResults(heroGuess, computerSelection, result);
      updateScore(result);
    } else {
      const result = `win`;
      displayResults(heroGuess, computerSelection, result);
      updateScore(result);
    }
  } else {
    if (computerSelection === "rock") {
      const result = `lose`;
      displayResults(heroGuess, computerSelection, result);
      updateScore(result);
    } else {
      const result = `win`;
      displayResults(heroGuess, computerSelection, result);
      updateScore(result);
    }
  }
}
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
function startRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  round(playerSelection, computerSelection);
}
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener("click", startRound));



/*
// Defines a full game of rock, paper, scissors best of 5
function game() {
  // Initialize a scoreboard
  let playerScore = 0;
  let computerScore = 0;

  // Helper function to collect user input, update scoreboard, and console.log results
  function playRound() {
    const heroSelection = prompt("Make a selection: rock, paper, or scissors?");
    const computerSelection = computerPlay();
    const result = round(heroSelection, computerSelection);
    if (result === "tie") {
      console.log("It's a TIE. Play Again.");
      playRound()
    } else if (result === 'win') {
      playerScore++;
      console.log(`You Win! ${heroSelection} beats ${computerSelection}`);
    } else {
      computerScore++;
      console.log(`You Lose! ${computerSelection} beats ${heroSelection}`);
    }
  }

  // Iterate through up to five rounds.
  for (let i = 0; i < 5; i++) {
    // If either player has a score of 3, the game is declared over and ends the function
    if (playerScore >= 3 || computerScore >= 3) {
      console.log(`Game Over. Your Score: ${playerScore} Computer's Score: ${computerScore}`);
      return;
    } else { // If the game is not over, play another round and then console.log the current score
      playRound();
      console.log(`Your Score: ${playerScore} Computer's Score: ${computerScore}`);
    }
  }
}

// Play the game
game();
*/
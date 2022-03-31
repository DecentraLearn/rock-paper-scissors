// Randomly generate a move selection for the computer.
function computerPlay() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)]
}
// Determine who won a round, return the result
function round(playerSelection, computerSelection) {
  const heroGuess = playerSelection.toLowerCase();
  console.log(`You play: ${heroGuess}, opponent plays: ${computerSelection}`)
  if (heroGuess === computerSelection) {
    return "tie"
  } else if (heroGuess === "rock") {
    if (computerSelection === "paper") {
      return `lose`
    } else {
      return `win`
    }
  } else if (heroGuess === "paper") {
    if (computerSelection === "scissors") {
      return `lose`
    } else {
      return `win`
    }
  } else {
    if (computerSelection === "rock") {
      return `lose`
    } else {
      return `win`
    }
  }
}
function startRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  console.log(round(playerSelection, computerSelection));
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
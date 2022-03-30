// The computer will make a random selection of rock, paper, or scissors
// The user will input a selection of rock, paper, or scissors
// Game will determine which selection is the winner of the round
// Display the round winner in the console

// Game will track the number of rounds each player wins
// First player to three is declared the winner
// Display the winner and reset the game

const MOVES = ["rock", "paper", "scissors"]

function computerPlay() {
  return MOVES[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  const heroGuess = playerSelection.toLowerCase();
  console.log(`You play: ${heroGuess}, opponent plays: ${computerSelection}`)
  if (heroGuess === computerSelection) {
    return "It's a TIE! Play again."
  } else if (heroGuess === "rock") {
    if (computerSelection === "paper") {
      return `You Lose! ${computerSelection} beats ${heroGuess}.`
    } else {
      return `You Win! ${heroGuess} beats ${computerSelection}`
    }
  } else if (heroGuess === "paper") {
    if (computerSelection === "scissors") {
      return `You Lose! ${computerSelection} beats ${heroGuess}.`
    } else {
      return `You Win! ${heroGuess} beats ${computerSelection}`
    }
  } else {
    if (computerSelection === "rock") {
      return `You Lose! ${computerSelection} beats ${heroGuess}.`
    } else {
      return `You Win! ${heroGuess} beats ${computerSelection}`
    }
  }
}

//Tests for the playRound function
console.log(playRound("rock", "rock"));
console.log(playRound("rock", "paper"));
console.log(playRound("rock", "scissors"));

console.log(playRound("paper", "paper"));
console.log(playRound("paper", "rock"));
console.log(playRound("paper", "scissors"));

console.log(playRound("scissors", "scissors"));
console.log(playRound("scissors", "paper"));
console.log(playRound("scissors", "rock"));
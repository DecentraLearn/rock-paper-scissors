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

//Tests for the round function
console.log(round("rock", "rock"));
console.log(round("rock", "paper"));
console.log(round("rock", "scissors"));

console.log(round("paper", "paper"));
console.log(round("paper", "rock"));
console.log(round("paper", "scissors"));

console.log(round("scissors", "scissors"));
console.log(round("scissors", "paper"));
console.log(round("scissors", "rock"));

function game() {
  let playerScore = 0;
  let computerScore = 0;

  function playRound() {
    const heroSelection = prompt("Make a selection: rock, paper, or scissors?");
    const computerSelection = computerPlay();
    const result = round(heroSelection, computerSelection);
    if (result === "tie") {
      console.log("It's a TIE. Play Again.");
    } else if (result === 'win') {
      console.log(`You Win! ${heroSelection} beats ${computerSelection}`);
    } else {
      console.log(`You Lose! ${computerSelection} beats ${heroSelection}`);
    }
  }
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

game();
console.log("********************");
console.log("********************");
console.log("********************");

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getPlayerChoice() {
  let playerChoice;
  return prompt("Please choose between Rock, Paper or Scissors").toLowerCase();
}

function PlayRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerPoints += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerPoints += 1;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  const result = PlayRound(getPlayerChoice(), getComputerChoice());
  console.log(result);
  console.log(`Player: ${playerPoints}, Computer: ${computerPoints}`);
}
game();
game();
game();
game();
game();
console.log("********************");
if (playerPoints > computerPoints) {
  console.log("Congratulations you won against AI!");
} else if (playerPoints < computerPoints) {
  console.log("You lost. Terminator is coming to get you!");
} else {
  ("Final result is a tie!");
}

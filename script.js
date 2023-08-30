const container = document.querySelector(".main");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
const buttons = document.querySelectorAll("button");

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

buttons.forEach((button) => {
  button.addEventListener("click", () => {});
});

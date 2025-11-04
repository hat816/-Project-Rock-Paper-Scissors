console.log("Hello, World");

//Elección del ordenador

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3 + 1);
   switch (random) {
     case 1:
      return "rock";
     case 2:
      return "paper";
     case 3:
      return "scissors"
 }
}

// console.log(random);

// Ahora, tanto el valor mínimo como el máximo están incluidos en el resultado.

//Elección del humano
let choice = prompt("Introduce rock, paper or scissors");
choice = choice.toLowerCase();
function getHumanChoice() {
   return choice;
}

// console.log(getHumanChoice());

//Juego a una ronda
let humanScore = 0;
let computerScore = 0;

function playGame () {
   

function playRound(humanSelection, computerSelection) {
   
   if (humanSelection == computerSelection) {
      return `¡EMPATE!`;
   } else if ((humanSelection == "rock" && computerSelection == "scissors") ||
      (humanSelection == "paper" && computerSelection == "rock") ||
      (humanSelection == "scissors" && computerSelection == "paper")) {
      humanScore++;
      return `You win! ${humanSelection} beats ${computerSelection}`;
   } else if ((humanSelection == "scissors" && computerSelection == "rock") || (humanSelection == "rock" && computerSelection == "paper") || (humanSelection == "paper" && computerSelection == "scissors")) {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${humanSelection}`;
   }

}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
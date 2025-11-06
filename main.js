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

// Ahora, tanto el valor mínimo como el máximo están incluidos en el resultado.

//Elección del humano
function getHumanChoice() {
   let choice = prompt("Introduce rock, paper or scissors");
   choice = choice.toLowerCase();
   return choice;
}

//Juego completo a 5 rondas

function playGame() {
   let humanScore = 0;
   let computerScore = 0;

   for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();

      console.log(playRound(humanSelection, computerSelection));
   }

   if (humanScore > computerScore) {
      return `Game Over! Human wins ${humanScore} - ${computerScore}`
      // humano gana
   } else if (computerScore > humanScore) {
      return `Game Over! Computer wins ${computerScore} - ${humanScore}`
      // computadora gana
   } else {
      return `Game Over! Empate ${humanScore} - ${computerScore}`
      // empate
   }

   //Juego a una ronda
   function playRound(humanSelection, computerSelection) {

      if (humanSelection == computerSelection) {
         return `¡EMPATE!`;
      } else if ((humanSelection == "rock" && computerSelection == "scissors") ||
         (humanSelection == "paper" && computerSelection == "rock") ||
         (humanSelection == "scissors" && computerSelection == "paper")) {
         humanScore++;
         return `You win! ${humanSelection} beats ${computerSelection}`;
      } else if ((humanSelection == "scissors" && computerSelection == "rock") || 
      (humanSelection == "rock" && computerSelection == "paper") || 
      (humanSelection == "paper" && computerSelection == "scissors")) {
         computerScore++;
         return `You Lose! ${computerSelection} beats ${humanSelection}`;
      }
   }
}

console.log(playGame());
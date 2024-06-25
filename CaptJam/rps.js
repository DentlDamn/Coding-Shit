/*
    Jab-hook-upper: rock, paper, scissors format
    Author: BoogDoesIt
    Version: 1.0
    Rules/Instructions: hook beats jab, jab beats uppercut, uppercut beats hook
    
*/

let playerScore = 0;
let cpuScore = 0;
let choices = ["jab", "hook", "upper"];
let randomPunch = choices[Math.floor(Math.random() * choices.length)];

game();
function game() {
  if (playerScore < 3 && cpuScore < 3) {
    console.log("Score Updated");
    console.log(cpuScore, playerScore);
    document.getElementById("score0").innerHTML = playerScore;
    document.getElementById("score1").innerHTML = cpuScore;
    playGame();
  } else {
    console.log("Game End");
    location.reload();
  }
}

playGame();
function playGame() {
  document.getElementById("jab").onclick = function () {
    let playerChoice = "jab";
    console.log(playerChoice + playerScore);
    console.log(randomPunch);
    winner(randomPunch, playerChoice);
  };
  document.getElementById("hook").onclick = function () {
    let playerChoice = "hook";
    console.log(playerChoice + playerScore);
    console.log(randomPunch);
    winner(randomPunch, playerChoice);
  };
  document.getElementById("upper").onclick = function () {
    let playerChoice = "upper";
    console.log(playerChoice + playerScore);
    console.log(randomPunch);
    winner(randomPunch, playerChoice);
  };
}

function winner(randomPunch, playerChoice) {
  if (randomPunch === "jab" && playerChoice === "hook") {
    playerScore++;
    console.log("One point to you!");
    /*document.getElementById("score0").innerHTML = playerScore;*/
    game();
  } else if (randomPunch === "jab" && playerChoice === "upper") {
    cpuScore++;
    console.log("One point to the CPU!");
    game();
  } else if (randomPunch === "jab" && playerChoice === "jab") {
    console.log("it's a tie!");
    game();
  } else if (randomPunch === "hook" && playerChoice === "jab") {
    cpuScore++;
    console.log("One point to the CPU!");
    game();
  } else if (randomPunch === "hook" && playerChoice === "upper") {
    playerScore++;
    console.log("One point to you!");
    game();
  } else if (randomPunch === "hook" && playerChoice === "hook") {
    console.log("It's a Tie!");
    game();
  } else if (randomPunch === "upper" && playerChoice === "hook") {
    cpuScore++;
    console.log("One point to the CPU!");
    game();
  } else if (randomPunch === "upper" && playerChoice === "jab") {
    playerScore++;
    console.log("One point ot you!");
    game();
  } else if (randomPunch === "upper" && playerChoice === "upper") {
    console.log("It's a Tie!");
    game();
  }
}

/*jab.document.addEventListener("onclick", playGame);
let you = document.getElementById("score0");
let cpu = document.getElementById("score1");*/

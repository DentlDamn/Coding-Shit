/*
    Jab-hook-upper: rock, paper, scissors format
    Author: BoogDoesIt
    Version: 1.0
    Rules/Instructions: hook beats jab, jab beats uppercut, uppercut beats hook
    
*/

var playerScore = 0;
var cpuScore = 0;

game();
function game() {
  if (playerScore || cpuScore < 3) {
    playGame();
  } else {
    refresh();
  }
}

function playGame() {
  var choices = ["jab", "hook", "upper"];
  let randomPunch = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById("jab").onclick = function () {
    var playerChoice = "jab";
    console.log(playerChoice + playerScore);
    console.log(randomPunch);
  };
  document.getElementById("hook").onclick = function () {
    var playerChoice = "hook";
    console.log(playerChoice + playerScore);
    console.log(randomPunch);
  };
  document.getElementById("upper").onclick = function () {
    var playerChoice = "upper";
    console.log(playerChoice + playerScore);
    console.log(randomPunch);
  };
  winner(randomPunch, playerChoice);
}
playGame();

function winner(randomPunch, playerChoice) {
  if (randomPunch === "jab" && playerChoice === "hook") {
    playerScore++;
    console.log("One point to you!");
  } else if (randomPunch === "jab" && playerChoice === "upper") {
    cpuScore++;
    console.log("One point to the CPU!");
  } else if (randomPunch === "jab" && playerChoice === "jab") {
    console.log("It's a Tie!");
  } else if (randomPunch === "hook" && playerChoice === "jab") {
    cpuScore++;
    console.log("One point to the CPU!");
  } else if (randomPunch === "hook" && playerChoice === "upper") {
    playerScore++;
    console.log("One point to you!");
  } else if (randomPunch === "hook" && playerChoice === "hook") {
    console.log("It's a Tie!");
  } else if (randomPunch === "upper" && playerChoice === "hook") {
    cpuScore++;
    console.log("One point to the CPU!");
  } else if (randomPunch === "upper" && playerChoice === "jab") {
    playerScore++;
    console.log("One point ot you!");
  } else if (randomPunch === "upper" && playerChoice === "upper") {
    console.log("It's a Tie!");
  }
  winner(randomPunch, playerChoice);
}
/*function winner(randomPunch, playerChoice) {
  if (randomPunch === "jab" && playerChoice === "hook") {
    playerScore++;
  } else if (randomPunch === "jab" && playerChoice === "upper") {
    cpuScore++;
  } else if (randomPunch === "jab" && playerChoice === "jab") {
    console.log("It's a Tie!");
  } else if (randomPunch === "hook" && playerChoice === "jab") {
    cpuScore++;
  } else if (randomPunch === "hook" && playerChoice === "upper") {
    playerScore++;
  } else if (randomPunch === "hook" && playerChoice === "hook") {
    console.log("It's a Tie!");
  } else if (randomPunch === "upper" && playerChoice === "hook") {
    cpuScore++;
  } else if (randomPunch === "upper" && playerChoice === "jab") {
    playerScore++;
  } else if (randomPunch === "upper" && playerChoice === "upper") {
    console.log("It's a Tie!");
  }
}
winner();
/*jab.document.addEventListener("onclick", playGame);
let you = document.getElementById("score0");
let cpu = document.getElementById("score1");*/

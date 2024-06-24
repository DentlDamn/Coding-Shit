/*
    Jab-hook-upper: rock, paper, scissors format
    Author: BoogDoesIt
    Version: 1.0
    Rules/Instructions: hook beats jab, jab beats uppercut, uppercut beats hook
    
*/

function playGame() {
  /*let jab = document.getElementById("jab").innerHTML;
  let hook = document.getElementById("hook").innerHTML;
  let upper = document.getElementById("upper").innerHTML;*/
  var choices = ["jab", "hook", "upper"];
  let randomPunch = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById("jab").onclick = function () {
    let playerChoice = "jab";
    console.log(playerChoice);
  };
  document.getElementById("hook").onclick = function () {
    let playerChoice = "hook";
    console.log(playerChoice);
  };
  document.getElementById("upper").onclick = function () {
    let playerChoice = "upper";
    console.log(playerChoice);
  };
  winner(randomPunch, playerChoice);
}

function winner(randomPunch, playerChoice) {
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
  game();

function game() {
  let playerScore = 0;
  let cpuScore = 0;
  if (playerScore || cpuScore < 3) {
    playGame();
  } else {
    refresh();
  }
}
playGame();
function winner(randomPunch, playerChoice) {
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
let cpu = document.getElementById("score1");

var choices = ["jab", "hook", "upper"];
let randomPunch = choices[Math.floor(Math.random() * choices.length)];
playGame();*/

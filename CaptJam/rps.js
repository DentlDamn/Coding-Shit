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

function game() {
  if (playerScore < 3 && cpuScore < 3) {
    document.getElementById("score0").innerHTML = playerScore;
    document.getElementById("score1").innerHTML = cpuScore;
    playGame();
  } else if (playerScore === 3) {
    alert("YOU WON!!");
    location.reload();
  } else if (cpuScore === 3) {
    alert("COMPUTER WINS!!");
    location.reload();
  }
}

playGame();
function playGame() {
  document.getElementById("jab").onclick = function () {
    let playerChoice = "jab";
    let randomPunch = choices[Math.floor(Math.random() * choices.length)];
    winner(randomPunch, playerChoice);
  };
  document.getElementById("hook").onclick = function () {
    let playerChoice = "hook";
    let randomPunch = choices[Math.floor(Math.random() * choices.length)];
    winner(randomPunch, playerChoice);
  };
  document.getElementById("upper").onclick = function () {
    let playerChoice = "upper";
    let randomPunch = choices[Math.floor(Math.random() * choices.length)];
    winner(randomPunch, playerChoice);
  };
}

function winner(randomPunch, playerChoice) {
  if (randomPunch === "jab" && playerChoice === "hook") {
    playerScore++;
    alert("One point to you!");
  } else if (randomPunch === "jab" && playerChoice === "upper") {
    cpuScore++;
    alert("One point to the CPU!");
  } else if (randomPunch === "jab" && playerChoice === "jab") {
    alert("it's a tie!");
  } else if (randomPunch === "hook" && playerChoice === "jab") {
    cpuScore++;
    alert("One point to the CPU!");
  } else if (randomPunch === "hook" && playerChoice === "upper") {
    playerScore++;
    alert("One point to you!");
  } else if (randomPunch === "hook" && playerChoice === "hook") {
    alert("It's a Tie!");
  } else if (randomPunch === "upper" && playerChoice === "hook") {
    cpuScore++;
    alert("One point to the CPU!");
  } else if (randomPunch === "upper" && playerChoice === "jab") {
    playerScore++;
    alert("One point to you!");
  } else if (randomPunch === "upper" && playerChoice === "upper") {
    alert("It's a Tie!");
  }
  game();
}

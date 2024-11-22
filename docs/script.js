const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const roundWinner = document.querySelector("#winnerThisRound");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#aiScore");
const moves = document.querySelector("#moves");
const winner = document.querySelector("#whoWinner");
let aiScoreCount = 0,
  playerScoreCount = 0,
  movesLeft = 5;
var aiTurns = ["rock", "paper", "scissor"];
let playerTurn = "",
  aiTurn = "";

playGame();

function playGame() {
  rock.addEventListener("click", () => {
    playerTurn = "rock";
    aiTurn = getAiTurn(aiTurns);
    checkWinner(playerTurn, aiTurn);
  });

  paper.addEventListener("click", () => {
    playerTurn = "paper";
    aiTurn = getAiTurn(aiTurns);
    checkWinner(playerTurn, aiTurn);
  });

  scissor.addEventListener("click", () => {
    playerTurn = "scissor";
    aiTurn = getAiTurn(aiTurns);
    checkWinner(playerTurn, aiTurn);
  });
}

function checkWinner(playerTurn, aiTurn) {
  if (playerTurn == "paper" && aiTurn == "rock") {
    roundWinner.innerHTML = "Player Scored!!!";
    playerScoreCount++;
    movesLeft--;
  } else if (playerTurn == "scissor" && aiTurn == "paper") {
    roundWinner.innerHTML = "Player Scored!!!";
    playerScoreCount++;
    movesLeft--;
  } else if (playerTurn == "rock" && aiTurn == "scissor") {
    roundWinner.innerHTML = "Player Scored!!!";
    playerScoreCount++;
    movesLeft--;
  } else {
    roundWinner.innerHTML = "Computer Scored!!!";
    aiScoreCount++;
    movesLeft--;
  }
  updateScores(aiScoreCount, playerScoreCount, movesLeft);
}
function updateScores(aiScoreCount, playerScoreCount, movesLeft) {
  playerScore.innerHTML = playerScoreCount;
  computerScore.innerHTML = aiScoreCount;
  moves.innerHTML = movesLeft;

  if (aiScoreCount == 5 || playerScoreCount == 5 || movesLeft == 0) {
    declareWinner(aiScoreCount, playerScoreCount, movesLeft);
  }
}

function getAiTurn(aiTurns) {
  return aiTurns[Math.ceil(Math.random() * 3 - 1)];
}
function declareWinner(aiScoreCount, playerScoreCount, movesLeft) {
  if (aiScoreCount == 5 || aiScoreCount > playerScoreCount) {
    winner.innerHTML = "Computer wins!!!";
  } else if (playerScoreCount == 5 || playerScoreCount > aiScoreCount) {
    winner.innerHTML = "Player wins!!!";
  } else if (movesLeft == 5 && aiScoreCount == playerScoreCount) {
    winner.innerHTML = "Draw!!";
  }
}

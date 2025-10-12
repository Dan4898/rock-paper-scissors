const buttons = document.querySelectorAll("button");
const resultado = document.querySelector(".resultados");
const body = document.querySelector("body");

function computerPlay() {
  const plays = ["Scissors", "Rock", "Paper"];
  const random = Math.trunc(Math.random() * plays.length);
  return plays[random];
}

let humanPoints = 0;
let computerPoints = 0;
let roundsPlayed = 0;

function playRound(humanPlay, computerPlay) {
  if (humanPlay === computerPlay) {
    resultado.textContent = `${humanPlay} and ${computerPlay} - Draw!`;
  } else if (
    (humanPlay === "Rock" && computerPlay === "Scissors") ||
    (humanPlay === "Paper" && computerPlay === "Rock") ||
    (humanPlay === "Scissors" && computerPlay === "Paper")
  ) {
    humanPoints++;
    resultado.textContent = `${humanPlay} beats ${computerPlay}!`;
  } else {
    computerPoints++;
    resultado.textContent = `${computerPlay} beats ${humanPlay}!`;
  }

  roundsPlayed++;
  resultado.textContent += ` | Round ${roundsPlayed}/5`;
  resultado.textContent += ` | Computer: ${computerPoints} - You: ${humanPoints}`;

  if (roundsPlayed === 5) {
    endGame();
  }
}

function endGame() {
  const winner = document.createElement("h2");

  if (humanPoints > computerPoints) {
    winner.textContent = "Congratulations! You win!";
  } else if (humanPoints === computerPoints) {
    winner.textContent = "Draw";
  } else {
    winner.textContent = "Too bad! Computer wins!";
  }

  body.appendChild(winner);
  buttons.forEach((button) => (button.disabled = true));
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const pressedButton = buttons[i].getAttribute("class");
    playRound(pressedButton, computerPlay());
  });
}

let x = prompt("What is your name?");
if(!x){
  alert("Welcome Mr Anonymous. Good luck on the aim assist.")
} else{
  
alert("Hey! Welcome " + x + "! Good luck on the aim test!")

}


const container = document.getElementById("game-container");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const resetButton = document.getElementById("reset-button");
let score = 0;
let timeLeft = 15;
let timerStarted = false;
let timerInterval;

function createPixel() {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.left = Math.random() * 370 + 15 + "px";
  pixel.style.top = Math.random() * 370 + 15 + "px";
  pixel.addEventListener("click", handleClick);
  container.appendChild(pixel);
}

function handleClick() {
  score++;
  scoreElement.textContent = "Score: " + score;
  this.removeEventListener("click", handleClick);
  this.remove();

  if (!timerStarted) {
    timerStarted = true;
    timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = "Time left: " + timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Time's up! Your score: " + score);
        resetGame();
      }
    }, 1000);
  }

  createPixel();
}

function resetGame() {
  score = 0;
  timeLeft = 15;
  timerStarted = false;
  clearInterval(timerInterval);
  scoreElement.textContent = "Score: " + score;
  timerElement.textContent = "Time left: " + timeLeft;
  container.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    createPixel();
  }
}

resetButton.addEventListener("click", resetGame);

for (let i = 0; i < 3; i++) {
  createPixel();
}

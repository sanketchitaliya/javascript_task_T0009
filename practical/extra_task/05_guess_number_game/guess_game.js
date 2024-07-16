let submit = document.getElementById("submit-btn");
let restart = document.getElementById("restart");
let counter = document.getElementById("counter");
let hint = document.getElementById("hint");
let guessValue = document.getElementById("guessValue");
let randomValue = generateRandomValue();
let count = 0;
let won = false;
let val;

function generateRandomValue() {
  return Math.floor(Math.random() * 100) + 1;
}

submit.addEventListener("click", () => {
  if (guessValue.value.trim() === "") {
    alert("please enter number!");
  } else {
    val = guessValue.value;
    getHint(val);
    increaseCounter();
  }
});

function getHint(val) {
  if (val >= 1 && val <= 100) {
    if (val == randomValue) {
      hint.innerText = `Congratulations, you won in ${count + 1} attempts!`;
      won = true;
    } else if (randomValue>val) {
      hint.innerText = "TRY A GREATER  NUMBER!";
    } else if (randomValue<val) {
      hint.innerText = "TRY A SMALLER NUMBER!";
    } 
  } else {
    hint.innerText = "please enter value between 1 to 100";
  }
}

function increaseCounter() {
  if (count < 4) {
    count++;
    counter.innerText = count;
  } else {
    counter.innerText = "Guesses Finished";
    if (!won) {
      hint.innerText = `You lost, the ans was ${randomValue}`;
    }
  }
}

restart.addEventListener("click", () => {
  location.href = "guess_game.html";
});

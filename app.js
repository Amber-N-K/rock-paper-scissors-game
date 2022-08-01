//paper beats rock
//scissors beats paper
//rock beats scissors

let userCount = 0;
let compCount = 0;
let tieCount = 0;
let gameRound;
let playerSelection;
let computerSelection;
let score;

const userSelect = document.getElementById("user-selection");
const compSelect = document.getElementById("computer-selection");
const winSelect = document.getElementById("winner-selection");
const compWins = document.getElementById("computer-wins");
const userWins = document.getElementById("user-wins");
const buttons = document.querySelectorAll(".game-btn");
const result = document.getElementById("result");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    userSelect.textContent = `${playerSelection}`;
    computerSelection = getComputerChoice();
    const gameSelection = playRound(playerSelection, computerSelection);
    const gameRound = game();
  });
});

function getComputerChoice() {
  let computerArr = ["rock", "paper", "scissors"];
  computerSelection =
    computerArr[Math.floor(Math.random() * computerArr.length)];
  compSelect.textContent = `${computerSelection}`;
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    userCount++;
    winSelect.textContent = "You Win!";
    userWins.textContent = userCount;
    return score;
  } else if (playerSelection === computerSelection) {
    tieCount++;
    winSelect.textContent = `A Tie`;
    return score;
  } else {
    compCount++;
    winSelect.textContent = "Computer Wins!";
    compWins.textContent = compCount;
    return score;
  }
}

function game() {
  score = 5 - (compCount + userCount);
  let count = compCount + userCount;
  while (count <= 5) {
    if (score > 1) {
      displayAlert(`You have ${score} more games left`, "success");
      return score;
    } else if (score === 1) {
      displayAlert(`You have 1 more game left`, "danger");
      return score;
    } else if (score === 0) {
      //result.textContent = `Your win count is: ${userCount}. Computer win count is: ${compCount}`;
      if (userCount > compCount) {
        result.textContent = `Congratulations! You have won ${userCount} out of 5 games`;
      } else if (compCount > userCount) {
        result.textContent = `Sorry! The computer has won ${compCount} out of 5 games`;
      }
      mpLink.onclick();
    } else {
      setTimeout(reload, 2000);
    }
    count++;
  }
}

function reload() {
  location.reload();
}

// display alert
const alertDisplay = document.querySelector(".alert");

// display alert
function displayAlert(text, action) {
  alertDisplay.textContent = text;
  alertDisplay.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alertDisplay.textContent = "";
    alertDisplay.classList.remove(`alert-${action}`);
  }, 2000);
}

// Select modal
let mpopup = document.getElementById("mpopupBox");

// Select trigger link
let mpLink = document.getElementById("mpopupLink");

// Select close action element
let close = document.getElementsByClassName("close")[0];

// Open modal once the link is clicked
mpLink.onclick = function () {
  mpopup.style.display = "block";
};

// Close modal once close element is clicked
close.onclick = function () {
  mpopup.style.display = "none";
};

// Close modal when user clicks outside of the modal box
window.onclick = function (event) {
  if (event.target == mpopup) {
    mpopup.style.display = "none";
  }
};

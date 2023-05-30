const submitBtn = document.getElementById("submit");
let Message = document.getElementById("message");
const Break = document.querySelectorAll(".break");
const gameContainer = document.querySelector(".Game-container");
const Close = document.querySelector(".close");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let sum = 0;
let cards = [];
let message = "";

submitBtn.addEventListener("click", function (e) {
  let Name = document.querySelector(".input").value;

  if (Name == null || Name === "") {
    alert("Please enter a name");
    // Message.textContent = "Name can not be empty"
  } else {
    Message.textContent =
      "Hey, " +
      Name +
      " welcome to ባለሃገር this Platfaorm Aims To showcase well Known Ethiopian Icons.";
  }
  e.preventDefault;
});
Break.forEach((btn) => {
  btn.addEventListener("click", function () {
    gameContainer.style.display = "block";
  });
});
Close.addEventListener("click", function () {
  gameContainer.style.display = "none";
});
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13 + 1);
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber === 10) {
    return 15;
  }
  return randomNumber;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
  message = "you are out of the game, start a new ?";
}

function renderGame() {
  cardsEl.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "sum: " + sum;
  if (sum === 26) {
    message = "congratulation! you are now a patriot // miyaziya 26";
  } else if (sum === 23) {
    message = "congratulation! you are now the legend of adwa // yekatit 23";
  } else if (sum === 12) {
    message = "your sacrifice saved a lot!, Thanks a lot // yekatit 12";
    isAlive = false;
  }
  messageEl.textContent = message;
}

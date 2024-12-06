const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let found = 0;
let pairs = 8;

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    console.log(this.dataset.icon);
    return;
  }

  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.icon === secondCard.dataset.icon) {
    disableCards();
    found++;
    console.log("found: " + found);
    if (found === pairs) {
      setTimeout(() => {
        window.alert("Well done!");
      }, 1500);
    }
  } else {
    unFlip();
  }
}

function unFlip() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

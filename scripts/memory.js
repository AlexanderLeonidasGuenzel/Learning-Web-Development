const cards = document.querySelectorAll(".card");
let isFlipped = false;
let firstSide, secondSide;

cards.forEach((card) => {
  card.addEventListener("click", flip);
});

function flip() {
  this.classList.toggle("flip");

  if (!isFlipped) {
    isFlipped = true;
    secondSide = this;
    console.log({ isFlipped, secondSide });
  } else {
    isFlipped = false;
    firstSide = this;
    console.log({ isFlipped, firstSide });
  }
}

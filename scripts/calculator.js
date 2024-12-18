console.log("cal loaded");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => button.addEventListener("click", behaviour));
});

function behaviour() {
  if (this.classList.contains("number")) {
    display(this.innerHTML);
  } else if (this.classList.contains("clear")) {
    clear();
  } else if (this.classList.contains("stepBack")) {
    stepBack();
  }
}

function display(number) {
  console.log("click " + number);
  const displayElement = document.querySelector(".display");
  displayElement.value = displayElement.value + number;
}

function clear() {
  console.log("clear");
  const displayElement = document.querySelector(".display");
  displayElement.value = "";
}

function stepBack() {
  console.log("back");
  const displayElement = document.querySelector(".display");
  displayElement.value = displayElement.value.slice(0, -1);
}

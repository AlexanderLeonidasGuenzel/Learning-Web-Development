const displayElement = document.querySelector(".display");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => button.addEventListener("click", behaviour));
});

let number_1 = "";
let number_2 = "";
let calc = "";

function behaviour() {
  const maxLength = 14;
  const displayLength = displayElement.value.length;
  let element = this.innerHTML;

  if (this.classList.contains("digit")) {
    number_1 += element;
    displayElement.value = number_1;
    console.log("number_1: " + number_1);
    console.log("number_2: " + number_2);
  }

  if (this.classList.contains("clear")) {
    clear();
    return 0;
  }

  if (this.classList.contains("stepBack")) {
    stepBack();
    return 0;
  }

  if (this.classList.contains("operator")) {
    number_2 = number_1;
    number_1 = "";
    calc = element;
    displayElement.value = element;
  }
}

function sum(num1, num2) {
  num1 = Number.parseInt(num1);
  num2 = Number.parseInt(num2);
  return num1 + num2;
}

function clear() {
  displayElement.value = "";
  console.clear();
  reset();
}

function stepBack() {
  number_1 = displayElement.value.slice(0, -1);
  displayElement.value = number_1;
}

function clearDisplay() {
  displayElement.value = "";
}
function reset() {
  number_1 = "";
  number_2 = "";
  calc = "";
}

const displayElement = document.querySelector(".display");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => button.addEventListener("click", behaviour));
});

let number_1 = "";
let number_2 = "";
let stack = "";

function behaviour() {
  const maxLength = 14;

  if (this.classList.contains("clear")) {
    clear();
    return 0;
  }
  if (this.classList.contains("stepBack")) {
    stepBack();
    return 0;
  } else if (displayElement.value.length < maxLength) {
    if (this.classList.contains("digit")) {
      let digit = this.innerHTML;
      console.log(`Digit: ${digit}`);
      addToNumber(digit);
      displayNumber();
    } else if (this.classList.contains("point")) {
      let a = this.innerHTML;
      point(a);
    } else if (this.classList.contains("operator")) {
      let operator = this.innerHTML;
      clearDisplay();
      displayOperator(operator);
      if (operator === "+") {
        stack += sum();
      }

      if (operator === "=") {
        result();
      }
    }
  }
}

function result() {
  console.log("unknown result");
}

function operator() {}

function displayNumber() {
  displayElement.value = number_1;
  console.log(number_1);
}

function addToNumber(digit) {
  number_1 += digit;
}

function sum(num1, num2) {
  num1 = Number.parseInt(num1);
  num2 = Number.parseInt(num2);
  return num1 + num2;
}

function displayOperator(operator) {
  displayElement.value = operator;
  console.log(operator);
}

function clear() {
  displayElement.value = "";
  console.clear();
}

function stepBack() {
  displayElement.value = displayElement.value.slice(0, -1);
}

function clearDisplay() {
  displayElement.value = "";
}

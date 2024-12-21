console.log("cal loaded");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => button.addEventListener("click", behaviour));
});

let memory = 0;
let operator = "";

function behaviour() {
  if (this.classList.contains("number")) {
    showDigit(this.innerHTML);
  } else if (this.classList.contains("point")) {
    point(this.innerHTML);
  } else if (this.classList.contains("clear")) {
    clear();
  } else if (this.classList.contains("stepBack")) {
    stepBack();
  } else if (this.classList.contains("plus")) {
    showPlusSymbol();
    putIntoMemory();
  }
}

function putIntoMemory() {
  const displayElement = document.querySelector(".display");
  console.log(displayElement.value);
  const length = displayElement.value.length;
  const operator = displayElement.value.charAt(length - 1);
  console.log(operator);
  const numberValue = displayElement.value.slice(-1, 0);
  console.log(displayElement.value);
  if (numberValue.includes(".")) {
    console.log("float");
  } else {
    console.log("integer");
    memory = Number.parseInt(numberValue);
  }
}

function showDigit(number) {
  // console.log(Number.parseInt(number));
  const displayElement = document.querySelector(".display");
  const maxLength = 12;
  const lengthWhithoutWhiteSpaces = displayElement.value.replace(
    /\s+/g,
    ""
  ).length;

  if (lengthWhithoutWhiteSpaces < maxLength) {
    if (!number.includes("1")) {
      displayElement.value = displayElement.value + number;
    } else {
      displayElement.value = displayElement.value + " " + number;
    }
  }
  console.log("length " + displayElement.value.replace(/\s+/g, "").length);
}

function showPlusSymbol() {
  const displayElement = document.querySelector(".display");
  const textLength = displayElement.value.length;
  if (
    textLength &&
    !displayElement.value.charAt(textLength - 1).includes("+")
  ) {
    displayElement.value = displayElement.value + "+";
    console.log("plus");
  }
}

function clear() {
  console.log("clear");
  const displayElement = document.querySelector(".display");
  displayElement.value = "";
  console.clear();
}

function stepBack() {
  console.log("back");
  const displayElement = document.querySelector(".display");
  displayElement.value = displayElement.value.slice(0, -1);
  console.log("length " + displayElement.value.length);
}

function point(point) {
  console.log(".");
  const displayElement = document.querySelector(".display");
  const textLength = displayElement.value.length;
  if (!textLength) {
    displayElement.value = displayElement.value + "0" + point;
  } else if (!displayElement.value.includes(".")) {
    console.log("point");
    displayElement.value = displayElement.value + point;
    console.log("length " + displayElement.value.length);
  }
  console.log("length " + displayElement.value.length);
}

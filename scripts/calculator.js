const displayElement = document.querySelector(".display");
let number = "";
let operator = "";

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => button.addEventListener("click", behaviour));
});

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
      let a = this.innerHTML;
      clearDisplay();
      putIntoMemory(a);
      // showDigit(a);
      showNumber();
    } else if (this.classList.contains("point")) {
      let a = this.innerHTML;
      point(a);
    } else if (this.classList.contains("operator")) {
      let a = this.innerHTML;
      clearDisplay();
      showOperator(a);
    }
  }
}

// memory = memory + Number.parseInt(displayElement.value);
function clearDisplay() {
  displayElement.value = "";
}

function putIntoMemory(digit) {
  number = number + digit;
  console.log(number);
}

function showNumber() {
  displayElement.value = getFromMemory();
}

function getFromMemory() {
  return number;
}

// function showDigit(digit) {
//   displayElement.value = displayElement.value + digit;
// }

function showOperator(operator) {
  // const textLength = displayElement.value.length;
  displayElement.value = displayElement.value + operator;
  // if (
  //   textLength &&
  //   !displayElement.value.charAt(textLength - 1).includes("+")
  // ) {

  // }
}

function clear() {
  displayElement.value = "";
  number = "";
  console.clear();
}

function stepBack() {
  displayElement.value = displayElement.value.slice(0, -1);
}

// function point(point) {
//   const textLength = displayElement.value.length;

//   if (!textLength) {
//     displayElement.value = displayElement.value + "0" + point;
//   } else if (!displayElement.value.includes(".")) {
//     displayElement.value = displayElement.value + point;
//   }
// }

// const lengthWhithoutWhiteSpaces = displayElement.value.replace(
//   /\s+/g,
//   ""
// ).length;

// if (numberValue.includes(".")) {
//   memory = Number.parseFloat(numberValue);
// } else {
//   memory = Number.parseInt(numberValue);
// }

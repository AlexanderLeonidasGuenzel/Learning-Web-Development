console.log("cal loaded");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => button.addEventListener("click", behaviour));
});

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
  }
}

function showDigit(number) {
  // console.log(Number.parseInt(number));
  const displayElement = document.querySelector(".display");
  const maxLength = 17;
  const lengthWhithoutWhiteSpaces = displayElement.value.replace(
    /\s+/g,
    ""
  ).length;

  if (lengthWhithoutWhiteSpaces < maxLength) {
    if (!number.includes("1")) {
      if (!(displayElement.value.length === 0 && number === "0")) {
        displayElement.value = displayElement.value + number;
      }
    } else {
      displayElement.value = displayElement.value + " " + number;
    }
  }
  console.log("length " + displayElement.value.replace(/\s+/g, "").length);
}

function showPlusSymbol() {
  console.log("plus");
  const displayElement = document.querySelector(".display");
  const textLength = displayElement.value.length;
  if (
    textLength &&
    !displayElement.value.charAt(textLength - 1).includes("+")
  ) {
    console.log("+");
    displayElement.value = displayElement.value + "+";
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

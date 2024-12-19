console.log("cal loaded");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => button.addEventListener("click", behaviour));
});

function behaviour() {
  if (this.classList.contains("number")) {
    display(this.innerHTML);
  } else if (this.classList.contains("point")) {
    point(this.innerHTML);
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

function point(point) {
  console.log(".");
  const displayElement = document.querySelector(".display");
  const textLength = displayElement.value.length;
  if (textLength === 0) {
    displayElement.value = displayElement.value + "0" + point;
  } else if (!displayElement.value.includes(".")) {
    console.log("point");
    displayElement.value = displayElement.value + point;
  }
}

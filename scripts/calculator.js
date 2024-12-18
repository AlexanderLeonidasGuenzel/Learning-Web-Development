console.log("cal loaded");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => button.addEventListener("click", behaviour));
});

function behaviour() {
  console.log("Click!" + this.innerHTML);
  if (this.classList.contains("number")) {
    display(this.innerHTML);
  } else if (this.classList.contains("clear")) {
    clear();
  }
}

function display(number) {
  const displayElement = document.querySelector(".display");
  displayElement.value = displayElement.value + number;
}

function clear() {
  console.log("clear");
  const displayElement = document.querySelector(".display");
  displayElement.value = "";
}

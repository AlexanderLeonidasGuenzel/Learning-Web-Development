function slowScrollTo(targetSelector, duration = 1000) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  const startPosition = window.scrollY;
  const targetPosition = target.getBoundingClientRect().top + startPosition;
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    window.scrollTo(
      0,
      startPosition + (targetPosition - startPosition) * easeOutQuad(progress)
    );

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  requestAnimationFrame(scrollAnimation);
}
const colors = ["red", "yellow", "blue", "green", "orange"];
const person = "Charly Portmann";
const firstName = person.slice(0, person.indexOf(" "));
const lastName = person.slice(person.indexOf(" ") + 1, person.length);
console.log(firstName);
console.log(lastName);

window.onload = () => {
  setTimeout(() => {
    document.querySelector("#home")?.scrollIntoView({ behavior: "instant" });
  }, 0);
  const rN = Math.floor(Math.random() * colors.length);
  const devName = document.querySelectorAll(".developer-name");
  devName.forEach((e) => {
    let nameLetters = [];
    nameLetters[0] = document.createElement("span");
    nameLetters[0].textContent = firstName.charAt(0);
    nameLetters[0].classList.add(colors[rN]);

    nameLetters[1] = document.createElement("span");
    nameLetters[1].textContent = firstName.slice(1);
    nameLetters[1].classList.add("white");

    nameLetters[2] = document.createElement("span");
    nameLetters[2].textContent = " " + lastName.charAt(0);
    nameLetters[2].classList.add(colors[rN]);

    nameLetters[3] = document.createElement("span");
    nameLetters[3].textContent = lastName.slice(1);
    nameLetters[3].classList.add("white");

    e.innerHTML = "";

    for (let i = 0; i < nameLetters.length; i++) {
      e.appendChild(nameLetters[i]);
    }
  });
};

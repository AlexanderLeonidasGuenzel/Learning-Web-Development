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
const person = "Alexander Leonidas Günzel";
const firstName = person.slice(0, person.indexOf(" "));
const secondName = person.slice(
  person.indexOf(" ") + 1,
  person.lastIndexOf(" ")
);
const lastName = person.slice(person.lastIndexOf(" ") + 1, person.length);
console.clear();
console.log(firstName);
console.log(secondName);
console.log(lastName);

window.onload = () => {
  setTimeout(() => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "instant" });
  }, 0);

  const rN = Math.floor(Math.random() * colors.length);
  const devName = document.querySelectorAll(".developer-name");
  const webdev = "Web Development";
  const title = document.querySelector(".title");
  title.innerHTML = lastName + "\u00A0" + webdev;
  const header__h1 = document.querySelector(".header__h1");
  h1_span = document.createElement("span");
  h1_span.textContent = webdev;
  header__h1.classList.add(colors[rN]);
  header__h1.appendChild(h1_span);

  devName.forEach((e) => {
    e.classList.add(colors[rN]);
    let nameLetters = [];

    nameLetters[0] = document.createElement("span");
    nameLetters[0].textContent = firstName + "\u00A0";

    nameLetters[1] = document.createElement("span");
    nameLetters[1].textContent = secondName + "\u00A0";

    nameLetters[2] = document.createElement("span");
    nameLetters[2].textContent = lastName;

    for (let i = 0; i < nameLetters.length; i++) {
      e.appendChild(nameLetters[i]);
    }
  });
};

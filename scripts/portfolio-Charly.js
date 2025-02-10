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
    return t * (2 - t); // Langsamer am Ende
  }

  requestAnimationFrame(scrollAnimation);
}

window.onload = () => {
  setTimeout(() => {
    document.querySelector("#home")?.scrollIntoView({ behavior: "instant" });
  }, 0);
};

const colors = ["w", "x", "y", "z", "a"];
const persons = [
  "Sarah Weber",
  "Nico Fisher",
  "Anne Tiger",
  "Kim Wong",
  "Bianca Keen",
  "Thimo Zarvesk",
];

window.onload = () => {
  const rN = Math.floor(Math.random() * colors.length);
  const rP = Math.floor(Math.random() * persons.length);
  const all = document.querySelectorAll(".portfolio");
  all.forEach((e) => {
    e.innerHTML = persons[rP];
    e.classList.toggle(colors[rN]);
  });
};

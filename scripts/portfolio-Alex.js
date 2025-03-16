let websiteOwnerName;
const webdev = "Web Development";

window.onload = () => {
  // Page Refresh Scroll Into View
  setTimeout(() => {
    document.querySelector("#home")?.scrollIntoView({ behavior: "instant" });
  }, 0);

  websiteOwnerName = setWebsiteOwnerName("Alexander Leonidas Günzel");
  setTitle(websiteOwnerName, webdev);

  const header__h1 = document.querySelector(".header__h1");
  h1_span = document.createElement("span");
  h1_span.textContent = webdev;
  header__h1.classList.add(randomColor());
  header__h1.appendChild(h1_span);

  const devName = document.querySelectorAll(".developer-name");
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

// Scroll Animation
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

// Generate Color Function
const randomColor = () => {
  const colors = ["red", "yellow", "blue", "green", "orange"];
  const element = Math.floor(Math.random() * colors.length);
  return colors[element];
};

const setWebsiteOwnerName = (name) => {
  return name.split(" ");
};

// Create Webpage Title
const setTitle = (name, text) => {
  const title = document.querySelector(".title");
  const lastName = name.length - 1;
  title.innerHTML = `${name[lastName]}\u00A0${text}`;
};

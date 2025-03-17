let websiteOwnerName;
let actualColor;
const fullName = "Alexander Leonidas Günzel";
const webdev = "Web Development";

window.onload = () => {
  viewPosition();
  actualColor = randomColor();
  websiteOwnerName = getArrayOf(fullName);
  createWebsiteOwnerName();
  createTitle(websiteOwnerName, webdev);
  createHeaderLogo();
  createBtnColor();
};

// WebsiteOwnerName
const createWebsiteOwnerName = () => {
  const nameOccurrence = document.querySelectorAll(".websiteOwnerName");
  nameOccurrence.forEach((e) => {
    e.classList.add(actualColor);

    websiteOwnerName.forEach((i) => {
      const namePart = document.createElement("span");
      namePart.textContent = `${i}\u00A0`;
      e.appendChild(namePart);
    });
  });
};

// Page Refresh Scroll Into View
const viewPosition = () => {
  setTimeout(() => {
    document.querySelector("#home")?.scrollIntoView({ behavior: "instant" });
  }, 0);
};

// Random Color from fix collection
const randomColor = () => {
  const colors = ["red", "yellow", "blue", "green", "orange"];
  const element = Math.floor(Math.random() * colors.length);
  return colors[element];
};

// String to Array
const getArrayOf = (name) => {
  return name.split(" ");
};

// Create Webpage Title
const createTitle = (name, text) => {
  const title = document.querySelector(".title");
  const lastName = name.length - 1;
  title.innerHTML = `${name[lastName]}\u00A0${text}`;
};

// Create Header Logo
const createHeaderLogo = () => {
  const logo = document.querySelector(".logo");
  logoText = document.createElement("span");
  logoText.textContent = `${webdev}`;
  logo.classList.add(actualColor);
  logo.appendChild(logoText);
};

// Create Button Color
const createBtnColor = () => {
  const btn = document.querySelector("#btn-to-projects");
  btn.classList.add(actualColor);
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

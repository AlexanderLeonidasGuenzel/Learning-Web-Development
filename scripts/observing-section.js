document.addEventListener("DOMContentLoaded", () => {
  const colors = ["color-red", "color-blue", "color-green", "color-yellow"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const sections = document.querySelectorAll("main section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          console.log("Gerade sichtbare Section:", id);
          document.querySelectorAll("nav a").forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
            link.classList.add(randomColor);
          });
        }
      });
    },
    {
      root: null,
      threshold: 0.5,
    }
  );
  sections.forEach((section) => observer.observe(section));
});

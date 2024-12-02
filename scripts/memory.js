const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function (event) {
    console.log(`Die Karte mit der ID "${event.target.id}" wurde angeklickt.`);
  });
});

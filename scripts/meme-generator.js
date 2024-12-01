const canvas = document.getElementById("memeCanvas");
const ctx = canvas.getContext("2d");
const imageInput = document.getElementById("imageInput");
let uploadedImage = null;
const widthSlider = document.getElementById("widthSlider");
const heightSlider = document.getElementById("heightSlider");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const img = new Image();
    img.src = e.target.result;
    img.onload = () => {
      uploadedImage = img;
      drawImage();
    };
  };

  reader.readAsDataURL(file);
});

widthSlider.addEventListener("input", resizeCanvas);
heightSlider.addEventListener("input", resizeCanvas);
widthSlider.addEventListener("input", () => {
  canvasWidth = widthSlider.value;
  resizeCanvas();
});
heightSlider.addEventListener("input", () => {
  canvasHeight = heightSlider.value;
  resizeCanvas();
});

function drawImage() {
  if (uploadedImage) {
    // Clear canvas and set canvas dimensions to fit the image
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(uploadedImage, 0, 0, canvas.width, canvas.height);

    // Get text values
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;

    // Set text styles
    ctx.font = "40px Impact";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.textAlign = "center";

    // Draw top text
    ctx.fillText(topText, canvas.width / 2, 70);
    ctx.strokeText(topText, canvas.width / 2, 70);

    // Draw bottom text
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 50);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 50);
  }
}

function resizeCanvas() {
  canvasWidth = widthSlider.value;
  canvasHeight = heightSlider.value;

  canvas.width = canvasWidth; // Breite des Canvas aktualisieren
  canvas.height = canvasHeight; // Höhe des Canvas aktualisieren

  if (widthSlider.value <= 600 && heightSlider.value <= 500) {
    canvas.width = widthSlider.value;
    canvas.height = heightSlider.value;
    drawImage();
  } else {
    alert("No no!");
  }
}

function generateMeme() {
  drawImage();
}

function downloadMeme() {
  if (uploadedImage) {
    const link = document.createElement("a");
    link.download = "meme.png";
    link.href = canvas.toDataURL();
    link.click();
  } else {
    alert("No Way!");
  }
}

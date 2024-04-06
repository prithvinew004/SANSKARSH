// Select the clock element
const clock = document.getElementById("clockdiv");

// Select the image
const image = document.querySelector("img.animated-image.transition-image");

// Check if the image is present
if (image) {
  // If the image is present, display the clock
  clock.style.display = "block";
}

"use strict";

// Getting formated date from date string
let deadline = new Date("apr 07, 2024 08:00:00").getTime();

// Calling defined function at certain interval
let x = setInterval(function () {
  // Getting current date and time in required format
  let now = new Date().getTime();

  // Calculating difference
  let t = deadline - now;

  // Getting values of days,hours,minutes, seconds
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);

  // Show the output time
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  // Show overtime output
  if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIME UP";
    document.getElementById("day").innerHTML = "0";
    document.getElementById("hour").innerHTML = "0";
    document.getElementById("minute").innerHTML = "0";
    document.getElementById("second").innerHTML = "0";
  }
}, 1000);

// Select the clock element
const clock = document.getElementById("clockdiv");

// Select the image
const image = document.querySelector("img.animated-image.transition-image");

// Check if the image is present
if (image) {
  // If the image is present, display the clock
  clock.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  var imageGalleryContainer = document.getElementById("image-gallery");

  // Generate image URLs dynamically for the images from DSC_0000 to DSC_0030
  var imageUrls = [];
  for (var i = 0; i <= 30; i++) {
    var imageUrl = "DSC_" + pad(i, 4) + ".jpg"; // Pad with leading zeros
    imageUrls.push(imageUrl);
  }

  // Loop through the image URLs and create <img> elements
  var row;
  imageUrls.forEach(function (url, index) {
    // Create a new row for every 10th image
    if (index % 10 === 0) {
      row = document.createElement("div");
      row.classList.add("image-row");
      imageGalleryContainer.appendChild(row);
    }

    // Create and append the image to the current row
    var img = new Image();
    img.src = url;
    img.style.margin = "10px"; // Adding margin between images
    img.onerror = function () {
      // If the image fails to load, don't append it to the DOM
      console.error("Failed to load image:", url);
    };
    img.onload = function () {
      // If the image loads successfully, append it to the DOM
      row.appendChild(img);
    };
  });

  // Function to pad numbers with leading zeros
  function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }
});

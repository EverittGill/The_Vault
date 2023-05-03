const gif = document.getElementById("gif");
const duration = 7500; // duration in milliseconds (5 seconds)

// Initialize FreezeFrame on the GIF element
var gifStart = new Freezeframe(gif, {
  responsive: true,
});

// Start the animation when the page is loaded
window.addEventListener("load", function () {
  gifStart.start();
});

// Hide the GIF after the duration has elapsed
setTimeout(() => {
  gif.style.display = "none";
  gifStart.stop();
  document.location.replace("/homepage");
}, duration);

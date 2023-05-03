const gif = document.getElementById("gif");
const duration = 7500; // duration in milliseconds (5 seconds)

// Initialize FreezeFrame on the GIF element
var gifStart = new Freezeframe(gif, {
  trigger: "click",
  responsive: true,
});

// Show the GIF
gif.style.display = "block";

// Hide the GIF after the duration has elapsed
setTimeout(() => {
  gif.style.display = "none";
  gifStart.stop();
}, duration);


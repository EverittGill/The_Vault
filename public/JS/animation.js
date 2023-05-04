const gif = document.getElementById("gif");
const duration = 7250; // duration in milliseconds (5 seconds)

// Initialize FreezeFrame on the GIF element
var gifStart = new Freezeframe(gif, {
  responsive: true,
});

gifStart.start();


// Hide the GIF after the duration has elapsed
setTimeout(() => {
  gif.style.display = "none";
  gifStart.stop();
  document.location.replace("/homepage");
}, duration);

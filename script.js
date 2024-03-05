const progressDuration = 3000; // Duration in milliseconds for each card

const progressBarElements = document.querySelectorAll(".progress-bar");
const totalProgressBars = progressBarElements.length;
let currentProgress = 0;
let progress = 0;
let allComplete = false;

// Function to change the background color based on the card index
function changeCardBackgroundColor(cardIndex) {
  const redBox = document.querySelector(".red-box");
  if (cardIndex === 1) {
    redBox.style.backgroundColor = "#F95941";
  } else if (cardIndex === 2) {
    redBox.style.backgroundColor = "#FB8700";
  } else if (cardIndex === 3) {
    redBox.style.backgroundColor = "#9F8E00";
  }
}

function updateProgressBar() {
  const progressElement = progressBarElements[currentProgress];
  const currentWidth = parseFloat(progressElement.style.width) || 0;

  if (!allComplete) {
    if (currentWidth < 100) {
      const newWidth = (currentWidth + (100 / progressDuration) * 100).toFixed(
        2
      );
      progressElement.style.width = newWidth + "%";

      // Change the card background color based on the card index
      changeCardBackgroundColor(currentProgress + 1);
    }

    if (currentWidth >= 100) {
      currentProgress = (currentProgress + 1) % totalProgressBars;
      if (currentProgress === 0) {
        allComplete = true;
      }
    }
  } else {
    // If all progress bars have completed, reset them
    progressBarElements.forEach((progressElement) => {
      progressElement.style.width = "0%";
    });
    currentProgress = 0;
    allComplete = false;
  }
}

function startProgressBar() {
  setInterval(updateProgressBar, 100);
}

startProgressBar();

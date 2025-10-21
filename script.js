const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const bgMusic = document.getElementById("bgMusic");

// Function to move the "No" button randomly (supports both touch & mouse)
function moveNoButton() {
  const containerRect = questionContainer.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Move button on hover (desktop)
noBtn.addEventListener("mouseover", moveNoButton);

// Move button on touch (mobile)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // prevent accidental click
  moveNoButton();
});

// Yes button functionality (starts music here)
yesBtn.addEventListener("click", () => {
  // Start the background music
  if (bgMusic.paused) {
    bgMusic.play().catch((err) => console.log("Music blocked:", err));
  }

  // Hide question and show loader
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});

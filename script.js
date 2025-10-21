const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const bgMusic = document.getElementById("bgMusic");

// Start background music on first user interaction
document.body.addEventListener(
  "click",
  () => {
    if (bgMusic.paused) {
      bgMusic.play().catch((err) => console.log("Music autoplay blocked:", err));
    }
  },
  { once: true }
);

// Function to move the "No" button randomly (safe area within container)
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

// Move on hover (for PC)
noBtn.addEventListener("mouseover", moveNoButton);

// Move on touch (for phone)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // stop accidental click
  moveNoButton();
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
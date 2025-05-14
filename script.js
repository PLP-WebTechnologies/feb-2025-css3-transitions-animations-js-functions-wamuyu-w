const box = document.getElementById("box");
const animateBtn = document.getElementById("animate-btn");
const saveThemeBtn = document.getElementById("save-theme");
const body = document.body;

// Animate box on click
animateBtn.addEventListener("click", () => {
  box.classList.remove("animate"); // reset
  void box.offsetWidth; // reflow trick to restart animation
  box.classList.add("animate");
});

// Save preferred theme (light/dark) to localStorage
saveThemeBtn.addEventListener("click", () => {
  const currentTheme = body.style.backgroundColor === "black" ? "white" : "black";
  body.style.backgroundColor = currentTheme;
  localStorage.setItem("userTheme", currentTheme);
});

// Apply saved theme on load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("userTheme");
  if (savedTheme) {
    body.style.backgroundColor = savedTheme;
  }
});

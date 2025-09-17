// Part 2: Functions, Scope, Parameters, Return values

// Global variable
let globalCount = 0;

// Function with parameters + return value
function multiply(a, b) {
  return a * b;
}

// Local scope demo
function localScopeDemo() {
  let localMessage = "I exist only inside this function";
  console.log(localMessage);
}

// Part 3: Trigger animation
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

animateBtn.addEventListener("click", () => {
  // Reuse multiply function
  globalCount = multiply(globalCount, 2) || 1; // Double or start at 1
  console.log("Global count is now:", globalCount);

  // Add animation class
  animateBox.classList.add("bounce");

  // Remove class after animation ends (so it can trigger again)
  setTimeout(() => {
    animateBox.classList.remove("bounce");
  }, 1000);
});

// Run local scope demo
localScopeDemo();

// here we select the elements from the DOM
let boxColor = document.querySelector(".box-color");
let randomColor = document.querySelector(".random-color");

// Array of colors to choose from
let colors = [
  "red", "blue", "green",
  "yellow", "purple", "orange",
  "pink", "brown", "gray", "black"
];

const STORAGE_KEY = "selectedColor";

function applyColor(color) {
  if (boxColor) boxColor.style.background = color;
  if (document.body) document.body.style.background = color;
}

// Restore saved color on load
const savedColor = localStorage.getItem(STORAGE_KEY);
if (savedColor) applyColor(savedColor);

// Event listener for the button
if (randomColor) {
  randomColor.addEventListener("click", function () {
    // Generate a random index to select a color
    let randomIndex = Math.floor(Math.random() * colors.length);

    // select the color using the random index
    let color = colors[randomIndex];

    // Apply the color to the box and body
    applyColor(color);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, color);
  });
}
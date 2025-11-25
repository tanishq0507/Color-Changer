// here we select the elements from the DOM

let boxColor = document.querySelector(".box-color");
let randomColor = document.querySelector(".random-color");

// Array of colors to choose from
let colors = [
    "red", "blue", "green",
    "yellow", "purple", "orange",
    "pink", "brown", "gray", "black"
];

// Event listener for the button
randomColor.addEventListener("click", function () {
    // Generate a random index to select a color
    let randomIndex = Math.floor(Math.random() * colors.length);
    
    // select the color using the random index
    let color = colors[randomIndex];

    // Apply the color to the box
    boxColor.style.background = color;

    // Apply the color to the body
    document.body.style.background = color;
});
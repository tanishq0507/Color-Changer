let boxColor = document.querySelector(".box-color");
let randomColor = document.querySelector(".random-color");

let colors = [
    "red", "blue", "green",
    "yellow", "purple", "orange",
    "pink", "brown", "gray", "black"
];

randomColor.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * colors.length);
    
    let color = colors[randomIndex];

    // Apply the color to the box
    boxColor.style.background = color;

    document.body.style.background = color;
});
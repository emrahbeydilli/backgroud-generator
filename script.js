//Defining Variables
var colorCodes = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");

// Creating Common Function for DRY
function setGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    colorCodes.textContent = body.style.background + ";"
}
debugger
// Adding Event Listeners
window.addEventListener("load",setGradient);
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

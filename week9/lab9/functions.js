// function that prompts the user for their name and greets them
function greetUser() {
    let name = prompt("Please enter your name:");
    console.log("Hello, " + name);
}
greetUser();
// calls the greetUser function

// function that adds two numbers with prompted input
function addNumbers() {
    let a = prompt("Please enter the first number:");
    let b = prompt("Please enter the second number:");
    let total = parseInt(a) + parseInt(b);
    return total;
}

console.log("The total is: " + addNumbers());
// calls the addNumbers function

// function that calculates the area of a rectangle with prompted dimensions
function calculateArea() {
    let length = prompt("Please enter the length of the rectangle:");
    let width = prompt("Please enter the width of the rectangle:");
    let area = parseInt(length) * parseInt(width);
    return area;
}

console.log("The area is: " + calculateArea());
// calls the calculateArea function
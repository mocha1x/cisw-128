// no parameters, prints a welcome message
function helloWorld() {
    console.log("Hello, World and welcome to the multiplication table!");
}
// allows you to reuse greeting anywhere

// Multiplies two numbers
function multiply(a, b) {
    return a * b;
}
// returns answer instead of printing so code calls it and decides what to do with the result

// uses a for loop to print the table and calls multiply() to get the answers
function printTable(num, limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(num + " x " + i + " = " + multiply(num, i)); // calls multiply() to calculate the answer and print it
    }
}
// one function using another

// main function to start the program
function start() {
    helloWorld();

    let num = Number(prompt("Enter a number to multiply:"));
    let limit = Number(prompt("Enter a limit for the multiplication table:"));

    if (num > 0 && limit > 0) {
        printTable(num, limit);
    } else {
        console.log("Please enter numbers greater than 0.");
    }
}

// starts the program, runs everything listed in the function
// splitting the program into multiple functions makes it easier to read, fix, and understand
start();
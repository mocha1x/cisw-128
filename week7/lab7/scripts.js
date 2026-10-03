// 1. Counting loop
// while loop
let count=1;
while(count<=10){
    console.log("Count is: " + count);
    count++;
}
// for loop
for (let i = 1; i <= 10; i++) {
    console.log("Count is: " + i);
}

// User input loop
let userNum = Number(prompt("Enter a number:"));

for (let i = 1; i <= userNum; i++) {
    console.log("Number: " + i);
}

// Triangle pattern
let triangle = "";
for (let line = 1; line <= 7; line++) {
    triangle += "#";
    console.log(triangle);
}
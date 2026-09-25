// Grade calculator
let score = Number(prompt("What is your score? (0-100):"));

if (score>=90){
    console.log("You got an A.");
}

else if (score>=80){
    console.log("You got a B.");
}

else if (score>=70){
    console.log("You got a C.");
}

else if (score>=60){
    console.log("You got a D.");
}

else{
    console.log("You got an F.");
}

// Age check
let age = Number(prompt("How old are you?"));

if (age>=18){
    console.log("Adult");
}

else{
    console.log("Minor");
}

// Custom login check
let username = "admin"
let password = "admin"

userlogin = prompt("Username:")
userpass = prompt("Password:")

if (userlogin==="admin"){
    if (userpass==="admin"){
        console.log("Welcome back!")
    } else{
        console.log("Incorrect username or password")
    }
}
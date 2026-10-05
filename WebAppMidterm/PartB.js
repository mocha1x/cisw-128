// Sign in logic
// Create an account
let userEmail = prompt("Please enter your email address:");

// Keep asking until the email contains an @
while (userEmail && !userEmail.includes("@")) {
  userEmail = prompt("Please enter a valid email address:");
}

let userName = prompt("Please enter your username:");

if (userEmail && userName) {
  console.log("Account created successfully!");

  if (userEmail === "admin@example.com" && userName === "admin") {
    console.log("Welcome, admin!");
  }
} else {
  console.log("Please fill in all fields.");
}

// Send a message
let userMessage = prompt("Please enter your message:");

if (userMessage) {
  console.log("Message sent successfully!");
  console.log("Your message says: " + userMessage);
}

// A
// Finds element with ID "title"
const title = document.getElementById("title");
// Replaces the text inside <h1>
title.textContent = "Hello from JavaScript!";

// B
// Change color and font style dynamically
title.style.color = "blue";
title.style.fontFamily = "Arial, sans-serif";

// C
// Selects the first element with class "main"
const mainSection = document.querySelector(".main");
// Add a light gray background color
mainSection.style.backgroundColor = "#f0f0f0";

// D
// Selects all <p> elements in the document
const paragraphs = document.querySelectorAll("p");
// Loop through each paragraph and update text + color
paragraphs.forEach((p, i) => {
    p.textContent = `Paragraph ${i + 1} updated by JS!`;
    p.style.color = "green";
});

// E
// Select the button by ID
const toggleButton = document.getElementById("toggle");
// Wait for a click, then toggle a class on the <body>
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("highlight");
});

// F
// Create an array of link data
const resources = [
    { text: "CSI", href: "https://www.csi.edu" },
    { text: "MDN Web Docs", href: "https://developer.mozilla.org" },
    { text: "Eloquent JavaScript", href: "https://eloquentjavascript.net" }
];
// Select the <ul> where links will go
const list = document.getElementById("links");
// Clear existing link items (if any)
list.innerHTML = "";
// Loop through each resource and build list items
for (const item of resources) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.text;
    a.href = item.href;
    a.target = "_blank";
    li.appendChild(a);
    list.appendChild(li);
}

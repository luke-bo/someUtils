// Assignment: [Lab] Commit Some FunctionsNext Module
// This lab is going to guide you through a series of steps to create a git repository and save multiple commits.

// First Repo & First Commit
// Create a directory named someUtils for this lab.
// Go inside the directory and use git init to turn it into a git repository.
// Use git status. What is the current state of your repo?
// Create a .gitignore file. Go to gitignore.io and use the website to generate the contents your .gitignore file for node, macos and linux. Watch the video tutorial if you require guidance.
// Use git status again. How did it change from Step 3?
// Add the .gitignore and create your first commit.
// Use git status one more time. How did it change?
// Commit Some Code
// Create another file named utils.js.
// Inside, write the code for a function named product that takes 2 numbers and returns their product.
// Add and commit the changes you did to utils.js.
// Write the code for a function named divide that takes 2 numbers and returns the division of the first number by the second number.
// Add and commit the changes you did to utils.js.
// Write the code for a function named power that takes 2 numbers and returns the first number to the power of the second number.
// Add and commit the changes you did to utils.js.
// Use git log. How many commits do you have? How can see the code you wrote in your third commit?


function product(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function power(num1, num2) {
    return num1**num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}
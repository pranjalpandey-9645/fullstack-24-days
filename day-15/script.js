console.log("Day 15 script loaded."); //This is the official start of the day-15 script

let number = 42;
let product = 6 * 7;

if (number === product) {
    console.log("The number is equal to the product.");
} else {
    console.log("The number is not equal to the product.");
}


// Now we are going to learn the difference between '==' and '==='
let a = 5;
let b = '5';

if (a == b) {
    console.log("a is equal to b using '=='.");
}
/*if (a === b) {
    console.log("a is equal to b using '==='.");
    
    This is commented out to avoid confusion, but if uncommented, 
    it would show that '===' checks for both value and type equality.
    }*/
else {
    console.log("a is not equal to b using '=='.");
}

// Case sensensitivity of javascript
let greeting = "Hello, World!";
console.log(greeting); // Correct case

let Greeting = "Hi there!";
console.log(Greeting); // Different variable due to case sensitivity

let GREETING = "Good day!";
console.log(GREETING); // Another different variable due to case sensitivity
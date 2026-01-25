console.log("Day 17 module loaded");

function nice(Ultron) {
    console.log("Hello, " + Ultron + "!");
    console.log("Hello, " + Ultron + " you're nice!");
    console.log("Hello, " + Ultron + " have a great day!");
}
nice("Ultron");

function sum(a, b, c = 3) {
    console.log("Calculating the sum...");
    return a + b + c;
}

result = sum(1, 2, 8);
console.log("The result is: " + result);

function myfunc(theObject) {
    theObject.make = "Defender";
}

const mycar = {
    make: "Mercedes",
    model: "Safari",
    year: 2006
};

console.log("Before myfunc call: " + mycar.make);
myfunc(mycar);
console.log("After make call: " + mycar.model);
console.log("After model call: " + mycar.year);

const primValue = 5;

function changePrimitive(primValue) {
    console.log("Before change: " + primValue);
    primValue = 7;
    console.log("After change: " + primValue);
    console.log("Inside function, primValue is: " + primValue);
}

changePrimitive(primValue);
console.log("After changePrimitive call, primValue is: " + primValue);
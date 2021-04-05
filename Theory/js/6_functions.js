/*
Functions let you structure your code
*/

// Basic
function foo() {
    let a = 3 + 2;
}

foo();

// Parameters
function showMessage(message) {
    window.alert(message);
}

showMessage("Viel Spaß mit ECS162!");

// Return values
function pythagoras(a, b) {
    return Math.sqrt(a**2 + b**2);
}

pythagoras(Math.sin(1), Math.cos(1)); // Returns 1

// Save to variable
let myFunc = showMessage;
myFunc("Enjoy ECS162!");

let yourFunc = function(message) {
    console.log(message);
}

// Arrow Functions
let ourFunc = (message, times) => {
    while (times > 0) {
        console.log(message);
        times--;
    }
}
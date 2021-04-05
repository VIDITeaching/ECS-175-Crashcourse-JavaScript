/*
Control flow gives you basic tools like condition checking and loops
*/

// If
let a = 3;
if (a <= 3) {
    console.log("Variable 'a' is leq 3");
} else {
    console.log("Variable 'a' is gt 3");
}

if (a == '3') {
    console.log("Variable 'a' is '3'");
}

if (a === '3') {
    console.log("Variable 'a' is exactly '3'");
}

// Switch
switch (a) {
    case 1:
        console.log("Variable 'a' is 1");
        break;
    case 2:
        console.log("Variable 'a' is 2");
        break;
}

// For
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// For In
let listOfNumbers = [1,2,3,4,5];
for (let num in listOfNumbers) {
    console.log(num);
}

// While
while (a < 10) {
    console.log(a);
    a++;
}

// Continue, Break
let b = 0;
while (true) {

    if (b % 2 == 0) {
        continue;
    }

    console.log(`${b} is even.`);

    if (b > 1000) {
        break;
    }
}
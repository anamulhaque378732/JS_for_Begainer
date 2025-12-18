function myFunc(p1, p2) {
    return p1 * p2
};
//console.log(myFunc(4, 25));
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32)

};
//console.log(toCelsius(88));

// Accessing a function with incorrect parameters can return an incorrect answer:
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32)

};

//console.log(toCelsius()); //NaN
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32)

};

//console.log(toCelsius); // [function: toCelsius]

let myFunction = function (a, b) { return a * b };

function myFun() {
    let carName = "Volvo"; // local variable, and block scope
};


// parameter and arguments 

function greet(name, age) { //name and age are parameter
    return `Hello ${name}! You are ${age} years old.`;
}


greet("John", 21) //"john" and 21 ar arguments
















































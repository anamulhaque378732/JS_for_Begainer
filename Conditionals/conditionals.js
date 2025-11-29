// if conditional

// if (condition) {

// };

const hour = 16;
if (hour < 15) {
    console.log("Good boy");

};

const age = 28;
let text = "You can not drive";
if (age > 18) {
    text = "You can drive"
};

// nested if

let country = "USA";
if (country === "USA") {
    if (age > 18) {
        text = "You can drive";
    };
};


// && operator  || operator
if (country === "USA" && age > 18) {
    text = "You can drive"
};
const salary = 50000;

if (country === "USA" || salary > 45000) {
    text = "You can bye a car";
};


// else statement

// if(condition){
// } else {

// }
let greeting = "good boy";
if (hour < 18) {
    greeting = "good day"
} else {
    greeting = "good evening"
};

//  the else if statement

/*
 if(condition){
 } else if(condition){
  } else{
    }

*/

const time = 10;

if (time <= 10) {
    greeting = "Good morning";

} else if (time < 20) {
    greeting = "Good day"
} else {
    greeting = "Good evening"
}

//   js ternary
let position = (age < 18) ? "Minor" : "Adult";
let isNumber = true;

let discount = isNumber ? 0.2 : 0;

// JS switch statement


// switch (expression) {
//     case x: // code block
//         break;
//     case y:
//         // code block
//         break;
//     default:// code block

// };
let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "thursday";
        break;

    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday"
        break;

};

switch (new Date().getDay()) {
    case 6:
        day = "Saturday";
        break;
    case 0:
        day = "Sunday";
        break;
    default:
        text = "Looking forward to the weekend"
};

switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is weekend";
        break;
    case 0:
    case 6:
        text = "It is weekend";
        break;
    default:
        text = "Looking forward to the weekend";
};
let x = "0";


switch (x) {
    case 0:
        text = "OFF";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "NO value found";

};



// Js booleans

//console.log(Boolean(10 > 9));


/**
 * 0 is false

"" is false

undefined is false

null is false

NaN is false

false is false
 */

/**
 * 100 is true

3.14 is true

-15 is true

true is true

"Hello" is true

"false" is true

(7 + 1 + 3.14) is true
 */

// The Nullish Coalescing Operator (??)
let names = null;
let texts = "missing";
let result = names ?? text;

console.log(result);





























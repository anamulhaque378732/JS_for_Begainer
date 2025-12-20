// Global scope
var x = 1;
let y = 2;
const z = 3;
//const carName = "Volvo"; // code here can use carName

function muFunc() {
    // code here can use carName
};

// function scope

function myFunction() {
    var carName = "volvo"
};
function myFunction1() {
    let carName = "volvo"
};
function myFunction2() {
    const carName = "volvo"
};

// all are function scope

// code here can NOT use carName

function myFunction3() {
    let carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName

// block scope

{
    let y = 4;
}
// y can not use here
// Variables declared with the var keyword can NOT have block scope.

{
    var yy = 63;
}

// console.log(yy);

function myName() {
    names = "Anamul"
};

console.log(myName());































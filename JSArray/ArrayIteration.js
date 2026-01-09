// Array iteration 

// 1. forEach , take 3 arguments

const number = [4, 5, 6, 7, 8, 9, 10, 1, 11, 1, 2, 1];
let total = 0;

number.forEach((value, index, array) => {
    total += value;
});
// console.log(total);

// 2.0 array map .  create new array , does not change original array , takes 3 arguments

const numbers = [4, 5, 6, 7, 8, 9, 7, 8];
let square = numbers.map((value, index, array) => {
    return value ** 2
});
// console.log(square);


// 3.0   flatMap() ,The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

const newArray = numbers.flatMap((x) => x ** 2);
// console.log(newArray);

// 4.0 Array filter()  ,, The filter() method creates a new array with array elements that pass a test. takes 3 arguments

const filterArray = numbers.filter((value, index, array) => {
    return value > 5
});
// console.log(filterArray);


// 5.0 array reduce ,  The reduce() method does not reduce the original array. takes 4 arguments

const number2 = [22, 33, 44, 55, 66, 77, 88, 99];
const total2 = number2.reduce((total, value, index, array) => {
    return total + value;
});


// console.log(total2);

// 6.0 reduceRight() The reduce() method does not reduce the original array. takes 4 arguments


const total3 = number2.reduceRight((total, value, index, array) => {
    return total + value;
});
// console.log(total3);

// 7.0 array every() , takes 3 argument , check all elements by a condition, all element match the condition then reply true otherwise false

const bigger18 = number2.every((value, index, array) => {
    return value > 18;
});
// console.log(bigger18);


// 8.0 array some(),  takes 3 arguments , check all elements by a condition, one to all elements match the condition then reply true, otherwise false 


const bigger56 = number2.some((value, index, array) => {
    return value > 10;
});
// console.log(bigger56);


// 9.0 Array.from(), Array.from() has an optional parameter which allows you to execute a function on each element of the new array:



let text = "ANAMUL HAQUE";
const myArray = Array.from(text);
//console.log(Array.from(number, (a) => a * 2));

// console.log(myArray); 
// 


// 10.0 Array keys();


//The Array.keys() method returns an Array Iterator object with the keys of an array.

const fruits = ["Orange", "Banana", "Apple", "mango"];

const keys = fruits.keys();

let te = "";
// for (let x of keys) {
//     te += x;
// };
// console.log(te);

// 11.0 Array entries()
const entries = fruits.entries();

// for (let text of entries) {
//     console.log(text);

// };


// 11.0 Array with();

const months = ["January", "February", "Mar", "April"];
const myMonths = months.with(2, "March");

// console.log(myMonths);


// 12.0  JavaScript Array Spread (...)


const arr = [1, 2, 3, 4, 5, 6]
const arr1 = [7, 8, 9, 7, 8, 9];
// console.log([...arr, ...arr1]);

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);

const arr3 = [1, 2, 3];
const arr2 = [...arr3];
// console.log(arr2);


const numbers1 = [23, 55, 21, 87, 56];
let minValue = Math.min(...numbers1);
let maxValue = Math.max(...numbers1);

// console.log(maxValue, minValue);


let a, b, rest;
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8];

[a, b, ...rest] = arr4;

// console.log(a, b, rest);















































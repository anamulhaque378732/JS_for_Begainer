
const car = ["Saab", "volvo", "BMW"];

const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
const Cars = new Array("Saab", "Volvo", "BMW");
let car1 = cars[0]; //1st element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());
// console.log(typeof (fruits));
// console.log(fruits.length);

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];// last element

// Looping array element

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);

// }

// forEach Method apply array

// fruits.forEach((value) => {
//     console.log(value);

// });

// adding array element
// console.log(fruits.push("Komola"));
fruits[fruits.length] = "Lemon";
// console.log(fruits);

// //Adding elements with high indexes can create undefined "holes" in an array:

//fruits[6] = "Lemon";

// If you use named indexes, JavaScript will redefine the array to an object.

// After that, some array methods and properties will produce incorrect results.



const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";


//console.log(person);

const point = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
// console.log(points === point);//false
// console.log(Array.isArray(point));
// console.log(Array.isArray(points));

//(fruits instanceof Array);

// console.log((fruits instanceof Array))

//Nested Arrays and object

const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
};
























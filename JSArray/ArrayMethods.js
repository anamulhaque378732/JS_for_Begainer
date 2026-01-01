// Array methods

// 1.array length

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length);


// console.log(fruits.length = 2);

// 2. Array toString

// let myList = fruits.toString();


// 3. Array at
let fruit = fruits.at(2);
//console.log(fruit);
// console.log(fru = fruits[2]);


// 4. Array join method


// let join = fruits.join(" * ");
// let join = fruits.join(" - ");
// let join = fruits.join(" , ");
let join = fruits.join(" ** ");
// console.log(join);

// 5.Popping and Pushing

// console.log(fruits.push("Lemon")); //add element in last index
// console.log(fruits.pop()); //delete element in last index

// 6. shift, unshift

// console.log(fruits.shift());//The shift() method returns the value that was "shifted out":
// console.log(fruits.unshift("Lemon")); // add value in 1st index

// 7. changing the elements

// console.log(fruits[0]="Kiwi");

//const fruits = ["Banana", "Orange", "Apple", "Mango"];

//fruits[fruits.length] = "Kiwi"; // like to push
// console.log(fruits);

// 8. Merging Arrays (Concatenating)


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Lius"];
// console.log(myBoys.concat(myGirls));// add array in one array;

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3)


// console.log(arr1.copyWithin(2, 0));
// console.log(arr1.copyWithin(2, 0, 2));

//9. Array flat()
const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();

//console.log(newArr);

// 10. array flatMap
const myArrr = [1, 2, 3, 4, 5, 6];
const newArrr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArrr);


// 11. Splicing and Slicing Arrays

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(numbers.splice(2, 2)); //change original array
// console.log(numbers.splice(2, 2, "a", "B"));
// console.log(numbers);

// 11.1 JavaScript Array toSpliced()
const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
const spliced = months.toSpliced(2, 3); // not change original array
// console.log(spliced);
// console.log(months);

// 12. slice

console.log(numbers.slice(2)); // create new array

console.log(numbers);
console.log(numbers.slice(2, 3));













































































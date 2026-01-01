// Array Search

//1. indexOf

const fruits = ["Apple", "Banana", "Orange", "Mango", "Apple"];
let position = fruits.indexOf("Banana") + 1;
// console.log(position);
// console.log(fruits.indexOf("Kiwi"));// -1, no found the item

// 2. lastIndexOf()

let position1 = fruits.lastIndexOf("Apple") + 1;
//console.log(position1);
// console.log(fruits.lastIndexOf("Kiwi")); //-1.  element not fount



// 3. includes

let includes = fruits.includes("Mango");
// console.log(includes);// true
// console.log(fruits.includes("Kiwi")); // false



// 4.0  array find
const number = [4, 5, 6, 7, 8, 9];
//console.log(number.find((value,index,array) => {
//     return value > 10;
// }));

// 5.0  findIndex()
// console.log(number.findIndex((value, index) => {
//     return value > 10; // -1 . not found
// }));
// console.log(number.findIndex((value, index) => {
//     return value > 5;
// }));


//6. findLast

let high = number.findLast(x => x > 5)

// console.log(high);
//7.0 findLastIndex

let pos = number.findLastIndex(x => x > 6);
// console.log(pos);
























const person = {
    name: "John",
    age: 30,
    city: "New york"
};

const myArray = Object.values(person);
// console.log(myArray); //[ 'John', 30, 'New york' ]
// console.log(myArray.toString());//John,30,New york

// Using Object.entries()

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + " : " + value;
};
// console.log(text);//Bananas : 300Oranges : 200Apples : 500
const personA = {
    name: "John",
    age: 30,
    city: "New York"
};

//console.log(JSON.stringify(personA));





















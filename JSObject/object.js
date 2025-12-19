// Object
const car = { type: "Fiat", model: "500", color: "white" };

// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// using yhe new keyword
const personA = new Object({
    firstName: "Anamul",
    lastName: "Haque",
    age: 26,
    eyeColor: "Black"
});
// object properties
// console.log(personA.lastName)
// console.log(personA["lastName"]);

const personB = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
//console.log(personB.fullName());
let text = personB.firstName + "  " + personB.lastName;

// object constructor function

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
};

const myPerson = new Person("Sumona", "akter", 24, "Black");
console.log(myPerson);








































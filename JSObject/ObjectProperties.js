const person = {
    names: "Sumona",
    age: 24,
    eyeColor: "Black",
    isLove: true,

};
// console.log(person.age);
// console.log(person["age"]);
// let x = "age";
// let age = person[x];
// console.log(age);

// adding new Properties
person.isLoyal = true;

// constructor

function Person(first, last, age, eyeColor, isLove, isLoyal) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor;
    this.isLove = isLove;
    this.isLoyal = isLoyal;


};
const person1 = new Person("Sumona", "Akter", 24, "Black", true, true);
const person2 = new Person("Anamul", "Haque", 24, "Black", true, true);

// deleting properties 
delete (person.age);
delete (person["age"]);
// console.log(person);

// nested Objects
const myObj = {
    name: "Anamul",
    age: 30,
    myCars: {
        carName: "volvo",
        color: "White"
    },
    eyeColor: "Black"
};

//console.log(myObj.myCars.color);
console.log(myObj.myCars["color"]);
console.log(myObj["myCars"]["car2"]);














































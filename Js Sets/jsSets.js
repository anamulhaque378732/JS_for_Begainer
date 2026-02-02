
// sets , constructor function

const set = new Set(["a", "b", "c", "d"]);

set.add("a"); // don't add same element;
set.add("b");// don't add same element;
set.add("c");// don't add same element;
set.add("d");// don't add same element;
set.add("e"); //Always add different value
// console.log(set);
// console.log(set.size);
// console.log(typeof set); // set are object
// console.log(set instanceof Set); // true

let text = "";
for (const x of set) {
    text += x;
}; // apply for of method

// console.log(text);

































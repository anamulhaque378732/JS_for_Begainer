// declare a set 
const letters = new Set(["a", "b", "c"]);
// method -1 : add()


letters.add("e"); // same value not add, add ony different value;

// method 2 : set.size . find number of element of set

const mySet = new Set([1, 2, 3, 4]);
// console.log(mySet.size);


// method -3 :  apply for in lop of set 



// List all Elements
let text = "";
for (const x of letters) {
    text += x;
};

// method -4 : has() , does exist
const aName = new Set(["A", "N", "A", "M", "U", "L"])
//console.log(aName.has("A"));// true



// method -4 : apply forEach of set
const letter = new Set(["a", "c"]);
let tx = ""
letter.forEach((value) => {
    tx += value;
});


// console.log(tx);


// method - 5 : values(),return iterator object

// console.log(letter.values()); 


let te = "";
for (const entry of letters.values()) {
    te += entry;
}

// console.log(te);


// method -6 : keys() return a iterator method

// console.log(letter.keys());
const myIterator = letter.keys();
for (const x of myIterator) {
    text += x;
};

// method - 7 : entries(); method returns an Iterator with [value,value] pairs from a Se

const myIter = letter.entries();
// console.log(myIter);

let t = "";
for (const entry of myIter) {
    t += entry;
};
// console.log(t);

















































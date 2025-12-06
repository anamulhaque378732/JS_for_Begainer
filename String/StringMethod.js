// string method , all are cas sensitive and immutable;


const b = "anamul haque";
//console.log(b.slice(4, 9));
//console.log(b.slice(-10, -6));

// substring -  don't apply negative number
//console.log(b.substring(4, 9));

// 1. The charAt() method returns the character at a specified index (position) in a string:
const text = "HELLO WORLD";
//console.log(text.charAt());

// 2.  charCodeAt()  The method returns a UTF-16 code (an integer between 0 and 65535).

//console.log(text.charCodeAt());

// 3. Get code point value at the first position in a string:
//console.log(text.codePointAt(2));

// 4. at()

const names = "W3School";
//console.log(names.at(2));
//console.log(names[2]);

// 5. concat()
let text1 = "Hello";
let text2 = "World";
//console.log(text1.concat(" ", text2));

// 6. slice();
let fruits = "Apple , banana, kiwi";
//console.log(fruits.slice(4, 9)); { e , b}
//console.log(fruits.slice(7)); { banana, kiwi}
///console.log(fruits.slice(-12, -6)); { banana }




// 7. substring()
//console.log(fruits.substring(7, 13));

//8. substr()

//console.log(fruits.substr(7));


// 9. toUpperCase(); toLowerCase()

// console.log(fruits.toLowerCase());
// console.log(fruits.toUpperCase());

// 10.  isWellFormed()
const texts = "HELLO WORLD";
const texts2 = "HELLO WORLD \uD800"
// console.log(texts.isWellFormed());
// console.log(texts2.isWellFormed());

// 11. trim();The trim() method removes whitespace from both sides of a string:
const todo = "         ana         ";
//console.log(todo.trim()); //   {ana} removes whitespace only from start and end


// 12. trimStart();
let stat = "        hello World      ";
//console.log(stat.trimStart()); removes whitespace only from start
//console.log(stat.trimEnd()); removes whitespace only from end

// 13. padStart()
let num = "5";
//console.log(num.padStart(4, "0")); // 0005
//console.log(num.padEnd(3, "0")); // 500

// 14. repeat();

let ana = "Anamul";
//console.log(ana.repeat(4)); //AnamulAnamulAnamulAnamul

// 15.0  replace()  replaceAll() 
const code = "Please visited Microsoft , Microsoft , Microsoft";
//console.log(code.replace("Microsoft", "W3School"));
//console.log(code.replaceAll("Microsoft", "Anamul"));
//console.log(ana.replace("Anamul", "Sumona"));



//  16.0  split();
const lorem = "If the separator is omitted, the returned array will contain the whole string in index If the separator is , the returned array will be an array of single characters: ";
// console.log(lorem.split(","));
// console.log(lorem.split(""));
// console.log(lorem.split(" "));

// 17.0  
























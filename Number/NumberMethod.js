let x = 12;
//console.log(x.toString(x)); // 12, but string type
// console.log((123).toString()); //123 but string type
// console.log((12+65).toString());// string type

// console.log(x.toString(2)); //binary reply
// console.log(x.toString(8)); //octal reply
// console.log(x.toString(16)); //hexadecimal reply

let xx = 1.264852;

//toExponential
// console.log(xx.toExponential(5)); //1.26485e+0   string type return
// console.log(xx.toExponential(6)); //1.264852e+0

//toFixed(2)
// console.log(xx.toFixed(2)); // 1.26 string type return
// console.log(xx.toFixed(4)); //1.2648
// console.log(xx.toFixed(5)); //1.26485


// toPrecision()
//console.log(xx.toPrecision());// 1.264852  string type return
// console.log(xx.toPrecision(2));// 1.2
// console.log(xx.toPrecision(4));// 1.264


// valueOf()

// console.log(x.valueOf()); // 12 return a number as a number
// console.log((123).valueOf());// 123



//  the number method; check number
// console.log(Number(true)); // 1
// console.log(Number(false));// 0
// console.log(Number("10"));//10
// console.log(Number("    10"));//10
// console.log(Number("10   "));//10
// console.log(Number("   10  "));//10
// console.log(Number("10.33"));//10.33
// console.log(Number("10,23"));//NaN
// console.log(Number("10 23"));// NaN
// console.log(Number("jhon"));// NaN


// The Number() Method Used on Dates


//console.log(Number(new Date("10-12-2024"))); // return meli second
// The parseFloat() Method

// console.log(parseFloat("10"));//10
// console.log(parseFloat("10.33"));// 10.33
// console.log(parseFloat("10 20 30"));// 10
// console.log(parseFloat("10 years"));// 10
// console.log(parseFloat(" years 10"));// NaN


//The Number.parseInt() Method

// console.log(Number.parseInt("-10"));// -10
// console.log(Number.parseInt("-10.33"));// -10
// console.log(Number.parseInt("10"));// 10
// console.log(Number.parseInt("10.33"));// 10
// console.log(Number.parseInt("10 20 30 "));// 10
// console.log(Number.parseInt("10 years"));// 10
// console.log(Number.parseInt("years 20"));// NaN

// The Number.isInteger() Method
// console.log(Number.isInteger(10));// true
// console.log(Number.isInteger(10.33));// false

// Example isSafeInteger()
// console.log(Number.isSafeInteger(10));//true

// console.log(Number.isSafeInteger(12345678901234567890)); //false


































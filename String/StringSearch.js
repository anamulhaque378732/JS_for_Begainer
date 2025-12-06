// String Search Methods
// all are case sensitive



// 1.0 String indexOf()
let text = "Please locate where 'locate' occurs!";
// console.log(text.indexOf("locate")); // 7
// console.log(text.indexOf("Bangladesh")); // -1
//console.log(text.indexOf("locate", 15));




// 2.0 String lastIndexOf()
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// console.log(text.lastIndexOf("locate")); //21
//console.log(text.lastIndexOf("locate", 10));





// 3.0 String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match:

// console.log(text.search("locate"));
// console.log(text.search("Bangladesh"));




// 4.0 String match()
let texts = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("ain"));
// console.log(text.match(/ain/gi));




// 5.0 String matchAll()
//console.log(texts.matchAll("ain"));

// 6.0 String includes()
//console.log(texts.includes("ain"));





// 7.0 String startsWith()

//console.log(texts.startsWith("rain", 4));


// 8.0 String endsWith()
//console.log(texts.endsWith("rain", 8));









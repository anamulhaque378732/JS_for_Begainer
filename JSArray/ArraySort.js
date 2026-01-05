
// Array sort (change main array)
const fruits = ["Banana", "Orange", "Apple", "Mango"]; //sort alphabetically
// console.log(fruits.sort()); //[ 'Apple', 'Banana', 'Mango', 'Orange' ]

// array reverse (change main array)
// console.log(fruits.reverse()); //[ 'Mango', 'Apple', 'Orange', 'Banana' ]


// both sort and reverse

// console.log(fruits.sort());
// console.log(fruits.reverse());


// array toReversed()

const months = ["Jan", "Feb", "Mar", "Apr"]; //can not change main array 
const reversed = months.toReversed();
// console.log(reversed);

// Numeric sort 

const points = [1, 2, 3, 4, 5, 6, 98, 7, 4, 55, 44, 58, 63, 97];

// console.log(points.sort((a, b) => {
//     return a - b;
// }));
// console.log(points.sort((a, b) => {
//     return b - a;
// }));

const point = [4, 5, 6, 7, 8, 9];
// console.log(point.sort(() => {
//     return 0.5 - Math.random();
//  }));


// const points = [40, 100, 1, 5, 25, 10];

function myFunc() {
    for (let i = points.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = points[i];
        points[i] = points[j];
        points[j] = k;
        console.log(k);

    };

};
// myFunc();


// Find the highest and lowest value in array

let highestValue = points.sort((a, b) => {
    return a - b;
});


// console.log(highestValue[highestValue.length - 1]);
// console.log(highestValue[0]);


// use Math.min.apply in an array
function myArrayMin(arr) {
    return Math.min.apply(null, arr)
};
// alternative
let number = [14, 5, 67, 8, 10, 43, 11, 44, 77];
function myArrayMinimum(arr) {
    let len = arr.length;
    let min = arr[0];
    while (len--) {
        if (arr[len] < min) {
            min = arr[len]
        };

    };
    return min
};
// console.log(myArrayMinimum(number));



//console.log(myArrayMin(point));
// use Math.max.apply in an array
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
};

// console.log(myArrayMax(points));

// alternative way


function myArrayMaximum(arr) {
    let len = arr.length;
    let max = arr[0];
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        };
    };
    return max;
};

// console.log(myArrayMaximum(number));


// Sorting object array
const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];


const sorts = cars.sort((a, b) => {
    return a.year - b.year
});
const sorts2 = cars.sort((a, b) => {
    return b.year - a.year;
});
// console.log(sorts, sorts2);

const sortingByProperty = cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
});


// console.log(sortingByProperty);

const myArr = [
    { name: "X00", price: 100 },
    { name: "X01", price: 101 },
    { name: "X02", price: 102 },
    { name: "X03", price: 103 },
    { name: "X04", price: 110 },
    { name: "X05", price: 120 },
    { name: "X06", price: 115 },
    { name: "X07", price: 110 }
];

let sorting = myArr.sort((a, b) => {
    if (a.price < b.price) {
        return -1
    }
    if (a.price > b.price) {
        return 1
    }
    return 0


});

// console.log(sorting);






























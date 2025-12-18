function myFunction(x, y) {
    if (y === undefined) {
        y = 0
    };

    return x + y
};


//console.log(myFunction(4));

function myFunctions(x, y = 10) {
    return x + y;
}
//console.log(myFunctions(5));

function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    };
    return sum;
};

//console.log(sum(1, 4, 5, 7, 9, 56, 5, 6, 65, 5, 65));

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    };
    return max;
};
//console.log(findMax(4, 8, 7, 9, 5, 4, 4, 778, 888));

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];

    };
    return sum;

};
//console.log(sumAll(4, 5, 6, 7, 8, 9, 3, 2, 11, 55, 66));






















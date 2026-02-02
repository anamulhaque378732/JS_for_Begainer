// set logic

// logic -1 : union()

const set1 = new Set(["B", "C"]);
const set2 = new Set(["A", "D", "E"])
const set3 = new Set(["j", "k"])
const union = set1.union(set2).union(set3);
// console.log(union);

// logic 2 : intersection()

const intersection = set1.intersection(set2);
// console.log(intersection);


// logic-3 : difference();

const difference = set1.difference(set2);
// console.log(difference);


// logic -4 : symmetricDifference()

const symmetricDifference = set1.symmetricDifference(set2);
// console.log(symmetricDifference);


// logic - 5 : isSubsetOf();

let answer = set1.isSubsetOf(set2);
// console.log(answer);

// logic - 6 : isSupersetOf()

let superSet = set1.isSupersetOf(set2)
// console.log(superSet);

// logic - 7 : isDisjointFrom()

let disjoint = set1.isDisjointFrom(set2);
// console.log(disjoint);











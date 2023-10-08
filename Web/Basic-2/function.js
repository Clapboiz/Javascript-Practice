console.log("Starting");

function sum(a, b) {
  return a + b;
}

console.log("sum: ", sum(6, 9));

// arrow funct
let sum1 = (a, b) => {
  return a + b;
};

console.log("sum 1: ", sum1(2, 9));

// find
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

// filter
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result1 = words.filter((word) => word.length > 6);

console.log(result1);
// Expected output: Array ["exuberant", "destruction", "present"]

// map
const arr = [1, 4, 9, 16];
const map = arr.map((x) => x * 2);

console.log(arr);
console.log(map);

// sort
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

// 1,4,21,30,100000
const array1 = [1, 30, 4, 21, 100000];
array1.sort(function (x, y) {
  return x - y;
});
console.log(array1);

// Expected output: Array [1, 100000, 21, 30, 4]
const array2 = [1, 30, 4, 21, 100000];
array2.sort();
console.log(array2);

// Lodash lib js

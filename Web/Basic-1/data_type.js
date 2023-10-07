// String
console.log(`Hello' '"' 'World: `);

let x = 5,
  y = 6,
  z = 7;

console.log("string: ", "x= ", x, "y= ", y, "z= ", z);

let a = "string - test";
console.log(a);
console.log(4 + 5 + "a");
console.log("a" + 5 + 4);

// convert data type
let b = "5";
// Same convert
// let e = +b
let e = Number(b);
console.log("type of e:", typeof e);

// print var ${var} // intelligent code
console.log(`Answer: x = ${x}, y = ${y}, x+y=${x + y}`);

// Object (key: value)
let obj = {
  name: "Clap",
  address: "HCM",
};

console.log("check data: ", obj);
console.log("what is your name?", `My name is: `, obj.name);
console.log("what is your address?", `Your address is: `, obj.address);

let bb = "name";
obj[bb] = "Lap";

console.log("what is your name?", `Your address is: `, obj["name"]);

// array
let cc = ["clap", "HCM"];
console.log("type of cc: ", typeof cc, cc);

let family = [
  { name: "Clap", age: 24 },
  { name: "Lap", age: 25 },
];

console.log("my family: ", family);

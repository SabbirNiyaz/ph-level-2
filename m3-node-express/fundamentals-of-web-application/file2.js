const { a } = require("./file1"); // Importing the value exported from file1.js
const { a: y } = require("./file3"); // Importing the value exported from file3.js

// const { add } = require("./utils/add");
// const { subs } = require("./utils/subs");
const { add, subs } = require("./utils/index");

console.log(a, y);

console.log("Addition:", add(a, y));
console.log("Subtraction:", subs(y, a));
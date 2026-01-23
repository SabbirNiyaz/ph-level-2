import { a } from './file_es1.js';
import { a as y } from './file_es3.js';
import { add, subs } from './utils-esm/index.js';

console.log(a, y);

console.log("Addition:", add(a, y));
console.log("Subtraction:", subs(y, a));
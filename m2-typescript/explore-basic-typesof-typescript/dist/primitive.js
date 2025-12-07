"use strict";
// JS - TS:
// string, number, boolean, null, undefined
Object.defineProperty(exports, "__esModule", { value: true });
//TS: never, unknown, any, void
let userName = "Sabbir Niyaz";
// userName = 123; // Error: Type 'number' is not assignable to type 'string'
userName = 'Sabbir Hossain Niyaz'; // OK   
let age = 23;
// age = "24"; // Error: Type 'string' is not assignable to type 'number'
age = 24; // OK
let isLoggedIn = false;
// isLoggedIn = "true"; // Error: Type 'string' is not assignable to type 'boolean'
isLoggedIn = true; // OK
let x = undefined;
let y = null;
let z; // Implicitly has the 'any' type
z = 12;
z = "Hello";
z = true;
console.log(userName, age, isLoggedIn);
//# sourceMappingURL=primitive.js.map
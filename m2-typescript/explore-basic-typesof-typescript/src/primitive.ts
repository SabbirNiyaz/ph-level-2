// JS and TS Primitive Types:
// string, number, boolean, null, undefined
//TS: never, unknown, any, void

let userName: string = "Sabbir Niyaz";
// userName = 123; // Error: Type 'number' is not assignable to type 'string'
userName = 'Sabbir Hossain Niyaz'; // OK   

let age: number = 23;
// age = "24"; // Error: Type 'string' is not assignable to type 'number'
age = 24; // OK

let isLoggedIn: boolean = false;
// isLoggedIn = "true"; // Error: Type 'string' is not assignable to type 'boolean'
isLoggedIn = true; // OK

let x: undefined = undefined;

let y: null = null;

let z; // Implicitly has the 'any' type
z = 120;
z = "Hello";
z = true;

console.log(userName, age, isLoggedIn);
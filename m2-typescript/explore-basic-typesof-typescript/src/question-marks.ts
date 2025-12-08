// ? : Ternary Operator in TypeScript
// ?? : Nullish Coalescing Operator in TypeScript => works when Null or Undefined
// ?: : Optional Chaining Operator in TypeScript

// --- Ternary Operator Example ---
const passMark = (marks: number): string => {
    const result = marks >=50 ? "passed" : "failed";
    return `You have ${result} the exam.`;
}
console.log(passMark(65)); // You have passed the exam.
console.log(passMark(45)); // You have failed the exam.



// --- Nullish Coalescing Operator Example ---

const userTheme =  undefined; // could be undefined or null
// const userTheme =  "dark-mode"; // show this line to test with a defined value


const selectedTheme = userTheme ?? "light-mode";

console.log(`Selected Theme: ${selectedTheme}`); // Selected Theme: light-mode


// --- Optional Chaining Operator Example ---
const userProfile: {
    firstName: string;
    middleName?: string; // optional property
    lastName?: string; // optional property
} = {
    firstName: "John",
    lastName: "Doe",
};  

const {firstName, middleName, lastName} = userProfile;


console.log(userProfile);
console.log(middleName); // undefined
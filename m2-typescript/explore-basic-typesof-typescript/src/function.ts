// Function
// arrow function, normal function

function addNormal(num1: number, num2: number): number {
    return num1 + num2;
}

// addNormal(5, "10"); // JS allows this but TS will give an error
addNormal(5, 10); // JS allows this but TS will give an error

const addArrow = (num1: number, num2: number): number => num1 + num2;

// addArrow(5, "10"); // JS allows this but TS will give an error
addArrow(5, 10); // JS allows this but TS will give an error


// Objective type function => method
const poorUser = {
    name: "Sabbir Niyaz",
    balance: 5,

    // method (function inside an object)
    addBalance(salary: number): number {
        const newBalance = this.balance + salary;
        return newBalance;
    }
}
console.log(poorUser);
// console.log(poorUser.addBalance("100")); // JS allows this but TS will give an error
console.log(poorUser.addBalance(100)); // JS allows this but TS will give an error

// Map type define (Callback function in map or loop)
const arr: number[] = [1, 2, 3, 4, 5];
const sqtArr = arr.map((element: number): number => element * element);
console.log(sqtArr);
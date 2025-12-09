// Type Assertion

let anything: any;

anything = 'Hello, TypeScript!';

const upperCase = (anything as string).toUpperCase(); // Using 'as' syntax
console.log(upperCase); // Output: HELLO, TYPESCRIPT!



const kgToGmConverter = (input: number | string): number => {
    if (typeof input === 'number') {
        return input * 1000;   // kg → gram
    } else {
        const value = parseInt(input);  // extracts "2" from "2 kg"
        return value * 1000;
    }
}

const value1 = kgToGmConverter(2) as number;
const value2 = kgToGmConverter('2 kg') as number;

console.log(`Total price is ${value1}`); // 2000
console.log(`Total price is ${value2}`); // 2000

// --------------------------------------------------------------------

type customError = {
    message: string;
} 
try{

}
catch(err){
    console.log((err as customError).message)
}
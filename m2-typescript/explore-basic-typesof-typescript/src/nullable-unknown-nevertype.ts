// Nullable Types
const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DB: ${input}`);
    }else {
        console.log("From DB ALL.");
    }
};
getUser(""); // From DB ALL.
getUser('Sabbir'); // From DB: Sabbir
getUser(null); 


// Unknown Type
const discountCalculator = (input: unknown) => {
    if(typeof input === "number") {
        console.log(`Discounted Price: ${input - (input * 0.1)}`);
    }if(typeof input === "string") {
        const value = parseFloat(input);
        console.log(`Discounted Price: ${value - (value * 0.2)}`);
    }else {
        console.log("No Discount Applied.");
    }

};
discountCalculator(10);
discountCalculator("20 Taka"); 
discountCalculator(null); 


// Void (never return anything)
const throwError = (msg: string): never => {
    throw new Error(msg);
}
// throwError("Something went wrong!");
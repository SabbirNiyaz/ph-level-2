//todo-> Problem 2:

type InputType = string | number[];
const getLength = (input : InputType) => {
    if (typeof input === 'string') {
        return input.length;
    } else if (Array.isArray(input)) {
        return input.length;
    } 
}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
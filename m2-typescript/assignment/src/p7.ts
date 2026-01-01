//todo-> Problem 7:

type arrayType = number[];

const getUniqueValues = (arr1: arrayType, arr2: arrayType) => {
    return Array.from(new Set([...arr1, ...arr2]));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
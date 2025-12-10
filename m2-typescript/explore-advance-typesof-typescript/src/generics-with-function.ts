// Generics with function

// const createArrayWithString = (value: string) => [value];

const createArrayWithGenerics = <T>(value: T) => {
    return [value]
}

const arrString = createArrayWithGenerics('TS')
const arrNum = createArrayWithGenerics(5)
const arrBool = createArrayWithGenerics(true)

// console.log(arrString);
// console.log(arrNum);
// console.log(arrBool);


// Tuple
const createArrayWithTuple = <X, Y>(value1: X, value2: Y) => {
    return [value1, value2];
}

const res1 = createArrayWithTuple("Sabbir", true);
const res2 = createArrayWithTuple(111, { name: "Niyaz" });


// Dynamical object pass in function
const addStudentToCurse = <T>(studentInfo: T) => {
    return {
        course: "Level 2",
        ...studentInfo, // use spread operator
    }
}

const s1 = {
    name: 'Sabbir',
    id: '22-47538-2',
    hasCGPA: false,
}
const s2 = {
    name: 'Niyaz',
    id: '22-47538-2',
    hasCGPA: false,
    hasLaptop: true,
    hasVSCode: true,
}
const s3 = {s1, ...s2} // use spread operator

console.log(addStudentToCurse(s1));
console.log(addStudentToCurse(s2)); 
console.log(addStudentToCurse(s3)); 
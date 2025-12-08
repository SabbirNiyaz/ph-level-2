// Type Alias
type User = {  
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: 'male' | 'female' | 'other';
    contactNo: string;
    address: {
        division: string;
        city: string;
    }
}
// ----------------------------------------------------------------
const user1: User = {
    id: 1,
    name: {
        firstName: 'Sabbir',
        lastName: 'Niyaz'
    },
    gender: 'male',
    contactNo: '123-456-7890',
    address: {
        division: 'Dhaka',
        city: 'Dhaka'
    }
}

const user2: User = {
    id: 2,
    name: {
        firstName: 'xxx',
        lastName: 'yyy'
    },
    gender: 'female',
    contactNo: '123-456-2290',
    address: {
        division: 'Dhaka',
        city: 'Dhaka'
    }
}

console.log(user1);
console.log(user2);

// ------------------------------------------------------------------

type ID = number | string;
let userId1: ID;

type IsAdmin = boolean;
let isAdminUser: IsAdmin;


userId1 = 123;
userId1 = 'abc123';

isAdminUser = true;
isAdminUser = false;

// -------------------------------------------------------------------

// function Type Alias

type AddFunc = (num1:number, num2:number) => number;

const add: AddFunc = (num1, num2) => {
    return num1 + num2;
}
const result = add(10, 20);
console.log(`The result is ${result}`); // 30

// -------------------------------------------------------------------
type user = {
    name: string;
    age: number;
}

type role = {
    role: 'admin' | 'user';
}

type adminUser = user & role; // Intersection Type


// Interface only works with object types: arrays, functions, objects, etc.
interface IUser {
    name: string;
    age: number;
}

// Extending Interface
interface IUserWithRole extends IUser {
    role: 'admin' | 'user';
}

const user1: user = {
    name: 'Alice',
    age: 30
}
const user2: user = {
    name: 'Bob',
    age: 25
}
const user3: adminUser = {
    name: 'Sabbir',
    age: 23,
    role: 'admin'
}
const user4: IUser = {
    name: 'Charlie',
    age: 28
}

const user5: IUserWithRole = {
    name: 'David',
    age: 35,
    role: 'user'
}

//------------------------------------------------------------

// Function type alias
type addFunc = (num1: number, num2: number) => number;

const add: addFunc = (num1, num2) => num1 + num2;
console.log(add(5, 10)); // 15


// Array type interface
interface IFriendArray {
    [index: number]: string;
}
const friends: IFriendArray = ['Alice', 'Bob', 'Charlie'];
//   index number =              0        1        2 



// Function type interface
interface IAddFunc {
    (num1: number, num2: number): number;
}

const addInterface: IAddFunc = (num1, num2) => num1 + num2;
console.log(addInterface(20, 30)); // 50



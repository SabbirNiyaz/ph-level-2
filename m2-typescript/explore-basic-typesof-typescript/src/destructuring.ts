// Object Destructuring

const user = {
    id: 123,
    name: {
        firstName: 'Sabbir',
        middleName: 'Hossain',
        lastName: 'Niyaz'
    },
    gender: 'male',
    age: 23,
}

const { id, name: { firstName, middleName, lastName }, age: userAge } = user;

console.log(id);
console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(userAge); // Call by additional name (age: userAge)





// Array Destructuring



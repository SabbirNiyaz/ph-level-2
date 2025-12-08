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



// -----------------------------------------------------------------
// Array Destructuring

const friends = ['Sabbir', 'Niyaz', 'Raju', 'Kamal', 'Jamal'];

const [firstFriend, secondFriend, ...restFriends] = friends;

console.log(firstFriend);
console.log(secondFriend);
console.log(restFriends); // Rest operator to collect remaining elements

// -----------------------------------------------------------------
const numbers = [10, 20, 30, 40, 50];
const [, , , , num5] = numbers; // Skip elements using commas
console.log(num5);
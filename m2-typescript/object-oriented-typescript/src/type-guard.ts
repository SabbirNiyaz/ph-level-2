//! Type guard using typeof and in keyword

type alphaNumeric = number | string;

// Type guard using typeof
const add = (num1: alphaNumeric, num2: alphaNumeric) => {
    // Type guard using typeof
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        console.log(num1 + num2);
    } else {
        const addition = num1.toString() + num2.toString();
        console.log(addition);
    }
}

add(5, 10); // 15
add(5, '10');
add('10', 10);


// Type guard using 'in' keyword

type NormalUserType = {
    name: string;
}
type AdminUserType = {
    name: string;
    role: 'admin';
}
type userType = NormalUserType | AdminUserType;

const getUser = (user: userType) => {
    // Type guard using 'in' keyword
    if ('role' in user){
        const aUser = `${user.name} is an ${user.role}`;
        console.log(aUser);
    } else {
        const nUser = `${user.name} is a normal user`;
        console.log(nUser);
    }
}

getUser({name: 'Sabbir'});
getUser({name: 'Niyaz', role: 'admin'});

// array, object
// TS: tuple
let bazarList: string[] = ['apple', 'banana', 'milk', 'bread'];

// bazarList.push(12); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
bazarList.push('eggs'); // OK

let mixedArr: (number | string | boolean)[] = [12, 'hello', true];
mixedArr.push(45); // OK
mixedArr.push('world'); // OK
mixedArr.push(false); // OK
// mixedArr.push([]); // Error: Argument of type 'never[]' is not assignable to parameter of type 'string | number | boolean'


// TS: tuple
let coordinates: [number, number] = [10, 20];
// coordinates = [10, 20, 30]; // Error: Type '[number, number, number]' is not assignable to type '[number, number]'
// coordinates = [10]; // Error: Type '[number]' is not assignable to type '[number, number]'
coordinates = [15, 25]; // OK

let couple : [string, string] = ['Husband', 'Wife'];
couple = ['Father', 'Mother']; // OK
// couple = ['Brother', 123]; // Error: Type 'number' is not assignable to type 'string'

let nameRole: [string, string, number] = ['Sabbir Niyaz', 'Admin', 1];
nameRole = ['John Doe', 'User', 2]; // OK
// nameRole = ['Jane Doe', 3, 'Moderator']; // Error: Type 'number' iss not assignable to type 'string'


// reference type: object

const user:{
    // organization: string;
    organization: 'Programming Hero'; // Literal type (Fixed value type)
    firstName: string;
    middleName?: string; // optional type or property
    lastName?: string; // optional type or property
    isAdmin: boolean;
} = {
    organization: 'Programming Hero',
    firstName: 'Sabbir',
    // middleName: 'Hossain',
    lastName: 'Niyaz',
    isAdmin: true
}

user.firstName = 'John'; // OK
// user.age = 30; // Error: Property 'age' does not exist on type '{ organization: string; firstName: string; middleName?: string | undefined; lastName?: string | undefined; isAdmin: boolean; }'
// user.isAdmin = 'yes'; // Error: Type 'string' is not assignable to type 'boolean'

console.log(user);

const user2:{
    // organization: string;
    readonly organization: 'Programming Hero'; // access modifier: readonly
    firstName: string;
    middleName?: string; // optional type or property
    lastName?: string; // optional type or property
    isAdmin: boolean;
} = {
    organization: 'Programming Hero',
    firstName: 'Sabbir',
    // middleName: 'Hossain',
    lastName: 'Niyaz',
    isAdmin: true
}
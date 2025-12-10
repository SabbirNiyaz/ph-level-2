// Dynamically generalize const
type GenericArray<T> = Array<T>

const students: GenericArray<string> = ['Sabbir', 'Hossain', 'Niyaz']

const roles: GenericArray<number> = [1, 2, 4]

const isPassed: GenericArray<boolean> = [true, false, true]

// Tuples example
type coordinates<X, Y> = [X, Y];

const coordinates1: coordinates<number, number> = [10, 20];
const coordinates2: coordinates<string, number> = ["10", 20];


// Array of Object
const userList: GenericArray<{ name: string; age: number }> = [
    {
        name: "Sabbir",
        age: 23,
    },
    {
        name: "Niyaz",
        age: 24,
    }
]
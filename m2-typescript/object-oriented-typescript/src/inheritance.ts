//! Inheritance: the 1st pilar of OOP

//? Parent class
class Person {
    // Common property
    name: string; 
    id: number;
    dept: string;

    constructor(name: string, id: number, dept: string) {
        this.name = name;
        this.id = id;
        this.dept = dept;
    }

}

//? Child class 1
class Student extends Person {
    //? method
    dailyWork(semesterNumber: number) // Parameter comes from outside
    {
        console.log(`${this.name} is from ${this.dept} and
        he is ${semesterNumber} semester`)
    }
}

//? Child class 2
class Teacher extends Person {
    position: string; // Own property

    constructor(name: string, id: number, dept: string, position: string) {
        super(name, id, dept) //? Super is parent class's constructor
        this.position = position;
    }
}

// Create object
const s1 = new Student('Sabbir', 47538, 'CSE');
const s2 = new Student('Niyaz', 47539, 'EEE');

s1.dailyWork(11);
s2.dailyWork(12);

const t1 = new Teacher('Hossain', 222, 'CS', 'Lecturer');
console.log(t1.name);
console.log(t1.position);
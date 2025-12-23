//! Type guard using 'instance of' keyword

class Person {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    getSleep(hours: number) {
        console.log(`${this.name} is sleeping for ${hours} hours.`);
    }
}

class Student extends Person {
    constructor(name: string, id: number) {
        super(name, id);
    }

    doStudy(numOfHour: number) {
        console.log(`${this.name} is studying ${numOfHour} hours.`);
    }

}

class Teacher extends Person {
    constructor(name: string, id: number) {
        super(name, id);
    }
    doTeach(numOfHour: number) {
        console.log(`${this.name} is teaching ${numOfHour} hours.`);
    }   
}

//* We can use Class (Person, Student, Teacher) as type
const getUSerInfo = (user: Person ) => {
    //* Type guard using 'instance of' keyword
    if (user instanceof Student){
        user.doStudy(5);
    } else if (user instanceof Teacher){
        user.doTeach(6);
    } else {
        user.getSleep(8);
    }
}

const student1 = new Student('Sabbir', 101); //? Student instance
const teacher1 = new Teacher('Niyaz', 201); //? Teacher instance
const person1 = new Person('Hossain', 301); //? Person instance

getUSerInfo(student1);
getUSerInfo(teacher1);
getUSerInfo(person1);

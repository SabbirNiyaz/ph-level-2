//! Polymorphism: The 2nd pillar of OOP
/*
Polymorphism is an OOP concept where a single action (like a method)
behaves differently depending on the object performing it.
todo: 1.Method's parameters must be "same parameters and same name" or "no parameters"
todo: 2.Or we can use constructor for use different parameters
*/

class Person{
    getSleep(){
        console.log("Normal person sleeps 8 hours a day");
    }
}
class Student extends Person{
    getSleep(){
        console.log("Student sleeps 7 hours a day");
    }
}
//? New Developer class
class Developer{
    getSleep(){
        console.log("Developer sleeps 6 hours a day");
    }
}

const getSleepHours = (params: Person)=>{
    //? Showing different behaviors using the same method
    params.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

getSleepHours(person1); // Normal person sleeps 8 hours a day
getSleepHours(person2); // Student sleeps 7 hours a day
getSleepHours(person3); // Developer sleeps 6 hours a day

//* console.log(person1.getSleep()) // Student sleeps 7 hours a day


//todo: Another Example

class Shape{
    area(): number {
        return 0;
    }
}
class Circle extends Shape{
    radius: number;
    constructor(radius: number){
        super();
        this.radius = radius;
    }
    area(): number {
        return Math.round(Math.PI * this.radius * this.radius); 
    }
}
class Rectangle extends Shape{
    height: number;
    width: number;
    constructor(height: number, width: number){
        super();
        this.height = height;
        this.width = width;
    }
    area(): number {
        return this.height * this.width;
    }
}

const calculateArea = (params: Shape)=>{
    console.log("Area:", params.area());
}

const shape1 = new Shape();
const shape2 = new Circle(5);
const shape3 = new Rectangle(4, 6);

calculateArea(shape1); // Area: 0
calculateArea(shape2); // Area: 78
calculateArea(shape3); // Area: 24
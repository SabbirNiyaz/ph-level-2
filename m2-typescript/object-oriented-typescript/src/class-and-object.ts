//! OOP: Class and Object

//TODO Create Class
// class Animal {
//     name: string;   // this.name
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//     //? Method (Function inside a class or object is call method)
//     makeSound(){
//         console.log(`${this.name} is making sound ${this.sound}`)
//     }
// }

//* Parameter property
class Animal {
    constructor(public name: string, public species: string,
         public sound: string) {} //? use "public" parameter property

    //? Method (Function inside a class or object is call method)
    makeSound(){
        console.log(`${this.name} is making sound ${this.sound}`)
    }
}

//TODO Create new Object (Blue print of class)
const dog = new Animal('Doesh', 'dog', 'ghew');
const cat = new Animal('Tom', 'cat', 'mew');

console.log(dog.name);
cat.makeSound(); // Call method
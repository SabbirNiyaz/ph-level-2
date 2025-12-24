//! Abstraction: The 3rd pillar of OOP

//? Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object. It helps in reducing programming complexity and effort.

//todo: 1st- Idea
//todo: then- Implementation

//todo: Two ways to achieve Abstraction in TypeScript
//* 1. Abstract Classes
//* 2. Interfaces


//! 1. Abstract Classes
//todo: Idea
//? Abstract class cannot be instantiated directly. It can only be extended by other classes. It can contain abstract methods (without implementation) that must be implemented by derived classes.
abstract class Vehicle {
    abstract startEngine(): void;
    abstract stopEngine(): void;
}

//todo: Implementation
//? This class must implement all abstract methods of Vehicle class
class Car extends Vehicle {
    startEngine(): void {
        console.log("Car engine started.");
    }
    stopEngine(): void {
        console.log("Car engine stopped.");
    }
}

const myCar = new Car();
myCar.startEngine();


// ---------------------------------------------------------------------------------------

//! 2. Interfaces
//todo: Idea
interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

//todo: Implementation
//? This class must implement all methods of MediaPlayer interface
class MusicPlayer implements MediaPlayer {
    play(): void {
        console.log("Playing music...");
    }
    pause(): void {
        console.log("Pausing music...");
    }
    stop(): void {
        console.log("Stopping music...");
    }
}

const myMusicPlayer = new MusicPlayer();
myMusicPlayer.play();
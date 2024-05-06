{
// Abstraction in OOP (abstract)

// Define an abstract class Vehicle with abstract methods for starting, stopping, and moving
abstract class Vehicle {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    // Define a non-abstract method which can have implementation
    test() {
        console.log('Testing....');
    }
};

// Define a subclass Car inheriting from Vehicle
class Car extends Vehicle {
    // Implement the startEngine method
    startEngine(): void {
        console.log('I am starting the engine.');
    };

    // Implement the stopEngine method
    stopEngine(): void {
        console.log('I am stopping the engine');
    };

    // Implement the move method
    move(): void {
        console.log('I am moving');
    }
};

// Create an instance of the Car class
const car = new Car();
// Call the implemented methods
car.startEngine(); // Output: I am starting the engine.
car.stopEngine(); // Output: I am stopping the engine
car.move(); // Output: I am moving
car.test(); // Output: Testing....

    














}
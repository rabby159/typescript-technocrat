{
 // Abstraction in OOP
 //1. interface
 //2. abstract

// Define an interface Vehicle specifying abstract methods for starting, stopping, and moving the vehicle
interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
};

// Define a class Bike implementing the Vehicle interface
class Bike implements Vehicle {
    // Implement the startEngine method of the Vehicle interface
    startEngine(): void {
        console.log('I am starting the engine.');
    };

    // Implement the stopEngine method of the Vehicle interface
    stopEngine(): void {
        console.log('I am stopping the engine');
    };

    // Implement the move method of the Vehicle interface
    move() {
        console.log('I am running the engine');
    };

    // Additional method specific to the Bike class
    test() {
        console.log('Testing...');
    }
};

// Create an instance of the Bike class
const bike = new Bike();
// Call the implemented methods
bike.startEngine(); // Output: I am starting the engine.
bike.stopEngine(); // Output: I am stopping the engine
bike.move(); // Output: I am running the engine
bike.test(); // Output: Testing...











}
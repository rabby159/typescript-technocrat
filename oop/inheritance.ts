{

    /**
 * Inheritance in OOP
 */

class Animal {
    // Define the base class Animal

    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        // Initialize properties
        this.name = name;
        this.age = age;
    };

    // Method
    displayInfo() {
        // Method to display information about the animal
        console.log(`The ${this.name} is ${this.age} years old`);
    }
};

// Create an instance of the Animal class
const cat = new Animal('German sharpe', 5);
// Call the displayInfo method on the created instance
cat.displayInfo();


class Cat extends Animal {
    // Define a subclass Cat that inherits from Animal

    // Additional property
    sound: string;

    // Constructor
    constructor(name: string, age: number, sound: string) {
        // Call the superclass constructor using super()
        super(name, age);
        // Initialize the additional property
        this.sound = sound;
    };

    // Method
    makeSound() {
        // Method to make the cat sound along with its information
        console.log(`The ${this.name} is ${this.age} years old and it makes a sound like ${this.sound}`);
    }
};

// Create an instance of the Cat class
const dog = new Cat('Panjabi Sada Kuttta', 4, 'Ghew Ghew Ghew')
// Call the makeSound method on the created instance
dog.makeSound();





}
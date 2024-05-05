{
    /**
 * OOP -------> Class
 */

// Define a class called Animal
class Animal {
    // public name : string;
    // public species : string;
    // public sound : string;

    constructor(public name : string, public species : string, public sound : string){ //using parameters property 
        // this.name = name;
        // this.species = species;
        // this.sound = sound;

        // Define a constructor method for the Animal class which takes three parameters: name, species, and sound.
        // The constructor automatically assigns these parameters to public properties of the class.
        }
        
    makeSound(){
        // Define a method called makeSound
        console.log(`This ${this.name} say ${this.sound}`);
        // Print a message indicating the name of the animal and the sound it makes.
    }
}

    const dog = new Animal('French Kutttu', 'dog', 'ghew ghew');
    // Create a new instance of the Animal class with the specified name, species, and sound.
    dog.makeSound();
    // Call the makeSound method on the created instance of the Animal class.
}
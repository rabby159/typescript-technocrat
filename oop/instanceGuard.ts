{

// Type Guard Using instanceof

// Define a base class Animal
class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log('I am making sound!');
    }
}

// Define a subclass Dog inheriting from Animal
class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    };

    makeGhew() {
        console.log(`I am ${this.name}, I make sound like Ghew!`);
    }
};

// Define a subclass Cat inheriting from Animal
class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    };

    makeMeaw() {
        console.log(`I am ${this.name}, I make sound like Meaw!`);
    }
};

// Define a function to check if the animal is a Dog
const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
}

// Define a function to check if the animal is a Cat
const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
}

// Function to get information about the animal
const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
        // If animal is a Dog, call makeGhew method
        animal.makeGhew();
    } else if (isCat(animal)) {
        // If animal is a Cat, call makeMeaw method
        animal.makeMeaw();
    } else {
        // If animal is neither Dog nor Cat, call makeSound method
        animal.makeSound();
    }
}

// Create instances of Dog and Cat
const dog = new Dog('Kala Kuttta', 'dog');
const cat = new Cat('fazil bilaai', 'cat');

// Call getAnimal function with the dog instance
getAnimal(dog);




    











}
{
    /**
 * OOP -------> Class
 */

class Animal {
    name : string;
    species : string;
    sound : string;

    constructor(name : string, species : string, sound : string){
        this.name = name;
        this.species = species;
        this.sound = sound;
        }
        
    makeSound(){
        console.log(`This ${this.name} say ${this.sound}`);
    }
}

    const dog = new Animal('French Kutttu', 'dog', 'ghew ghew');
    dog.makeSound();
}
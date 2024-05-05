{

    //Type Guard Using Instance Of

    class Animal {
        name : string;
        species : string;

        
        constructor(name : string, species : string){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log('I making sound!');
        }

    }

    class Dog extends Animal{
        constructor(name : string, species : string){
            super(name, species);
        };

        makeGhew(){
            console.log(`I am ${this.name}, I am make sound like Ghew!`);
        }
    };


    class Cat extends Animal{
        constructor(name : string, species : string){
            super(name, species);
        };

        makeMeaw(){
            console.log(`I am ${this.name}, I am make sound like Meaw!`);
        }
    };

    //smart way to  use instanceof

    const isDog = (animal : Animal) : animal is Dog =>{
        return animal instanceof Dog;
    } 

    const isCat = (animal : Animal) : animal is Cat =>{
        return animal instanceof Cat;
    } 

    const getAnimal = (animal : Animal) => {
        if(isDog(animal)){
            animal.makeGhew();
        }
        else if(isCat(animal)){
            animal.makeMeaw();
        }
        else{
            animal.makeSound();
        }

    }

    const dog = new Dog('Kala Kuttta', 'dog');
    const cat = new Cat('fazil bilaai', 'cat');

    getAnimal(dog);



    











}
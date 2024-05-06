{
    
    // Polymorphism in OOP

// Define a base class Person
class Person {
    // Method to describe sleep habits of a normal human
    getSleep() {
        console.log('I am a normal human, so I regularly sleep 8 hours!');
    }
};

// Define a subclass Student inheriting from Person
class Student extends Person {
    // Method to describe sleep habits of a student
    getSleep() {
        console.log('I am a student, so I regularly sleep 6 hours!');
    }
};

// Define a subclass Developer inheriting from Person
class Developer extends Person {
    // Method to describe sleep habits of a developer
    getSleep() {
        console.log('I am a developer, so I regularly sleep 4 hours!');
    }
};

// Function to get sleep hours of a person
const getSleepHours = (param: Person) => {
    // Call the getSleep method of the provided Person object
    param.getSleep();
}

// Create instances of Person, Student, and Developer classes
const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

// Call the getSleepHours function with different types of Person objects
getSleepHours(person1); // Calls the getSleep method of Person class
getSleepHours(person2); // Calls the getSleep method of Student class
getSleepHours(person3); // Calls the getSleep method of Developer class












    //
}
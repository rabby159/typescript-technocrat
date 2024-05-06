{
    
    //Polymorphism in OOP

    class Person{
        getSleep(){
            console.log('I am normal human, So, I am regularly sleep 8 hours!');
        }
    };

    class Student extends Person{
        getSleep(){
            console.log('I am student, So, I am regularly sleep 6 hours!');
        }
    };

    class Developer extends Person{
        getSleep(){
            console.log('I am developer, So, I am regularly sleep 4 hours!');
        }
    };

    const getSleepHours = (param : Person) =>{
        param.getSleep();
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepHours(person1);
    getSleepHours(person2);
    getSleepHours(person3);












    //
}
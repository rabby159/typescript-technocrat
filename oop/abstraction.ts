{
    //Abstraction in OOP

    interface Vehicle{
        startEngine() : void;
        stopEngine() : void;
        move() : void;
    };

    class Bike implements Vehicle{
        startEngine(): void {
            console.log('I starting engine.');
        };

        stopEngine(): void {
            console.log('I stoping engine');
        };

        move(){
            console.log('I am running engine');
        };

        test(){
            console.log('testing...');
        }
    };

    const bike = new Bike();
    bike.startEngine();
    bike.stopEngine();
    bike.move();
    bike.test();










}
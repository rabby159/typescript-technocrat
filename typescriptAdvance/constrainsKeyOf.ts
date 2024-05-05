{
    /**
 * Generics Constrains with KeyOf operator
 */

    type vehicle = {
        bike : string;
        car : string;
        ship: string;
    };

    type Owner = 'bike' | 'car' | 'ship'; //normal way to literal operator

    type Owner2 = keyof vehicle //same work as like only Owner type.But Owner2 is dynamic as use keyof operator

    const person : Owner2  = "car"


    const getPropertyValue = <X, Y extends keyof X>(obj: X, key : Y) =>{
        return obj[key];
    };

    const user1 = {
        name : 'rabby',
        age: 24,
        address : 'khilgaon'
    };

    const car = {
        model : 'mx-54y',
        registration: 24,
    };

    const result = getPropertyValue(car, 'registration');
}

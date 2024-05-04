"use strict";
{
    const person = "car";
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user1 = {
        name: 'rabby',
        age: 24,
        address: 'khilgaon'
    };
    const car = {
        model: 'mx-54y',
        registration: 24,
    };
    const result = getPropertyValue(car, 'registration');
}

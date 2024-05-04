/**
 * Generics and Interface
 */

interface Developer<T>{
    name : string;
    company : string;
    age : number;
    laptop :  {
        brand : string;
        price : number;
    };
    smartWatch : T
};

const normalDev : Developer<{
    brand : string;
    price : number;
}> = {
    name : 'rabby',
    company : 'eSoft',
    age : 2547,
    laptop : {
        brand : 'Walton',
        price : 30000,
    },
    smartWatch : {
        brand : 'T900 Ultra',
        price : 1500
    }
};

const richDev : Developer<{
    brand : string;
    price : number;
    display : string;
    heartBeat : number;
}> = {
    name : 'mezba',
    company : 'ph',
    age : 2547,
    laptop : {
        brand : 'Mac',
        price : 3000000,
    },
    smartWatch : {
        brand : 'Apple Watch',
        price : 150000,
        display : 'Bionic',
        heartBeat : 86
    }
}
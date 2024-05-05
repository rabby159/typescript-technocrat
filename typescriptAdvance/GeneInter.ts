{
    /**
 * Generics and Interface
 */

//declare interface type
interface Developer<T, X = null>{
    name : string;
    company : string;
    age : number;
    laptop :  {
        brand : string;
        price : number;
    };
    smartWatch : T,
    bike ? : X
};

//genetics type
type TUltra = {
    brand : string;
    price : number;
}

//object using Generics<type>
const normalDev : Developer<TUltra> = {
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

//genetics type
type AppleWatch = {
    brand : string;
    price : number;
    display : string;
    heartBeat : number;
}
interface Suzuky {
    model : number;
}

//object using Generics<type>
const richDev : Developer<AppleWatch, Suzuky> = {
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
    },
    bike : {
        model : 2545
    }
}
}
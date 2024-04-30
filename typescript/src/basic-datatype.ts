//basic datatypes 

//number
let phoneNumber : number = 1254786;

//string
let firstName : string = 'rabby';

//boolean
let isHere : boolean = true;

//null 
let r : null = null;

//undefine 
let value : undefined = undefined;

//typescript power
let a : number;

// a = 'aaaaaah!', [showing error because we define 'a' is a number type data.]
// a = false, [showing error because we define 'a' is a number type data.]
a = 214555


//non primitive data type

//Array 
let friends : string[] = ['jubu', 'roni'];

let postal : number[] = [254, 657, 574];

//Tuple basically is --> Array in process --> Order then --> Type of Value
let coordination : [number, number] = [57, 67];

let ageName : [number, string, boolean] = [24, 'Md Rabby', false];

//Reference type --> Object

const user :{
    companyName : 'MyonBD';  //literal types
    firstName : string;
    middleName ? : string; // use ( ? ) optional types
    lastName : string;
} = {
    companyName : 'MyonBD',
    firstName : 'Md',
    // middleName : 'Rabby',
    lastName : 'Khan'
}

/**
 * Interface
 */

interface User1 {
    name : string;
    age : number;
};

interface UserWithPhone extends User1{
    phone : number;
};

const user1 : UserWithPhone = {
    name :'Rabby',
    age : 22,
    phone : 54785442
}
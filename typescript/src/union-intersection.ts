{

    //Union types ( | )

    type User ={
        name : string;
        email ? : string;
        gender : 'male' | 'female';
        version : 'Basic' | 'Premium' | 'Advance';
    };

    const user : User ={
        name : 'rabby',
        gender : 'male',
        version : 'Premium'
    }



}
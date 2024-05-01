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


    //Intersection types

    type FrontendDev = {
        skills : string[];
        designation1: 'Frontend Developer';
    };

    type BackendDev = {
        skills : string[];
        designation2 : 'Backend Developer';
    }

    type FullStackDev = FrontendDev & BackendDev;

    const fullStackDev : FullStackDev = {
        skills : ['HTML', 'CSS', "TypeScript"],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }


}
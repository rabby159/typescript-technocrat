
{

    //Type Alias 

    type Student = {
        name : string;
        age : number;
        address : string;
        id : number;
        contactNo ? : string;
    };

    const studentA: Student =  {
        name : 'md rabby',
        age: 26,
        address : 'Khilgaon',
        id : 21545,
        contactNo : '2154587220'
    };

    const studentB: Student =  {
        name : 'md roni',
        age: 28,
        address : 'Dhaka',
        id : 21545,
    }

    //Type Alias for function 

    type Add = (num1: number, num2: number) => number;

    const add : Add = (num1, num2) =>{
        return num1 + num2;
    }



}
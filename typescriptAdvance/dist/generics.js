"use strict";
/**
 * Generics
 */
{
    // const rollNumber : number[] = [1, 2, 3]; //normal way
    const rollNumber = [1, 2, 3]; //generics
    // const brotherName : string[] = ['mamun', 'rabby', 'siam']; //normal way
    const brotherName = ['mamun', 'rabby', 'siam']; //generics
    // const isHaveJob : boolean[] = [true, false, false]; //normal way
    const isHaveJob = [true, false, false]; //generics
    //Object Generics
    const user = [
        {
            name: 'md rabby',
            age: 256
        },
        {
            name: 'bijoy',
            age: 654
        }
    ];
    //generics tuple
    const number = [10, 50]; //normal tuple
    const number2 = [10, 50]; //generics tuple
}

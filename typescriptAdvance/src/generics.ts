/**
 * Generics
 */

{
    //array generics
    
    //dynamic generics reusable
    type GenericsArray<T> = Array<T>


    // const rollNumber : number[] = [1, 2, 3]; //normal way
    const rollNumber : GenericsArray<number> = [1, 2, 3] //generics

    // const brotherName : string[] = ['mamun', 'rabby', 'siam']; //normal way
    const brotherName : GenericsArray<string> = ['mamun', 'rabby', 'siam']; //generics

    // const isHaveJob : boolean[] = [true, false, false]; //normal way
    const isHaveJob : GenericsArray<boolean> = [true, false, false]; //generics

}
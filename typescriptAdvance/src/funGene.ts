/**
 * Function with Generics
 */

//normalArray function declare
const normalArray = (param : string) : string[] => {
    return [param];
};

//genericArray function declare
const GenericsArray = <T>(param : T) : T[] => {
    return [param]
};

const result1 = GenericsArray<string>('string')
const result2 = GenericsArray<boolean>(true)
const result3 = GenericsArray<number>(5468)
"use strict";
{
    /**
 * Function with Generics
 */
    //normalArray function declare
    const normalArray = (param) => {
        return [param];
    };
    //genericArray function declare
    const GenericsArray = (param) => {
        return [param];
    };
    const result1 = GenericsArray('string');
    const result2 = GenericsArray(true);
    const result3 = GenericsArray(5468);
}

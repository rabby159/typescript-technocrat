/**
 * Function {
 *  1.Normal Function
 *  2.Arrow Function
 * }
 */

//normal function
function addTotal (num1 : number = 20, num2 : number) : number {
    return num1 + num2;
};

addTotal(5, 7);

//arrow function
const addTotalArr = (num1 : number, num2 : number) : number => num1 + num2;
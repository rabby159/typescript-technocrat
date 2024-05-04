"use strict";
{
    /**
     * Function {
     *  1.Normal Function
     *  2.Arrow Function
     * }
     */
    //normal function
    function addTotal(num1 = 20, num2) {
        return num1 + num2;
    }
    ;
    addTotal(5, 7);
    //arrow function
    const addTotalArr = (num1, num2) => num1 + num2;
    //Object ---> function(method)
    const poorUser = {
        firstName: 'rabby',
        balance: 0,
        addBalance(balance) {
            return `My current balance is ${this.balance + balance}`;
        }
    };
    //array map
    const sum = [1, 2, 5, 6];
    const newArray = sum.map((elem) => elem * elem);
}

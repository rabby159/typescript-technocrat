"use strict";
{
    // ( ? ) this is a Ternary operator | Optional chaining | Nullish coalescing 
    const age = 18;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('nah nah babu tmi ghumaw');
    }
    //ternary operator
    const isAdult = age >= 18 ? 'adult' : 'child';
    console.log(isAdult);
    //nullish coalescing operator
    // (null/undefine) -----> decision making 
    const isUser = null; //null
    const visit = isUser !== null && isUser !== void 0 ? isUser : 'Guest';
    console.log(visit);
    const isUser2 = undefined; //undefine
    const visit2 = isUser !== null && isUser !== void 0 ? isUser : 'Guest';
    console.log(visit);
}

{


/**
 * Type Guard Using typeof & in
 */

type Authentication = string|number;

// Function to add two parameters of type string or number
const add = (param1: Authentication, param2: Authentication): Authentication => {
    // Check if both parameters are numbers using typeof
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        // If both parameters are numbers, perform addition
        return param1 + param2;
    } else {
        // If either parameter is not a number, concatenate them as strings
        return param1.toString() + param2.toString();
    }
};

// Call the add function with string parameters
const result = add("5", "6");
// Print the result
console.log(result);







}


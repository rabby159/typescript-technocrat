{


/**
 * Type Guard Using typeof & in
 */

type Authentication = string|number;

// // Function to add two parameters of type string or number
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

//in guard

// Define type NormalUser
type NormalUser = {
    name: string;
}

// Define type AdminUser
type AdminUser = {
    name: string;
    role: 'Admin';
}

// Function to get user information
const getUser = (user: NormalUser | AdminUser) => {
    // Check if 'role' property exists in user object using 'in' operator
    if ('role' in user) {
        // If 'role' property exists, user is an AdminUser
        console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
        // If 'role' property doesn't exist, user is a NormalUser
        console.log(`My name is ${user.name}`);
    }
}

// Define a NormalUser object
const normalUser: NormalUser = {
    name: 'Mezba bhai',
};

// Define an AdminUser object
const adminUser: AdminUser = {
    name: 'Rabby',
    role: 'Admin'
};

// Call the getUser function with an AdminUser object
getUser(adminUser);








}


/**
 * Constrain In TS
 * 
 * Generic constraints are a powerful feature in TypeScript that allow you to write more flexible and type-safe code. They enable you to create generic functions, classes, and interfaces that work with a wide range of types while still enforcing certain conditions on those types.
 */

const addCourseStudents = <T extends {id: number; name: string; email: string}>(student : T) =>{
    const course = 'Next level dev 2';
    return {
        ...student,
        course
    }
};

const student1 = addCourseStudents({
    id : 213,
    name : 'rabby',
    email : '@gmail.com',
    fee : 5000
});

const student2 = addCourseStudents({
    id : 212,
    name : 'fariya',
    email : '@gmail.com',
    fee : 5500
});
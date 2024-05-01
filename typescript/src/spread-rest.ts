{

    /**
     * Spread Operator
     * Rest Operator
     * Destructuring
     */


    //spread operator
    const bros1 : string[] =['Roni', 'Mizan', 'Jubayer'];
    const bros2 : string[] =['Lal', 'Rana', 'Pavel'];

    bros1.push(...bros2);

    const mentors1 = {
        typeScript : 'Mezba',
        Redux : 'Mir',
        DBMS : 'Mizan'
    };

    const mentors2 = {
        Prisma : 'Firoz',
        Next : 'Tonmoy'
    };

    const mentorsList = {
        ...mentors1,
        ...mentors2
    }

    //rest operator ( ... )
    const bestFriend = (...friends : string[]) =>{
        // console.log(`Hello! ${friend1}, ${friend2}, ${friend3}`);
        friends.forEach((friend : string) => console.log(friend))
    };

    bestFriend('selim', 'ripon', 'rasel', 'juwel');

}
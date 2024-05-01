{


    //Object Destructuring 

    const myInfo = {
        age : 24,
        name : {
            firstName : 'Md',
            lastName : 'Rabby'
        },
        phoneNumber : 245785545
    };

    const {age, name : {firstName}} = myInfo;


    //array destructing
    const friends = ['faria', 'emon', 'jesica', 'rafi', 'masud'];

    const [, bestFriend, ...rest] = friends;



}
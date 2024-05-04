/**
 * Asynchronous in TypeScript
 */

{

    //Promise 
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data : string = 'something'
            if(data){
                resolve(data);
            }
            else{
                reject('fail to load data');
            }
        })
    }





}
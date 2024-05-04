/**
 * Asynchronous in TypeScript
 */

{

    //Promise 
    const createPromise = () : Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data : string = 'something'
            if(data){
                resolve(data);
            }
            else{
                reject('fail to load data');
            }
        })
    }

    //async, await
    const showData = async() =>{
        const data : string = await createPromise();
        return data;
        // console.log(data);
    };

    showData();





}
{
    /**
 * Types assertion/ Types Narrowing
 */
//-------------------------------------------
// let anything : any;

// anything = 'Types assertion';

// anything = 21547;

// (anything as number).toFixed();

//-------------------------------------------
// let anything : any;

// anything = 'Types assertion';

// anything = 21547;

// (anything as string).includes

//-------------------------------------------

const kgTGm = (value : string | number) : number | string | undefined =>{
    if(typeof value === 'string'){
        const convertedValue = parseFloat(value) * 1000;
        return convertedValue;
    }
    if(typeof value === "number"){
        return value * 1000;
    }
};

const result1 = kgTGm(1000) as number;
const result2 = kgTGm("One Thousand Taka") as string; 

//Here 'as' means, when I am developer and I know the better to find type then typescript.
}
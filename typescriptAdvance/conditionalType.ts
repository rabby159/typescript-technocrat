{
    //Conditional Type

    type a1 = null;
    type b1 = undefined;

    type X = a1  extends null ? true : false; //conditional type

    type Y = a1 extends null ? true : b1 extends undefined ? undefined : any; 
}
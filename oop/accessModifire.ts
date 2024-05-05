{
    //Access Modifiers 

    class BankAccount {
       public readonly no : number;
       public name : string;
       private _balance : number;
       protected details : string;


        constructor(no : number, name : string, _balance : number, details : string){
            this.no = no;
            this.name = name;
            this._balance = _balance;
            this.details = details;
        };

        addAmount = (amount : number) => {
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance;
        }
    }

    class SubBank extends BankAccount {
        check(){
            this.details; 
        }
    }

    const poorAccount = new BankAccount(214, 'rabby', 20, 'This is personal only my child can access')
    poorAccount.addAmount(55);

    const currentBalance = poorAccount.getBalance();
    console.log(currentBalance);







}
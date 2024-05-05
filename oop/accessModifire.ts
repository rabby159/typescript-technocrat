{
    //Access Modifiers 

    class BankAccount {
       public readonly no : number;
       public name : string;
       private balance : number;


        constructor(no : number, name : string, balance : number){
            this.no = no;
            this.name = name;
            this.balance = balance;
        };

        addAmount = (amount : number) => {
            this.balance = this.balance + amount;
        }

        getBalance(){
            return this.balance;
        }
    }


    const poorAccount = new BankAccount(214, 'rabby', 20)
    poorAccount.addAmount(55);

    const currentBalance = poorAccount.getBalance();
    console.log(currentBalance);







}
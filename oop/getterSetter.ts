{

    //Getter and Setter

    // Define a class BankAccount
class BankAccount {
    // Public readonly property
    public readonly no: number;
    // Public property
    public name: string;
    // Private property
    private _balance: number;
    // Protected property
    protected details: string;

    // Constructor
    constructor(no: number, name: string, _balance: number, details: string) {
        this.no = no;
        this.name = name;
        this._balance = _balance;
        this.details = details;
    };
    //setter
    set deposite(amount : number){
        this._balance = this._balance + amount;
    }

    //getter
    get Balance(){
        return this._balance;
    }
}

// Create an instance of BankAccount
const poorAccount = new BankAccount(214, 'rabby', 20, 'This is personal only my child can access');
poorAccount.deposite = 100;

const currentBalance = poorAccount.Balance; //as like property 

console.log(currentBalance);










}
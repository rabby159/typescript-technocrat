{
// Access Modifiers 

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

    // Method to add amount to the balance
    addAmount = (amount: number) => {
        this._balance = this._balance + amount;
    }

    // Method to get the balance
    getBalance() {
        return this._balance;
    }
}

// Define a subclass SubBank inheriting from BankAccount
class SubBank extends BankAccount {
    // Method to check details (protected property accessible)
    check() {
        this.details;
    }
}

// Create an instance of BankAccount
const poorAccount = new BankAccount(214, 'rabby', 20, 'This is personal only my child can access')
// Add amount to the account
poorAccount.addAmount(55);

// Get the current balance
const currentBalance = poorAccount.getBalance();
// Print the current balance
console.log(currentBalance);








}
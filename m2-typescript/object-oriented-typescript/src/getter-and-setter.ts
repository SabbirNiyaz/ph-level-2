//! Getter and Setter in TypeScript

class BackAccount {
    readonly _userId: number; //? By default public
    _userName: string; //? By default public
    private _userBalance: number; //? Only accessible within the class
    protected _accountType: string; //? Accessible within the class and subclasses

    constructor(userId: number, userName: string, userBalance: number, accountType: string) {
        this._userId = userId;
        this._userName = userName;
        this._userBalance = userBalance;
        this._accountType = accountType;
    }

    //TODO Setter
    set addBalance(amount: number) {
        this._userBalance += amount; 
    }
    //TODO Getter
    get getBalance() {
        return this._userBalance;
    }
}



const ba1 = new BackAccount(1, "Sabbir", 50000000, "Savings");

ba1._userName = "Sabbir Hossain Niyaz";
ba1.addBalance = 1000000;
ba1.addBalance = 16000000;
ba1.addBalance = 676000000;

// console.log(ba1);
console.log(ba1.getBalance);

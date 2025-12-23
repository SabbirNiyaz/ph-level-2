//! Access Modifiers (public, private, protected, readonly)

class BackAccount {
    readonly userId: number; //? By default public
    userName: string; //? By default public
    private userBalance: number; //? Only accessible within the class
    protected accountType: string; //? Accessible within the class and subclasses

    constructor(userId: number, userName: string, userBalance: number, accountType: string) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
        this.accountType = accountType;
    }

    addBalance(amount: number) {
        this.userBalance += amount; //TODO Modifying private property within the class
    }
}

class StudentBankAccount extends BackAccount {
    test() {
        this.accountType = "Student"; //TODO Accessible due to protected modifier
    }
}

const ba1 = new BackAccount(1, "Sabbir", 50000000, "Savings");
const ba2 = new BackAccount(1, "Niyaz", 10000000, "Current");

//? ba1.userId = 123; // Error: Cannot assign to 'userId' because it is a read-only property.
ba1.userName = "Sabbir Hossain Niyaz";
//? ba1.userBalance -= 50000000; // Error: Property 'userBalance' is private and only accessible within class 'BackAccount'.
ba1.addBalance(1000000);

console.log(ba1);
console.log(ba2);

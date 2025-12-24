//! Encapsulation: The 4th pillar of OOP
// Encapsulation is the bundling of data (properties) and methods (functions) that operate on that data into a single unit or class.
// It restricts direct access to some of an object's components, which is a means of preventing unintended interference and misuse of the methods and data.
// Access modifiers (public, private, protected) are used to implement encapsulation in TypeScript.     


class BackAccount {
    //? Use encapsulation to protect sensitive data
    readonly userId: number;
    userName: string; //? By default public
    private userBalance: number; //? Only accessible within the class
    protected accountType: string; //? Accessible within the class and subclasses

    constructor(userId: number, userName: string, userBalance: number, accountType: string) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
        this.accountType = accountType;
    }

    private addBalance(amount: number) {
        this.userBalance += amount; //TODO Modifying private property within the class
    }

    userBalanceInfo(newBalance: number) {
        this.addBalance(newBalance); //TODO Accessing private method within the class
    }
}


const ba1 = new BackAccount(1, "Sabbir", 50000000, "Savings");
const ba2 = new BackAccount(1, "Niyaz", 10000000, "Current");

ba1.userBalanceInfo(123456789);


console.log(ba1);
console.log(ba2);

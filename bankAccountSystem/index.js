class BankAccount{
    #balance;
    constructor(ownerName, balance){
        this.ownerName = ownerName;
        this.#balance = balance;
    }
    checkInputAmount(amount){
        if (typeof(amount) !== "number"){
            console.log(`${amount} is not a number!`);
            return false;
        }else if (amount <= 0){
            console.log("Amount must be greater than or equal to 0!");
            return false;
        }
        return true;
    }
    deposit(amount){
        if (this.checkInputAmount(amount)){
            this.#balance += amount;
            console.log(`Your depositing request succeeded`);           
        }
    }
    withdraw(amount){
        if (this.checkInputAmount(amount)){
            if(amount > this.#balance){
                console.log(`Your withdrawing request failed!\nYour current balance is ${this.#balance}, you can't withdraw ${amount}!`);    
            }else{
            this.#balance -= amount;
            console.log(`Your withdrawing request succeeded`);
            }
        }
    }
    getBalance(){
        return this.#balance;
       }
}
//Part 3
const account = new BankAccount("Ali", 100);
//The problem is =>
//Ali's current balance is 100, he can't withdraw 150!
account.withdraw(150);
console.log(account.getBalance());
//Part 4
account.deposit(60);
account.withdraw(110);
console.log(account.getBalance()); // 50
account.withdraw(100); // request failed
console.log(account.getBalance()); // still 50
//Part 5
account.balance = -1000;
console.log(account.getBalance());//50
/*account.balance = -1000 creates a new public property called balance.
The real balance is stored in #balance.
getBalance() returns #balance, which is still 50.*/
console.log(account.balance);//-1000
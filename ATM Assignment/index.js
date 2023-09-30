import inquirer from "inquirer";
import chalk from "chalk";
let userArr = [{ id: "talha", pin: 11 }];
userArr.push({ id: "tk", pin: 911 });
console.log(userArr);
class account {
    id;
    pin;
    balance;
    transectionHistory;
    constructor(id, pin) {
        this.id = id;
        this.pin = pin;
        this.balance = 1000;
        this.transectionHistory = [];
    }
    async transection() {
        const option = await inquirer.prompt({
            type: 'list',
            name: 'options',
            message: 'What do you want to do?',
            choices: ["Check balance", "Withdraw Money", "Check transection history", "Log out"] ///////////////////////////////////////
        });
        switch (option.options) {
            case "Check balance":
                this.checkBalance();
                this.transection();
                break;
            case "Withdraw Money":
                await this.withdraw();
                this.transection();
                break;
            case "Check transection history":
                this.transectionHistory.forEach((data) => {
                    console.log("History is ", chalk.yellowBright(data));
                });
                //console.log(`Transection history is ${this.transectionHistory} \n`);
                this.transection();
                break;
            case "Log out":
                welcome();
                break;
        }
    }
    //functions 
    // Login 
    async login() {
        this.transection();
    }
    checkBalance() {
        console.log(chalk.green(`Your balance is ${this.balance}`));
    }
    async withdraw() {
        const enter = await inquirer.prompt({
            type: 'number',
            name: 'MoneyToWithdraw',
            message: 'How much Money you want to withdraw?',
        });
        const money = enter.MoneyToWithdraw;
        if (money > this.balance) {
            console.log("insufficiet balance");
        }
        else if (money < 0) {
            console.log(chalk.red("Error you entered negative amount"));
        }
        else {
            this.balance -= enter.MoneyToWithdraw;
            this.transectionHistory.push(`Money withdrawn ${enter.MoneyToWithdraw} and remaining balance is ${this.balance} \n`);
            console.log("Withdraw successful new amount is ", this.balance);
        }
    }
}
//class register
class register {
    id;
    pin;
    constructor(_id, _pin) {
        this.id = _id;
        this.pin = _pin;
        userArr.push({ id: _id, pin: _pin });
    }
}
async function welcome() {
    console.log("Welcome to ATM");
    let startAtm = await inquirer.prompt([{
            type: 'list',
            name: 'LogOrRegis',
            message: 'Login or Register',
            choices: ['Login', 'Register', 'Exit']
        }]);
    switch (startAtm.LogOrRegis) {
        case 'Login':
            const newLogin = await inquirer.prompt([{
                    type: 'input',
                    name: 'ID',
                    message: 'Enter your ID',
                }, { type: 'number',
                    name: 'PIN',
                    message: 'Enter your PIN' }]);
            var responsed = false;
            for (let i = 0; i < userArr.length; i++) {
                if (String(newLogin.ID) === String(userArr[i].id) && Number(newLogin.PIN) === userArr[i].pin) {
                    console.log("Login successful");
                    const login = new account(newLogin.ID, newLogin.PIN);
                    login.login();
                    var responsed = true;
                    break;
                }
            }
            if (!responsed) {
                console.log("invalid ID or PIN try again");
                welcome();
            }
            break;
        case 'Register':
            const NewPerson = await inquirer.prompt([{
                    type: 'input',
                    name: 'ID',
                    message: 'Enter your ID',
                    validate: (input) => {
                        for (let i = 0; i < userArr.length; i++) {
                            if (String(input) === String(userArr[i].id)) {
                                return 'ID is taken already';
                            }
                        }
                        return true;
                    }
                }, { type: 'number',
                    name: 'PIN',
                    message: 'Enter your PIN',
                    validate: (input) => {
                        if (isNaN(input)) {
                            return "Enter numbers only";
                        }
                        return true;
                    } }
            ]);
            const newUser = new register(NewPerson.ID, NewPerson.PIN);
            welcome();
            break;
        case "Exit":
            return;
    }
}
welcome();

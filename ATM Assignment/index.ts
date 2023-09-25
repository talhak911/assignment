import inquirer from "inquirer";
class account{
    private id:string|number;
    private pin:number;
    private balance: number;
    private transectionHistory:string[]

    constructor (id:string|number,pin:number){
        this.id=id;
        this.pin=pin;
        this.balance=1000
        this.transectionHistory=[]
    }

async check(){
    const option=await inquirer.prompt({
        type:'list',
        name:'options',
        message:'What do you want to do?',
        choices:["Check balance","Withdraw Money","Check transection history","Exit"] ///////////////////////////////////////
    })
    switch (option.options){
    case "Check balance":
        this.checkBalance();
        console.log(" ");
        
        this.check()
        break;

        case "Withdraw Money":
            this.withdraw()
            console.log(" ");
        
        this.check()
        break;
    case "Exit":
        return 
        break;
        
    }

}

//functions 
checkBalance(){
    console.log(`Your balance is ${this.balance}`);
    
}
 async withdraw(){
    const enter = await inquirer.prompt({
    type:'number',
    name:'MoneyToWithdraw',
    message:'How much Money you want to withdraw?',
    }) 
const money=enter.MoneyToWithdraw;
    if (money>this.balance)
       { console.log("insufficiet balance")}
    else {
        this.balance-=enter.MoneyToWithdraw
        console.log("Withdraw successful new amount is ", this.balance);
        
    }
        
    }
}

const user1=new account(1,32)
user1.check()


/*
 User should login by entering his/her unique account number and a secret PIN
- User can check account balance 
- User can withdraw money 
- User can check his/her previous transections in the current login
- User should be asked at the end of each function that if he/she wants
  to end transections or perform any other transections if the user choose
  more transections he/she must be shown all the options again and he / she can
  perform any transections.

*/
import inquirer from "inquirer";
import chalk from "chalk"
let userArr:{id:string,pin:number}[]=[{id:"talha",pin:11}]
userArr.push({id:"tk",pin:911})
console.log(userArr);


class Account{
    private id:string|number;
    private pin:number;
    private balance: number;
    private transactionHistory:string[]

    constructor (id:string|number,pin:number){
        this.id=id;
        this.pin=pin;
        this.balance=1000
        this.transactionHistory=[]

    }

async transaction(){
    const option=await inquirer.prompt({
        type:'list',
        name:'options',
        message:'What do you want to do?',
        choices:["Check balance","Withdraw Money","Check transaction history","Log out"] ///////////////////////////////////////
    })
    switch (option.options){
    case "Check balance":
        this.checkBalance();
        this.transaction()        
        
        break;

        case "Withdraw Money":
           await this.withdraw();
           this.transaction() ;
        break;
        case "Check transaction history":
            this.transactionHistory.forEach((data)=>{console.log("History is ", chalk.yellowBright(data));
            })
            //console.log(`Transection history is ${this.transactionHistory} \n`);
            this.transaction()
            break;
            
    case "Log out":
        welcome()
        break;
        
        
    }
   

}

//functions 

// Login 
public async login()
{
this.transaction()


}

checkBalance(){
    console.log(chalk.green(`Your balance is ${this.balance}`));
    
}
 async withdraw(){
    const enter = await inquirer.prompt({
    type:'number',
    name:'MoneyToWithdraw',
    message:'How much Money you want to withdraw?',
    validate:(input)=>{if (isNaN(input)){return 'Enter valid number'} return true}
    }) 
const money=enter.MoneyToWithdraw;
    if (money>this.balance)
       { console.log("insufficiet balance")}
    else if (money<0)
    {console.log(chalk.red("Error you entered negative amount"))}
    else
    {
        this.balance-=enter.MoneyToWithdraw
        this.transactionHistory.push(`Money withdrawn: ${enter.MoneyToWithdraw} and remaining balance is: ${this.balance} \n`)
        console.log("Withdraw successful new amount is ", this.balance);
        
    }
        
    }
}


//class register
class Register{
    private id:string|number;
    private pin: number;
    constructor(_id:string,_pin:number){
     
        this.id=_id;
        this.pin=_pin;
        userArr.push({ id: _id, pin: _pin });
        
    }
        


    }

async function welcome(){
    try{
    console.log(chalk.bold.whiteBright("\n Welcome to ATM\n"));
    
let startAtm=await inquirer.prompt([{
    type:'list',
    name:'LogOrRegis',
    message:'Login or Register',
    choices:['Login','Register','Exit']

}]);
switch(startAtm.LogOrRegis){
    case 'Login':
        const newLogin=await inquirer.prompt([{
            type:'input',
             name:'ID',
             message:'Enter your ID',
        },{ type:'number',
             name:'PIN',
             message:'Enter your PIN'}])
        var responsed:boolean=false
             for(let i=0;i<userArr.length;i++){
                if(String(newLogin.ID) === String(userArr[i].id)&& Number(newLogin.PIN)===userArr[i].pin){
                  console.log(chalk.green("Login successful"))
                  const login=new Account(newLogin.ID,newLogin.PIN);
                  login.login();
                  var responsed:boolean=true;
                  break;               
        }
        

     }
     if (!responsed){console.log(chalk.red("invalid ID or PIN try again \n"))
        welcome();
        }



        break
    case 'Register':
        const NewPerson=await inquirer.prompt([{
           type:'input',
            name:'ID',
            message:'Enter your ID',
        validate:(input)=>{
             for(let i=0;i<userArr.length;i++){
            if(String(input)===String(userArr[i].id)){
             return 'ID is taken already';
               
    }
   
        }
        return true
        }},{ type:'number',
            name:'PIN',
            message:'Enter your PIN',
            validate:(input)=>{
                if (isNaN(input))
                {return "Enter numbers only"}
                return true
            }}
        ])

      const newUser=new Register(NewPerson.ID,NewPerson.PIN)
     
      welcome()
      break;
      case "Exit":
        return       
}
    }
    catch (error){
        console.log("Error is ",error);
        
    }
}
welcome()

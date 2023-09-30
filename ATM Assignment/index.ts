import inquirer from "inquirer";
let userArr:{id:string,pin:number}[]=[{id:"tk",pin:1}]

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

async transection(){
    const option=await inquirer.prompt({
        type:'list',
        name:'options',
        message:'What do you want to do?',
        choices:["Check balance","Withdraw Money","Check transection history","Log out"] ///////////////////////////////////////
    })
    switch (option.options){
    case "Check balance":
        this.checkBalance();
        this.transection()        
        
        break;

        case "Withdraw Money":
           await this.withdraw();
           this.transection() ;
        break;
        case "Check transection history":
            console.log(`Transection history is ${this.transectionHistory} \n\n`);
            this.transection()
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
// const logon=await inquirer.prompt([
//     {type:'input',
//     name:'ID',
//     message:'Enter your ID'},
//     {type:'number',
//     name:'PIN',
//     message:'Enter your PIN'}
    
   
    
// ])
// if(logon.ID===this.id && logon.PIN===this.pin){
// console.log("Log in successful");
this.transection()
// }
// else {
//     console.log("Invalid ID or Pin ");
//     console.log("Try again");
//     this.login();
    
// }

}

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
    else if (money<0)
    {console.log("Error you entered negative amount")}
    else
    {
        this.balance-=enter.MoneyToWithdraw
        this.transectionHistory.push(`Money withdrawn ${enter.MoneyToWithdraw} and remaining balance is ${this.balance} \n`)
        console.log("Withdraw successful new amount is ", this.balance);
        
    }
        
    }
}


//class register
class register{
    private id:string|number;
    private pin: number;
    constructor(_id:string,_pin:number){
     
        this.id=_id;
        this.pin=_pin;    
    }
        


    }

async function welcome(){
    console.log("Welcome to ATM");
    
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
                if(newLogin.ID===userArr[i].id && newLogin.PIN==userArr[i].pin){
                  console.log("Login successful")
                  const login=new account(newLogin.ID,newLogin.PIN);
                  login.login();
                  var responsed:boolean=true;
                  break;               
        }
        if (!responsed){console.log("invalid ID or PIN try again")
        welcome();
        }

     }


    //    const newlogin1=new account(newLogin.ID,newLogin.PIN)
    //    newlogin1.login()
        break
    case 'Register':
        const NewPerson=await inquirer.prompt([{
           type:'input',
            name:'ID',
            message:'Enter your ID',
        validate:(input)=>{
             for(let i=0;i<userArr.length;i++){
            if(input===userArr[i].id){
             return 'ID is taken already';
               
    }
    return true     
            
        }
        }},{ type:'number',
            name:'PIN',
            message:'Enter your PIN'}])

      const newUser=new register(NewPerson.ID,NewPerson.PIN)
      userArr.push({ id: NewPerson.id as string, pin: NewPerson.pin });
      //const newUserLog=new account(NewPerson.ID,)
      case "Exit":
        return       
}
}
welcome()

// const user1=new account(911,1122)
// user1.login()


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
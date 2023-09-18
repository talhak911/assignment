import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.bgBlack.yellow("***Calculator***"));

try{
async function calculate() {
    let calculate=await inquirer.prompt(
        [
        {
            type: 'number',
            name:'num1',
            message:'Enter 1st number'
        },
        {
            type: 'list',
            name:'operator',
            message:'Enter operator',
            choices :['+','*','-','/','mod','^']
        },
        {
            type: 'number',
            name:'num2',
            message:'Enter 2nd number'
        }
        ]

    )    
        if (calculate.operator=='/' && calculate.num2==0){
            throw new Error("Undefined")
        }
        let result;
    switch (calculate.operator)
    {
        case '+':
        result=calculate.num1+calculate.num2;
        break;
        case '-':
        result=calculate.num1-calculate.num2;
        break;
        case '*':
        result=calculate.num1*calculate.num2;
        break;
        case '/':
        result=calculate.num1/calculate.num2;
        break;
        case 'mod':
        result=calculate.num1%calculate.num2;
        break;
        case '^':
            result=calculate.num1**calculate.num2
        
        break;
    }
    console.log("Result is ",chalk.bgBlack.yellow(result));
    
}
calculate();
}
catch(error) {
    console.log("Error is ",error);
    
}
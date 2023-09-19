import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlack.yellow("***Calculator***"));
async function calculate() {
    try {
        let input = await inquirer.prompt([
            {
                type: 'number',
                name: 'num1',
                message: 'Enter 1st number'
            },
            {
                type: 'list',
                name: 'operator',
                message: 'Enter operator',
                choices: ['+', '*', '-', '/', 'mod', '^']
            },
            {
                type: 'number',
                name: 'num2',
                message: 'Enter 2nd number',
                validate: (input, answers) => {
                    if (answers.operator === '/' && input === 0) {
                        throw new Error(chalk.red("Divide by zero not possible"));
                    }
                    return true;
                }
            }
        ]);
        let result;
        switch (input.operator) {
            case '+':
                result = input.num1 + input.num2;
                break;
            case '-':
                result = input.num1 - input.num2;
                break;
            case '*':
                result = input.num1 * input.num2;
                break;
            case '/':
                result = input.num1 / input.num2;
                break;
            case 'mod':
                result = input.num1 % input.num2;
                break;
            case '^':
                result = input.num1 ** input.num2;
                break;
        }
        console.log("Result is ", chalk.bgBlack.yellow(result));
        let another = await inquirer.prompt([
            {
                type: 'list',
                name: 'again',
                message: 'Want to perform another operation',
                choices: ['Yes', 'No']
            }
        ]);
        if (another.again === 'Yes') {
            calculate();
        }
    }
    catch (error) {
        console.log("Error is ", error);
    }
}
calculate();

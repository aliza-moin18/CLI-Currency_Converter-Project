#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBp', 'INR', 'PKR']
    },
    {
        name: "To",
        message: "Enter To Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBp', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter from Amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.To];
let amount = user_answer.amount;
if (isNaN(amount) || amount <= 0) {
    console.log(chalk.inverse("Please enter a valid positive numbers for amount!"));
}
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.magenta `Entered Amount ${amount}`);
console.log(chalk.yellow `From Currency ${fromAmount}`);
console.log(chalk.green `Converted Amount ${convertedAmount.toFixed(2)}`);
console.log(chalk.blue `To Currency ${toAmount}`);

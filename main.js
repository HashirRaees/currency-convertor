#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.redBright("\n\tWELCOME\n\t"), chalk.blueBright.italic("\nCurrency Convertor By Hashir Raees\n"));
const currency = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "From",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "To",
        message: "Enter To currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.From];
let toAmount = currency[user_answer.To];
let amount = user_answer.amount;
let baseAMount = amount / fromAmount; // USD base currency
let convertedAmount = baseAMount * toAmount;
console.log(convertedAmount);

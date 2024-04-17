#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollars
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin number");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount to withdraw",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(`"Insufficient balance. Your current balance is: " ${myBalance}`);
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`"Your remaining balance is: " ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fastcash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Choose your amount",
                type: "list",
                choices: [1000, 3000, 5000, 7000, 10000]
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(`"Your current balance is: " ${myBalance}`);
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`"Your remaining balance is: " ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`"Your balance is: " ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}

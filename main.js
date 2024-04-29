#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollars
let myPin = 1357; // Pincode
async function main() {
}
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"],
        }
    ]);
    console.log(operationAns.operation);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: 'amount',
                message: "Enter your Amount",
                type: "number",
            }
        ]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log("Amount Successfully withdrawl \n Your remaiing balance is:" + myBalance);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your current balance is :" + myBalance);
    }
    else if (operationAns.operation === "fastcash") {
        let fast = await inquirer.prompt([{
                name: "fast_opt",
                message: "How much you want to withdraw",
                type: "list",
                choices: ["1000", "2000", "5000"]
            }]);
        if (fast.fast_opt === "1000") {
            myBalance -= fast.fast_opt;
            console.log(`Your remaining blance is : ${myBalance}`);
        }
        if (fast.fast_opt === "2000") {
            myBalance -= fast.fast_opt;
            console.log(`Your remaining blance is : ${myBalance}`);
        }
        if (fast.fast_opt === "5000") {
            myBalance -= fast.fast_opt;
            console.log(`Your remaining blance is : ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect Pin Number");
}
main();

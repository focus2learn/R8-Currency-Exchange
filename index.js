#!/usr/bin/env node
// CURRECNCY CONVERSION ONLINE CLASS-8, Ramadan April 2024
// coding by Naushad Hussain, class(Sunday 9-12), by focus2learn.
// import packages
import inquirer from "inquirer";
import chalk from "chalk";
// Assigned loop variable
let condition = true;
// Loop for further operations
while (condition) {
    //  Assigned Object Varibale values
    const currency = {
        USD: 1,
        EUR: 0.91,
        GBP: 0.76,
        INR: 74.57,
        PKR: 280
    };
    console.clear(); // clear screen before user input
    // Display Exchanger name
    console.log(chalk.green("\n\n\t................. Focus2Learn CURRENCY EXCHANGER ..............."));
    // Get group user input
    let useramount = await inquirer.prompt([
        {
            name: "from",
            message: "\n\n\t Enter Currency Exchange From...........",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
        {
            name: "to",
            message: "\n\t Enter Currency Exchange To ............",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
    ]);
    // Get Amount from user to exchange
    let useramount2 = await inquirer.prompt({
        name: "amount",
        message: `\n\t Enter Currency Amount Exchange From ... ${chalk.blue(useramount.from)}`,
        type: "number"
    });
    // Calculations...to convert or exchange currency.
    let fromamount = currency[useramount.from];
    let toamount = currency[useramount.to];
    let amount = useramount2.amount;
    let baseamount = amount / fromamount;
    let convertedamount = baseamount * toamount;
    // Display processed data and output format.
    console.log(chalk.green("\n\n\t..................... CURRENCY EXCHANGE RATES ................."));
    console.log("\n\n\t Currency Exchange Rates From..........  " + chalk.yellow(useramount.from) + " " + fromamount);
    console.log("\n\t Currency Exchange Rates To............  " + chalk.green(useramount.to) + " " + toamount);
    console.log("\n\t Currency Exchange Amount From.........  " + chalk.yellow(useramount.from) + " " + amount);
    console.log("\n\t Exchanged Amount To...................  " + chalk.green(useramount.to) + " " + convertedamount + "\n");
    console.log(chalk.green("\n\t.......................... by focus2learn ......................\n"));
    // repeat confirmation by user input
    let repeat1 = await inquirer.prompt({
        name: "addmore",
        type: "confirm",
        message: chalk.blue("\n\tDo You Want to Exchange More Currency..."),
        default: false,
    });
    condition = repeat1.addmore;
}
// End of coding.. by focus2learn.

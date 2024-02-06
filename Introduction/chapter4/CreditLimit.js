let prompt = require("prompt-sync")();

accountNumber = prompt("Enter your account number: ");
beginningBalance = prompt("Enter balance at the beginning of the month: ");
itemsCharged = prompt("Enter total of all items charged by the customer this month: ");
creditsApplied = prompt("total of all credits applied to the customer’s account this month: ");
creditAllowed = prompt("allowed credit limit: ");

newBalance = newBalance(beginningBalance,itemsCharged,creditsApplied);
(newBalance > creditAllowed)? console.log(`The new balance is ${newBalance} and Credit limit exceeded`) : console.log(`The new balance is ${newBalance}`)




function newBalance(balance,charges,credits){
  return balance + charges - credits;
}
let prompt = require("prompt-sync")();



const weeklySalary = 200;
const grossPercent = 9;

let itemSold = () => {
    let sum = 0;
    let itemAmount = 0;
    
    while(itemAmount !== -1){
    itemAmount = parseFloat(prompt("Enter amount of the item: (press -1 to exit): "));
    if(itemAmount === -1){break;}
    sum += itemAmount;
}
console.log(`Your earning is $${((sum * grossPercent)/100)+weeklySalary}`)

}



let continueLoop = true;

while(continueLoop){
        itemSold();
  
        let answer = prompt("Do you want to continue? ");
    
        if(answer.toLowerCase() === "no"){
           continueLoop = false;
        }
       
    
    }






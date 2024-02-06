let prompt = require("prompt-sync")();

 
let max = 0;

for (let index = 1; index <= 10; index++) {
    let salesValue = parseFloat(prompt("Enter number of units sold by each sales person: "));

    
   
    if(max < salesValue){
        max = salesValue;
        
    }

}
console.log(`The highest sales is ${max}`);
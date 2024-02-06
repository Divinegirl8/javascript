let prompt = require("prompt-sync")()
const {avg} = require("./average")


gallonUsed = 0; 

let sumGallon = 0;
let sumMiles = 0;

while (gallonUsed != -1){
    gallonUsed = parseFloat(prompt("Enter the gallons used (-1 to end): "));
    if(gallonUsed == -1){break;}
    sumGallon += (gallonUsed);
    console.log(sumGallon);
   

    milesDriven = parseFloat(prompt("Enter the miles driven: "));
    sumMiles += parseFloat(milesDriven);
    
    result = avg(milesDriven,gallonUsed);
    console.log(`Miles per gallon for this trip is ${result}`);
   
}

let total = (sumMiles / sumGallon).toFixed(6);

console.log(`The total of all trips is ${total}`)

let prompt = require("prompt-sync")();

for (let index = 0; index < 3; index++) {
    let citizensName = prompt("Enter citizen name: ")
    let earnings = parseInt(prompt("Enter earnings: "))

    if(earnings > 30000){
        let tax = (earnings * 15)/100;
        console.log(`your tax is $${tax}`)
    }
    else{
        console.log(`your tax is $${(earnings * 20)/100}`)
    }
    
}
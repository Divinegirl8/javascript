let numbers = []
for (let index = 1; index <= 20 ; index++) {
   numbers.push(index)    
}

let newValue = []

newValue = numbers.map(((number)=>number * number))
console.log(newValue)
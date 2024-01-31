let numbers = []
for (let index = 1; index <= 20 ; index++) {
   numbers.push(index)    
}

let newArray = []
newArray = numbers.filter((word) => word % 2 == 0)
console.log(newArray)
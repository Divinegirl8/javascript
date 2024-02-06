const {sum} = require('./index')

test("add a and b",() =>{
let a = 2;
let b = 4;
 let result  = sum(a,b);
 expect(result).toBe(6);
})
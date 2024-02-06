const{newBalance} = require("./CreditLimit");

test("function can sum and subtract",()=>{
    expect(newBalance(10,2,4)).toBe(8);
})
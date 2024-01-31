let hcf = [];
let input = [6,3];

for (let divisor = 2; divisor <= Math.min(...input); divisor++) {
    let allDivisible = true;

    for (let value of input) {
        if (value % divisor !== 0) {
            allDivisible = false;
            break; 
        }
    }

    if (allDivisible) {
        hcf.push(divisor);
    }
}

console.log(hcf);



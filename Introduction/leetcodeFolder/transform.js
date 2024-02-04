function plusOne(n){return n + 1;}
function plusI(n,i){return n + i;}
function constant(){return 42;}

var map = function(arr, fn) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
       let value = fn(arr[i],i);
       newArray.push(value);
        
    }
    return newArray;
};

array = [1,2,3]
console.log(map(array,plusOne))
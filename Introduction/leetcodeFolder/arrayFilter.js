function greaterThan10(n) { return n > 10; }
function firstIndex(n, i) { return i === 0; }
function plusOne(n) { return n + 1; }

var filter = function(arr, fn) {
    let newArray = [];

    for (let index = 0; index < arr.length; index++) {
        const element = fn(arr[index],index);
        if(element == true ||  element != 0){
        newArray.push(arr[index]);}
        
    }
    return newArray;
    
};

array = [-2,-1,0,1,2]
console.log(filter(array,plusOne))


var expect = function(val) {
    return {
    toBe : (value) => {
        if (val === value) { return true; }
        else{ throw new Error("Not Equal");}
    },
    notToBe : (value2) =>{
        if(val !== value2){  return true}
         else{throw new Error("Equal")};
    },
    
}};



console.log(expect(5).notToBe(5));
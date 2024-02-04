

var reduce = function(nums, fn, init) {
    if(nums.length === 0){
        return init
    }

    let res = init;
    

    for (let index = 0; index < nums.length; index++) {
        const element = fn(init,nums[index]);
        res += element;
        
        
    }
    return res;
};



nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr;}
init = 0;
console.log(reduce(nums,fn,init));



nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr;}
init = 100;
console.log(reduce(nums,fn,init));

nums = []
fn = function sum(accum, curr) { return 0; }
init = 25;
console.log(reduce(nums,fn,init));

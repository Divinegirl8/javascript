var createCounter = function(init) {
    let currentCount = init;
    return{
    increment : () =>{
        currentCount += 1;   
        return currentCount;
    },

    decrement : () => {
      currentCount -= 1;
      return currentCount;
    },

    reset : () => {
        currentCount = init;
        return currentCount;
    }

};

    
};

const counter = createCounter(5);
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())






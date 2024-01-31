let arr = [[200,50,300,5],[10,25,7,100],[25,20,70,45],[500,170,11,35]];

arr[1].pop()
console.log(arr[1])



let new_array = []
for(let index = 0; index < arr.length-1;index++){
   new_array[index] = arr[1][index];
}
console.log(new_array)
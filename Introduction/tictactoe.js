var length = 3;
var width = 3;
var obj = [
{row : 0, col : 0, value : "X"},
{row : 0, col : 1, value : "X"},
{row : 0, col : 2, value : "O"},
{row : 1, col : 0, value : "O"},
{row : 1, col : 2, value : "X"},
{row : 2, col : 0, value : "X"},
{row : 2, col : 1, value : "O"},
{row : 2, col : 2, value : "O"}


];


const tictactoe = (values,length,width) => {

    result = [[],[],[]]
 

    for(let index = 0; index < obj.length; index++){
        let row = obj[index].row;
        let col = obj[index].col;
        let val = obj[index].value;

        result[row][col] = val;
     
    }
 return  values(result,length,width);
 

}
    

let value = function values(array,row,col) {
    for(let index = 0; index < row; index++){
        for(let index2 = 0; index2 < col; index2++){
            if(array[row] !== "X" || array[row] !== "O" && array[col] !== "X" || array[col] !== "O"){
                array[row][col] = "";
            }
        }
    }
    return array;
    
}









console.log(tictactoe(obj,length,width))

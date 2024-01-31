function ans(leftOperand,rightOperand,operators){
      
    (operators == "+") ? console.log(leftOperand + rightOperand)  
    : (operators == "-") ? console.log(leftOperand - rightOperand)  
    : (operators == "*") ? console.log(leftOperand + rightOperand)
    :(operators == "/") ? console.log(leftOperand / rightOperand)
    :console.log(NaN);

    
}

function arithmetic(lOperand,rOperand,operator){
    ans = 0;
    switch(operator){
        case "+" : 
            ans = lOperand + rOperand;
            break;
        case "-":
            ans = lOperand - rOperand;
            break;
        case "*":
            ans = lOperand * rOperand;
            break;
        case "/":
            ans = lOperand / rOperand;
            break;
        default:
            ans = NaN
        
    }
    return ans;
}


ans(20,32,"+")
console.log(arithmetic(2,2,"*"))
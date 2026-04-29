function add(a,b){
   return a + b
}
function subtract(a,b){
   return a - b
}
function multiply(a,b){
   return a * b
}
function divide(a,b){
   if(  b === 0){
    alert("Haha you can't divide with 0 ! ")
   }else {
    return a / b
   }
}

function operate(operater,num1,num2){
    if( operater === '+'){
        return add(num1,num2)
    }else if(operater === '-'){
        return subtract(num1,num2)
    }else if(operater === '*'){
        return multiply(num1,num2)
    }else if(operater === '/'){
        return divide(num1,num2)
    }else{
        alert('This is not a vaild operation!')
    }

}
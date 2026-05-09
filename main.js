let firstNum = ''
 let secondNum = ''
 let theOperator = ''
 let resultDisplayed = false
// Will select all divs with the class of digit , and run a loop through them and add a eventlistner that waits for a click then runs a function that checks if its the first number clicked or second number click,which then displays it in the display div
let onlyDigits = document.querySelectorAll('.digit')
 for( let i = 0; i < onlyDigits.length; i++){
    onlyDigits[i].addEventListener('click',function (e){
        if( resultDisplayed === true){
            firstNum = ''
            secondNum = ''
            theOperator = ''
            resultDisplayed = false

        }
        if (theOperator === ''){
            firstNum += e.target.textContent
            document.querySelector('#display').textContent = firstNum
        }else {
            secondNum += e.target.textContent
            document.querySelector('#display').textContent = secondNum
        }
    })
 }

let onlyOperators = document.querySelectorAll('.operator')
 for( let i = 0; i < onlyOperators.length; i ++){
onlyOperators[i].addEventListener('click', function (e){
    if(secondNum !== ''){
          result = operate(theOperator,Number(firstNum), Number(secondNum))
         firstNum = result
         secondNum = ''
    }

    theOperator = e.target.textContent
    document.querySelector('#display').textContent = theOperator
    })

 }
 

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
        return add (num1,num2)
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


// function that runs when = is clicked and makes it pop up on display

document.querySelector('#btn-equal').addEventListener('click', function (e){
    if( firstNum === '' || secondNum === '' || theOperator === ''){
        alert("There is nothing silly")
    }else{
        let result = operate(theOperator,Number(firstNum), Number(secondNum))
        document.querySelector('#display').textContent = parseFloat(result.toFixed(2))
        resultDisplayed = true
}
})

    
    

document.querySelector('#btn-clear').addEventListener('click', function(e){
     firstNum = ''
     secondNum = ''
     theOperator = ''
     document.querySelector('#display').textContent = ''
})
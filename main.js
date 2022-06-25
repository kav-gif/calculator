let one = document.getElementById('button1');
let two = document.getElementById('button2');
let three = document.getElementById('button3');
let four = document.getElementById('button4');
let five = document.getElementById('button5');
let six= document.getElementById('button6');
let seven = document.getElementById('button7');
let eight= document.getElementById('button8');
let nine= document.getElementById('button9');
let zero= document.getElementById('button0');

let minus = document.getElementById('minus');
let addition = document.getElementById('addition');
let substraction = document.getElementById('substraction');
let division = document.getElementById('division');
let equal = document.getElementById('equal');
let num = document.getElementById('num');
let func = document.getElementById('func');
let num1 = document.getElementById('num1');
let solution = document.getElementById('solution')
let clear = document.getElementById('clear')



function minusFun(num,num1){
    value = num - num1
    return value
}

function additionFun(num,num1){
    value = num + num1
    return value
}
function substractionFun(num,num1){
    value = num * num1
    return value
}
function divisionFun(num,num1){
    value = num /  num1
    return value
}

one.addEventListener('click',()=>{
if(func.innerText === ''){
        num.innerText += one.innerText
    }else{
        num1.innerText += one.innerText
    }
    
})
two.addEventListener('click',()=>{
    if(func.innerText === ''){
        num.innerText += two.innerText
    }else{
        num1.innerText += two.innerText
    }
    
    
})
three.addEventListener('click',()=>{
    if(func.innerText === ''){
        num.innerText += three.innerText
    }else{
        num1.innerText += three.innerText
    }
   
})
four.addEventListener('click',()=>{
    if(func.innerText === ''){
        num.innerText += four.innerText
    }else{
        num1.innerText += four.innerText
    }
   
})
five.addEventListener('click',()=>{
    if(func.innerText === ''){
        num.innerText += five.innerText
    }else{
        num1.innerText += five.innerText
    }
   
})
six.addEventListener('click',()=>{
    if(func.innerText === ''){
        num.innerText += six.innerText
    }else{
        num1.innerText += six.innerText
    }
   
})
seven.addEventListener('click',()=>{
    if(func.innerText === ''){
        num.innerText += seven.innerText
    }else{
        num1.innerText += seven.innerText
    }
   
})
eight.addEventListener('click',()=>{
    if(func.innerText === ''){
        num.innerText += eight.innerText
    }else{
        num1.innerText += eight.innerText
    }
    
})
nine.addEventListener('click',()=>{
    if(func.innerText === ''){
        num.innerText += nine.innerText
    }else{
        num1.innerText += nine.innerText
    }
   
})

zero.addEventListener('click',()=>{
    if(func.innerText === ''){
        num.innerText += zero.innerText
    }else{
        num1.innerText += zero.innerText
    }
   
})

minus.addEventListener('click',()=>{
    func.innerText = minus.innerText
})

addition.addEventListener('click',()=>{
    func.innerText = addition.innerText
})

substraction.addEventListener('click',()=>{
    func.innerText = substraction.innerText
})

division.addEventListener('click',()=>{
    func.innerText = division.innerText
})



equal.addEventListener('click',()=>{
    if(solution.innerText){
        num.innerText = solution.innerText
        num1.innerText = ''
        func.innerText = ''
        solution.innerText=  ''
    }else if(func.innerText === '-'){
        solution.innerText = minusFun(Number(num.innerText),Number(num1.innerText))
    }else if(func.innerText === '+'){
        solution.innerText = additionFun(Number(num.innerText),Number(num1.innerText))
    }
    else if(func.innerText === '*'){
        solution.innerText = substractionFun(Number(num.innerText),Number(num1.innerText))
    }
    else if(func.innerText === '/'){
        solution.innerText = divisionFun(Number(num.innerText),Number(num1.innerText))
    }
    
})


clear.addEventListener('click',()=>{   
            num.innerText =''
            num1.innerText = ''
            func.innerText = ''
            solution.innerText=  ''
})

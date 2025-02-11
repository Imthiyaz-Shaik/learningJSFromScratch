//syntax........... 
// function functionName(){..........}

function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}

addTwoNumbers() //returns....(NaN) if no arguments are passed while function is defined with parameters...
addTwoNumbers(3,3); //6
addTwoNumbers(3,'a'); //3a
addTwoNumbers(3,'2');  //32

function userLoggedIn(userName){
    return `${userName} just logged in`;
}

console.log(userLoggedIn('imthiyaz'))

function cartPrice(...num1){
  return num1;
}

console.log(cartPrice(100,200,500,200))

function totalCart(val1,val2,...num1){
    return num1;
}
console.log(totalCart(100,200,300,400))

console.log('PASING OBJECTS AS ARGUMENTS IN  FUNCTIONS')

const handleObj ={
    name:'imthiyaz',
    age :23
}

function usingObj(anyObj){
 console.log(`his name is ${anyObj.name} and his age is ${anyObj.age}`)
}

usingObj(handleObj)

console.log('passing arrays as arguments in functions...')

const handleArr= [100,200,300,400,500]

function usingArr(anyArr){
    return anyArr[3];
}
console.log(usingArr(handleArr))
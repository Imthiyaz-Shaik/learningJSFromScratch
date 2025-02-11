const score=100;
console.log(score)

const num= new Number(400)
console.log(num)

//NUMBER METHODS

console.log(num.toString().length)

console.log(num.toFixed(1))

const testNum=123.856
console.log(testNum.toPrecision(3))
console.log(testNum.toPrecision(4))

const hundreads=10000000000
console.log(hundreads.toLocaleString())
console.log('*********************************')//


//*****************Maths*************** */

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(3.3))
console.log(Math.ceil(4.2))
console.log(Math.floor(3.4))
console.log(Math.min(5,7,9,2,4,8))
console.log(Math.max(7238247,526346,73567347,8218346,6129847))
console.log('*********************************')

console.log(Math.random())  //always gives values between 0-1.

console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20
//formula to get random values between minand max

console.log(Math.floor(Math.random()*(max-min+1))+min)

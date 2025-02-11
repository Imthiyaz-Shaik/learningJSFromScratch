const user ={
    name : 'imthiyaz',
    'fullName' : "shaik imthiyaz ahmad",
    number : '919939848743',
    isLoggedIn : false,
    age : 23,
    mail : 'ahmad@gmail.com'
}

console.log(user.name)  //gives an answer BUT not a correct syntax.correct syntax is ......
console.log(user['name']) 

// console.log(user.fullName)  //gives an answer BUT wht if you have given a gap between 'full' and 'name' in the key of the object.............

console.log(user['fullName']) // CORRECT SYNTAX

// in JavaScript, all object keys are internally stored as strings.

//Even if you define a key as a number or a symbol, JavaScript converts it into a string (except for Symbol keys, which remain unique and are not automatically converted to strings).
console.log('************************************')
console.log('SYMBOL KEY')

const sym = Symbol("unique");
const obj = { [sym]: "Symbol value" };

console.log(obj[sym]); // "Symbol value"
console.log(obj); // { [Symbol(unique)]: 'Symbol value' }

console.log('lets add function to an object')

user.welcome =function(){
    console.log('hello user')
}   // added to 'object\' as [Function (anonymous)]

console.log(user.welcome())  //checking response  

// To  Access the values from the same objecy ,we use 'THIS' Keyword

user.welcomeThis = function(){
    console.log(`hello user,${this.name}`)
}

console.log(user.welcomeThis())

// you can 'FREEZE' an object  so that nothing can be changed again 

console.log('changing values in objects')
 user.age ='23.8'
 console.log(user)

 console.log('after using FREEZE method')
 Object.freeze(user);
 user.age ="23"
 console.log(user)  //you still get age as 23.8 .....no changes are done in the object after using FREEZE method
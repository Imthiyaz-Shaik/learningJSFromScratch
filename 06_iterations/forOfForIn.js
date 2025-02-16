const arr = ['imthiyaz','ahmad','shaik']

for (const name of arr) {
    console.log(`partial name is ${name}`)
}

const stringEx ='imthiyaz ahmad shaik'
for (const nameLetter of stringEx) {
    console.log(`each char of name is ${nameLetter}`)
}

//For In loop

const myDetails ={
    name : 'imthiyaz',
    age : 23,
    mail :'a@b.com',
    address : 'hyderabad'
}

// for (const key of myDetails) {
//     console.log(key)
// }  //Output : TypeError: myDetails is not iterable

for (const key in myDetails) {
   console.log(myDetails[key])
}

//for-in  loop for Array

const myArr = ['js','java','c++','c#','python']

for (const key in myArr) {
   console.log(myArr[key])
}  // Output : js java c++ c# python

// for-Of loop for array

for (const key of myArr) {
    console.log(key)
}   // Output : js java c++ c# python


// for 'for-in' loop syntax to access each element is .... 'ArrayName[key]'  whereas for for-of loop its syntax to access each element is 'key'
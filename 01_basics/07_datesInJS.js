const myDate= new Date()
console.log(typeof myDate)    //object
console.log(myDate)     //2025-02-03T18:18:28.699Z

console.log(myDate.toString());  //Mon Feb 03 2025 23:49:16 GMT+0530 (India Standard Time)

console.log(myDate.toDateString())  //Mon Feb 03 2025

console.log(myDate.toLocaleString())   // 3/2/2025, 
// 11:52:48 pm

console.log(myDate.toLocaleDateString())  // 3/2/2025
console.log('*************************************')

let myCreatedDate = new Date(2023,0,3)
console.log(myCreatedDate.toLocaleString())

let theDate =new Date(2001,3,30,4,50)
console.log(theDate.toLocaleString())

console.log('**********More Methods**********')
let newDate= new Date()
console.log(newDate.getMonth())  //index starts from 0

//same as getMonth() methods there are also other methods
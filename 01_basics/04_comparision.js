console.log(null > 0)  //false
console.log(null == 0)  //false
console.log(null >= 0)  //false

//The Reason is that equality check == and comparisionn  <,>,<=,>= work differently .
//Comparisions convert null to a number,treating it as 0.

console.log(undefined == 0)  //All
console.log(undefined > 0)   //are
console.log(undefined >= 0)   //FALSE

console.log('2' == 2)
console.log('02' == 2)
console.log('02' === 2)
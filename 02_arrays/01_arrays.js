const myName =['i','im','imth','imth','imthi','imthiy','imthiya','imthiyaz']

console.log(myName[7])

//ARRAY METHODS


myName.push('_ahmad')
console.log(myName[8])
myName.push('_')
console.log(myName[9])
myName.pop()

console.log(myName.includes('imthiyaz'))
console.log(myName.indexOf('imthi'))
console.log('******************************')

console.log('arrayStringMethods')  

console.log(myName.toString())  //retuns a string 

const strngArr=myName.join()

console.log(strngArr)    //returns a string
console.log(typeof strngArr)

console.log('diff b/w slice and splice')

const sliceArr=myName.slice(7,9)
console.log(sliceArr)
console.log(myName)  //slice doesnt mutates the original array

const spliceArr=myName.splice(7,9)
console.log(spliceArr)
console.log(myName)  //splice mutates the original array

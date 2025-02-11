//Falsy Values (8 total) → false, 0, -0, 0n, "", null, undefined, NaN

//Truthy Values → Everything else (non-empty strings,String with space (even if it's just a space), numbers except 0,Positive and negative infinity (Infinity, -Infinity), objects, arrays, functions,A valid Date object(new Date()),	Any symbol)

//also truthy........'0' , 'false'

console.log('checking whether the array is empty or not')

const empArr = []

if(empArr.length === 0){
    console.log('array is empty')
}
console.log('**************************')
console.log('checking whether the object is empty or not')

const empObj = {}

if(Object.keys(empObj).length === 0){
    console.log('object is empty...')
}
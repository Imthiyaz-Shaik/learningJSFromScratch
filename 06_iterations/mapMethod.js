//🔹 map() Method
// Purpose: Transforms each element in the array and returns a new array of the same length.
// Return Value: A new array with modified elements.
// Does Not Mutate: It does not change the original array.

//SYNTAX :- array.map(callbackFunction(element, index, array), thisArg)


const nums = [1,2,3,4,5,6,7,8,9,10]

//

const mapNums = nums.map((num)=>num+10)
console.log(mapNums)

//❌ Forgetting to Return a Value

const numbers = [1, 2, 3];

const wrongMap = numbers.map(num => { num * 2 }); // ❌ Incorrect

console.log(wrongMap); // Output: [undefined, undefined, undefined]

//✅ Fix: Use an explicit return or remove {}:

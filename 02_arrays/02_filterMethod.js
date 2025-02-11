const myName =['i','im','imth','imth','imthi','imthiy','imthiya','imthiyaz','_','ahmad']

const indices =[7,8,9]

// SYNTAX of filter method........array.filter(callback(element, index, array), thisArg);


console.log(myName.filter((_,index)=>indices.includes(index))); 

// 🔹 Parameters
// callback(element, index, array): A function that tests each element of the array.

//element → The current element being processed.
// index (optional) → The index of the current element.
// array (optional) → The original array being filtered.
// thisArg (optional): A value to use as this when executing the callback.

//  Return Value
//A new array containing only the elements for which the callback function returns true.
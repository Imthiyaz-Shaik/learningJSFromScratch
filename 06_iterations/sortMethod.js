// sort() method  modifies the original array rather than creating a new one.

//Example 1: Default Sorting (Lexicographic Order)

let fruits = ["Banana", "Apple", "Orange", "Grapes"];

fruits.sort()  //  as this method mutates the original array  so no need to store the values in variable

console.log(fruits)

// Example 2: Default Sorting with Numbers (Incorrect Output)

let numbers = [25, 100, 3, 42, 9];
numbers.sort();
console.log(numbers); 
// Output: [ 100, 25, 3, 42, 9 ]  (Incorrect for numeric sorting)

//  Sorting Numbers Correctly (Using a Compare Function)
// SYNTAX of Compare Function -- array.sort((a, b) => a - b);

// If a - b is negative, a comes before b (ascending order).
// If a - b is positive, b comes before a.
// If a - b is zero, order remains unchanged.


//Example 3: Sorting Numbers (Ascending Order)
 let nums = [100,24,54,921,56,29,537,546]

 nums.sort((a,b)=>a-b)
 console.log(nums)

//Example 4: Sorting Numbers (Descending Order)
nums.sort((a,b)=>b-a)
console.log(nums)

// By default, sort() is case-sensitive, meaning uppercase letters come before lowercase.

//Example 5: Case-Sensitive Sorting

let words = ["banana", "Apple", "orange", "Grapes"];
words.sort();
console.log(words);
// Output: [ 'Apple', 'Grapes', 'banana', 'orange' ]

//Example 6: Case-Insensitive Sorting
// To perform a case-insensitive sort, use localeCompare():

let wordsTwo = ["banana", "Apple", "orange", "Grapes"];
wordsTwo.sort((a, b) => a.localeCompare(b));
console.log(wordsTwo);
// Output: [ 'Apple', 'banana', 'Grapes', 'orange' ] (Correct order)

//the string methods you'll frequently use as a JavaScript developer:

//1.length – Returns the length of a string.
let str = "Hello, World!";
console.log(str.length); // 13

//2.toUpperCase() – Converts a string to uppercase.
console.log("hello".toUpperCase()); // "HELLO"

//3.console.log("HELLO".toLowerCase()); // "hello"
console.log("HELLO".toLowerCase()); // "hello"

//4.trim() – Removes whitespace from both ends of a string.
console.log("  hello  ".trim()); // "hello"

//5.slice(start, end) – Extracts part of a string.end index is not included.
console.log("Hello, World!".slice(7, 12)); // "World"

//6.substring(start, end) – Similar to slice() but doesn't accept negative indices.
let text = "Hello, World!";
console.log(text.slice(-6, -1)); //World
console.log(text.substring(-6, -1)); //""

//slice(-6, -1) works, but substring(-6, -1) is converted to substring(0,0) (empty string).

//7.startsWith(substring) – Checks if a string starts with a specific substring.
console.log("hello world".startsWith("hello")); // true

//8.endsWith(substring) – Checks if a string ends with a specific substring.
console.log("hello world".endsWith("world")); // true

//9.replace(oldSubstring, newSubstring) – Replaces a substring with another.
console.log("apple apple".replaceAll("apple", "orange")); // "orange orange"

//10.split(separator) – Splits a string into an array.
console.log("a,b,c".split(",")); // ["a", "b", "c"]

//11.concat(string1, string2, ...) – Concatenates strings.
console.log("Hello".concat(" ", "World")); // "Hello World"

//12.repeat(n) – Repeats a string n times.
console.log("hello ".repeat(3)); // "hello hello hello "

//13.match(regex) – Searches a string using a regular expression.
console.log("hello 123".match(/\d+/)); // ["123"]

//14.toString() – Converts a value to a string.
let num = 123;
console.log(num.toString()); // "123"

console.log('imthiyaz'.slice(-8,8))
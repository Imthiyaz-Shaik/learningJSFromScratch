const numbers = [1, 2, 3, 4, 5];

const sum = numbers
  .map(num => num * 2)      // Double each number: [2, 4, 6, 8, 10]
  .filter(num => num % 2 === 0) // Keep only even numbers: [2, 4, 6, 8, 10]
  .reduce((acc, num) => acc + num, 0); // Sum: 30

console.log(sum); // Output: 30

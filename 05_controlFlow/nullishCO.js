// Nullish Coalescing Operator (??)

const val = null
const val2 = 2;

console.log(val ?? val2)

//Using ?? with Function Parameters

function greet(name) {
    return `Hello, ${name ?? "Guest"}!`;
  }
  
  console.log(greet("Imthiyaz")); // Output: "Hello, Imthiyaz!"
 console.log(greet()) //Output: "Hello, Guest!"
  
 //Using ?? with Function Return Values

 console.log('Using ?? with Function Return Values')

 function getUser() {
    return null;
  }
  
  let user = getUser() ?? "Anonymous";
  console.log(user); // Output: "Anonymous"
  
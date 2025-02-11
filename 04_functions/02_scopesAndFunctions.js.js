function one(){
    const name ='imthiyaz'
    function two(){
        const mail ='a@b.com'
        console.log(name)
    }
    // console.log(mail) ....its shows an error of 'mail is not defined as it is being accessed outside of its scope'
    two();
}

one()

console.log('***********************************')

// In JavaScript, functions can be declared in multiple ways. The two most common approaches are:

// Function Declarations
// Function Expressions

// 1. Function Declaration
// A function declaration (also called a function statement) defines a function with a specific name. This function can be called before it is defined due to hoisting.

greet(); // ✅ Works due to hoisting

function greet() {
    console.log("Hello, world!");
}
greet(); // Output: Hello, world!

// Key Characteristics of Function Declarations:
// ✔️ Hoisted – Can be called before being defined in the code.
// ✔️ Has a name – The function is given an explicit name.
// ✔️ Can be used globally – If declared in the global scope, it can be accessed anywhere in the script.

console.log('*************************************')

// 2. Function Expression
// A function expression involves defining a function and assigning it to a variable. Function expressions are not hoisted, which means they cannot be called before they are defined.

sayHello(); // ❌ Error: Cannot access 'sayHello' before initialization

const sayHello = function() {
    console.log("Hello from function expression!");
};
sayHello(); // Output: Hello from function expression!


// Key Characteristics of Function Expressions:
// ❌ Not Hoisted – Cannot be called before they are defined.
// ✔️ Can be Anonymous – The function doesn’t need a name.
// ✔️ Stored in a Variable – It behaves like a value and can be passed around.
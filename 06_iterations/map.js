//maps

const trial = new Map();
console.log(trial); // Output: Map(0) {}

//Adding Elements to a Map (set() Method)

const userMap = new Map();

userMap.set("name", "Imthiyaz");
userMap.set("age", 24);
userMap.set("profession", "Developer");

console.log(userMap);
// Output: Map(3) { 'name' => 'Imthiyaz', 'age' => 24, 'profession' => 'Developer' }

//NOTE :- Unlike regular objects, a Map allows keys of any type, not just strings

// Retrieving Values from a Map (get() Method) :- .Get(key)

console.log(userMap.get("name")); // Output: Imthiyaz
console.log(userMap.get("age"));  // Output: 24

//Checking if a Key Exists (has() Method)

console.log(userMap.has("name")); // Output: true
console.log(userMap.has("salary")); // Output: false

// Removing a Key (delete() Method)

userMap.delete("age");
console.log(userMap); 
// Output: Map(2) { 'name' => 'Imthiyaz', 'profession' => 'Developer' }

//Getting the Size of a Map (size Property)

console.log(userMap.size); // Output: 2

//Clearing All Elements (clear() Method)

userMap.clear();
console.log(userMap.size); // Output: 0

//IMPORTANT :-Iterating Over a Map

const countryMap = new Map();
countryMap.set("India", "New Delhi");
countryMap.set("USA", "Washington D.C.");
countryMap.set("France", "Paris");

countryMap.forEach((value,key)=>{             //OBSERVE VALUE COMES 1ST
    console.log(`${key} : ${value}`)
})

//for...of Loop

for(let [key,value] of countryMap){   //Observe SYNTAX
    console.log(`${key} : ${value}`)
}              //SAME OUTPUT

// IMPORTANT :- for in loop cant be used on Map Object


// Converting Map to an Array
// (a) Convert Keys to an Array
const keysArr =[...countryMap.keys()]
console.log(keysArr)  // Output : [ 'India', 'USA', 'France' ]

// (b) Convert Values to an Array

 const ValuesArr = [...countryMap.values()]
 console.log(ValuesArr)   // [ 'New Delhi', 'Washington D.C.', 'Paris' ]

 // (c) Convert Map to an Array of Key-Value Pairs

 const entriesArray = [...countryMap.entries()];
console.log(entriesArray);
// Output: [ ['India', 'New Delhi'], ['USA', 'Washington D.C.'], ['France', 'Paris'] ]

 console.log(' this Inside an Object Method')
//  🔹When a function is inside an object, this refers to the object itself.

const user = {
    name : 'imthiyaz',
    mail : 'a@b.com',
    welcomeMsg : function(){
        console.log(`${this.name},welcome to website`)
        console.log(this)
    }
}

//🔹 Here, this.name refers to user.name.

user.welcomeMsg();
user.name = 'ahmad'
user.welcomeMsg();  //ahmad,welcome to website

console.log(this)  //OutPut : {}

console.log('****************************')
console.log(' this in an Arrow Function')


const person = {
    name: "Imthiyaz",
    greet: () => {
        console.log(this.name); // 'this' refers to the global object (not 'person')
    }
};
person.greet(); // Output: undefined (in strict mode) or window.name (if defined)


//Using THIS in Functions.............
console.log('THIS in functions...')
function tryThis(){
    let userName = 'imthiyaz'
    console.log(this)
    console.log(this.userName);
}
tryThis()  //OutPut : undefined

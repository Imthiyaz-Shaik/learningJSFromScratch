console.log('SINGLETON OBJECT')

const linkedinUser =new Object()   //singleton object

linkedinUser.id = '123'
linkedinUser.name = 'imthiyaz'
linkedinUser.isLoggedIn = false

const premiumUser ={
    email : 'premUser@gmsil.com',
    fullname : {
        userFullName : {
            firstName : 'riyaz',
            lastName : 'shaik'

        }
    }

}
console.log(premiumUser.fullname.userFullName.firstName)

console.log('concatation in objects')
// how to two objects in JS
const obj1 ={1:'a',2: 'b'}
const obj2 ={3:'c',4:'d'}
const obj3 =Object.assign({},obj1,obj2)
console.log(obj3)    //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 ={...obj1,...obj2}
console.log(obj4)   //same answer as before

// const users = [
//     {
//         id :'234',
//         email : '234@gmail.com' 
//     },
//     {
//         id : '456',
//         email : '345@gmail.com'
//     },
//     {
//         id : '456',
//         email
//     }
// ]

console.log('Object.keys() and Object.values() methods explanation....')

//The Object.keys() method is used to retrieve an array of an object's own enumerable property names (keys).

const user = {
    name: "Imthiyaz",
    age: 24,
    profession: "Full-Stack Developer"
  };
  
  console.log(Object.keys(user)); 
  // Output: ["name", "age", "profession"]

  console.log(Object.values(user))
   //Output:[ 'Imthiyaz', 24, 'Full-Stack Developer' ]

   console.log(Object.entries(user)) //gives output of an array of every key and pair as array inside it....

  const course ={
    courseName : 'javaScript',
    price : "999",
    courseInstructor : 'hitesh sir'
  }

  //DESTRUCTURING THE OBJECT

  const {courseInstructor} = course
  console.log(courseInstructor)  
  // you dont need to write it like course.courseInstructor

  const {courseName : domain} = course 
  //we just changed the courseName as 'domain' by using this syntax
  console.log(domain)
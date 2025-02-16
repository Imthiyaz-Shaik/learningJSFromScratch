// for-Each
const myArr = ['js','java','c++','c#','python']

myArr.forEach(function(item){
    console.log(item)
})

myArr.forEach((item)=>{
    console.log(item)
})

function printMe(item){
    console.log(item)
}   //created a function to call directlt in forEach method

myArr.forEach(printMe)

// WRONG SYNTAX .... myArr.forEach(printMe())

const arrObj =[
    {
        language : 'javascript',
        extension :'js'
    },
    {
        language : 'java',
        extension :'java'
    },
    {
        language : 'python',
        extension :'py'
    },
    {
        language : 'ruby',
        extension :'rb'
    }
]

arrObj.forEach((ITEM)=>{
    console.log(ITEM.language.toUpperCase())
})

const elem = arrObj.forEach((item)=>{
    return item ;
})

console.log(elem)  // Output : undefined

//for-each cant return a value

const element =arrObj.forEach((item)=>{
    console.log(item.language.toString())
})

console.log(element) //Output :javascript java python ruby undefined
  // it prints the values but it returns undefined still

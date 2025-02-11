const marvel_heroes =['thor','hawkeye','antMan','blackWidow']

const dc_heroes = ['flash','superMan','batMan']
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes)  // ['thor','hawkeye','antMan','blackWidow',[ 'flash', 'superMan', 'batMan' ]]

// Correct method to merge two Arrays into one is to Use CONCAT() method.....

const marvelHeroes =['thor','hawkeye','antMan','blackWidow']
const dcHeroes = ['flash','superMan','batMan']
console.log('USING CONCAT METHOD')
const heroes = marvelHeroes.concat(dcHeroes)
console.log(heroes)

//we can do the same thing using SPREAD OPERATOR.....

console.log('USING SPREAD OPERATOR')
const all_heroes = [...marvelHeroes,...dcHeroes]
console.log(all_heroes)

//Method to concatinate any number of arrays in array(i.e flat())

console.log('USING FLAT() method')
const eg_arr = [1,2,3,4,[5,6,7],[8,9,[10]]]
console.log(eg_arr.flat(Infinity))  //givin depth parameter is important

console.log('FROM & OF ARRAY METHODS')
console.log(Array.from('IMTHIYAZ'))
let firstName ='imthiyaz'
let midName = 'ahmad'
let surName ='shaik'
console.log(Array.of(firstName,midName,surName))

//Intresting 

console.log(Array.from({name:'imthiyaz'})) //gets an empty array as response.....
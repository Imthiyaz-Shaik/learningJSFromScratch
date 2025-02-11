let score='70abc'

console.log(typeof score)
console.log(typeof(score))   //can also write in this manner

let valueInNumbers=Number(score)
console.log(typeof valueInNumbers)
console.log(valueInNumbers)  //NaN

// '33'=> 33
//'3abc' => NaN
//true => 1; false =>0

let name =0

let changedName=Boolean(name)
console.log(changedName)
console.log('****************************')

//1 => true; 0 => false
//'imthiyaz' => true
// '' => false

//****************OPERATIONS********* */

console.log('1'+2)
console.log(1+'2')
console.log('1'+2+2)
console.log(1+2+'2')
console.log(Number('2')+1)  //3
console.log(+true)

let counter=100;
const counting=counter++
console.log(counting)
console.log(counter)
console.log('********************')

let count=100;
const trial= ++count
console.log(count)
console.log(trial)

//website to study......tc39.es
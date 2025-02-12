const myArr = ['imthiyaz','ahmad','shaik']
let i =0
while (i < myArr.length) {
    console.log(`value is ${myArr[i]}`)
    i= i+1;
}

let score = 1

do {
   console.log(`score is ${score}`) 
   score = score+3
} while (score < 33);  //atleast run once....

let runs =12
do {
    console.log(`score is ${runs}`)
} while (runs<7);    //Output : 12
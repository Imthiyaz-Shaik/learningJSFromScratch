// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     for (let j = i+1; j < 10; j++) {
//        console.log(j)
//     }
// }

//Break And Continue 

// for (let index = 1; index < 20; index++) {
//     if(index == 5){
//         console.log('detected ',index)
//         break;
//     }
//    console.log(`value of index is ${index}`)
    
// }

for (let index = 1; index < 20; index++) {
    if(index == 5){
        console.log('detected ',index)
       continue;
    }
   console.log(`value of index is ${index}`)
    
}
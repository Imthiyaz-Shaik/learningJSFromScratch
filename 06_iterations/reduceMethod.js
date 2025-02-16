const arr1 = [1,2,3,4,5,6,7,8,9,10]

const initialValue = 0;
 const reduceArr = arr1.reduce((acc,curr)=>acc+curr,initialValue)

 console.log(reduceArr)  //55

 const initialVal = 1;
 const diminishArr = arr1.reduce((acc,curr)=>acc*curr,initialVal)

 console.log(diminishArr)  //3628800

 const arr2 = [3,6,9,12,15,18]

 const reduceTrial = arr2.reduce((acc,curr)=>{
    console.log(`acc value is ${acc} and curr value is ${curr}`)
    return acc+curr
 },1)

 console.log(reduceTrial)

 //IMPORTANT Example......

 const coursesCart = [
    {
        course : 'JS',
        price : 1999
    },
    {
        course : 'Java',
        price : 1999
    },
    {
        course : 'python',
        price : 1999
    },
    {
        course : 'Data science',
        price : 1999
    },
    {
        course : 'ai/ml',
        price : 1999
    },
    {
        course : 'mobile app dev',
        price : 1999
    },
 ]

 const totalPrice = coursesCart.reduce((acc,item)=>acc+item.price,0)

 console.log(totalPrice)
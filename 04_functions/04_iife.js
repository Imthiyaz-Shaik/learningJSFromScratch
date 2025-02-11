//immediately invoked function Expressions (IIFE)

(function callMe(){ //named iife
    console.log('call me Imthiyaz')
})(); 

//semi-colon is mandatory here for the file to be executed if you are having 2 iife in one file... or else you get error

((name)=>{
    console.log(`call me ${name}`)
})('imthiyaz')
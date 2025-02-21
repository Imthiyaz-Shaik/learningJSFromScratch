//keydown,keypress,keyup
//keypress is not supported by IE

document.querySelector('#img5').addEventListener('keydown',function(e){
    console.log(`key down : ${e.key} and code is${e.code}`)
})  // doesnt work...NO OUTPUT .. if image tag doesnt contain tab index

//PROBLEMS:
//<img> is not focusable by default: Only interactive elements like <input>, <button>, or elements with tabindex="0" can receive keyboard events.
//keydown does not work on non-focusable elements: Since an <img> is not focusable, keydown events will not be detected.

// FIX:
//To make it work, you can add tabindex="0" to the <img> element to make it focusable.

//FIXED CODE is Add tabIndez='0' to the image tag...

//tabindex="0" makes the <img> focusable. This means that the <img> can now receive keyboard events like keydown, keypress, and keyup.

document.addEventListener('keydown',function(e){
    if(e.ctrlKey && e.key ==='s' || e.key==='c'){
        e.preventDefault();
        alert('ctrl+s or ctrl+c is pressed')
    }
})  // to disable cntl+s SAVE feature

//KEY EVENT PROPERTIES :- event.key,event.code,event.ctrlKey,event.shiftKey,event.altKey,event.metaKey


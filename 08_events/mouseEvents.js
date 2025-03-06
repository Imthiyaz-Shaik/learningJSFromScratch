document.querySelector('#id1').addEventListener('click',function(element){
    alert(` this element is accessed using ${element.type} event`);
});

document.querySelector('#id7').addEventListener('mousemove',function(element){
    alert(`mouse position :X =${element.clientX} and Y = ${element.clientY}`);
}); //MOuse move event

const mouseEvent =document.querySelector('#id3');

mouseEvent.addEventListener('mouseover',function(element){
    element.target.style.border = 'none';
})

mouseEvent.addEventListener('mouseout',function(e){
    console.log(e);
    e.target.style.border ='3px grey solid';
})

let scrollSpeed =document.querySelector('.ulClass')




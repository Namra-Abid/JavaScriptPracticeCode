console.log('Aug4');
let btn= document.querySelector('div');
let body=document.querySelector('body');
btn.addEventListener('mousemove',function(e){
console.log('Thanks',e);
e.preventDefault();
x=e.offsetX;
y=e.offsetY;
console.log(x,y);
document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${x+y})`;
});

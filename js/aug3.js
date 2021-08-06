let sum=0;
console.log('Aug3');
document.getElementById('head1').addEventListener('click',function(){
    console.log('You have clicked the heading');
});



document.getElementById('head2').addEventListener("mouseover",function (){
   let p=document.getElementById('head2');
   p.style.color='red';
   p.innerText='Inner text is changed to red beacuse you mouseover it ';
   
   sum=sum+1;
 
   let elem=document.createElement('h2');
   let text=document.createTextNode('This Counter will incrrease it value as many time as you mouse over the heading '+ ' ' +String(sum));
   elem.appendChild(text);
   document.querySelector('body').appendChild(elem);
   console.log(sum);
});
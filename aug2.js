console.log('aug2.js');
let body=document.querySelector('body');
let a=document.createElement('a');
a.setAttribute("href",
 "https://codewithharry.com/");
let h1=document.createElement('h1');
let text=document.createTextNode('CodeWIth HArry');
h1.appendChild(text);
console.log(h1);
a.appendChild(h1);
console.log(a);
body.appendChild(a);
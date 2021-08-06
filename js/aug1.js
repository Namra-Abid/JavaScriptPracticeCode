console.log('aug1');
let ul= document.querySelector('ul');
let create_element=document.createElement('li');
let text=document.createTextNode('I am FIRST text node');
create_element.className='child2';
ul.appendChild(create_element);
create_element.appendChild(text)
console.log(ul);
console.log(create_element);



let elem2=document.createElement('li');
let text2=document.createTextNode('I  am Second Text node');
elem2.className='newchild';
elem2.appendChild(text2);
create_element.replaceWith(elem2);

ul.replaceChild(create_element,document.getElementById('l2'));
ul.removeChild(document.getElementById('l3'));
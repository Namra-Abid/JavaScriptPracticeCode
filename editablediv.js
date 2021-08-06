console.log('editable div');
// create editable div
let creatediv=document.createElement('div');



// // getting item for text of div if there is any text in local storage
let loclStrg= localStorage.getItem('text');


let text;
if (loclStrg==null)//checking if local storage has any text to add in div
{
    text=document.createTextNode('This is Editable Div Click to Edit it');//if localStorage is empty then this will be added
}
else{
    text=document.createTextNode(loclStrg);//if localStorqage has some previously added text then div display this text
}
creatediv.appendChild(text);

// Add text to that created element
// let val = localStorage.getItem('text');
// let text;
// console.log(val,"text value ")
// if (val==null){
//  text = document.createTextNode('This is my element. click to edit it');
// }
// else{
//     text = document.createTextNode(val);
// }
// creatediv.appendChild(text);

// setting attribute of editable div
creatediv.setAttribute('id','elem');
creatediv.setAttribute('class','elem');
creatediv.setAttribute('style','border :3px solid purple; padding :5% ; width:50%')


 // grabbing element necessary to insert div in html document
let container=document.querySelector('.container');
let p=document.getElementById('myfirst');
// inserting element in html document
container.insertBefore(creatediv,p);

//add eventlistener when someone click on div

creatediv.addEventListener("click",function(){
    let length_of_textarea=document.getElementsByClassName('textarea').length;
    if (length_of_textarea==0)
    {
        let html=elem.innerHTML;
        creatediv.innerHTML=`<textarea class="textarea form-control" id="textarea" row="3"> ${html}</textarea> `;
    }
    //grabbing textarea
    let textarea=document.getElementById('textarea');
    //The blur event fires when an element has lost focus
    //when mouse moves from textarea div innerhtml will be set to whatever text you entered in text area

    textarea.addEventListener("blur",function(){
        elem.innerHTML=textarea.value;

        localStorage.setItem('text',textarea.value);
    });
});

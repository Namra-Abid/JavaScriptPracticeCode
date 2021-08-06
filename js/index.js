console.log("HELLO world");
console.log(`Exercise 1 Solution`);

let a = document.links;

let myText = 'harry';
//console.log(a, 'this is a')
Array.from(a).forEach(function (element) {
    if (String(element).includes(myText)) {
        console.log(element);
    }
});
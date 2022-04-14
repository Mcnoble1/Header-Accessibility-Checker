const heading = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
console.log(heading);
const mainArray = [];
heading.forEach(element => {
    mainArray.push(element.localName);
});
console.log(mainArray);

const newArray = mainArray.sort();

console.log(newArray);

// const e = document.getElementsByTagName('h2')[0];
// console.log(e)
// const d = document.createElement('h1');
// console.log(d)
// d.innerHTML = e.innerHTML;  

// e.parentNode.replaceChild(d, e);

mainArray.forEach(oldHeading => {
    newArray.forEach(newHeading => {
        const e = document.getElementsByTagName(oldHeading)[0];
        const d = document.createElement(newHeading);
        d.innerHTML = e.innerHTML;
        e.parentNode.replaceChild(d, e);
    });    
    
   });




// function correctOrder() {
//     var Element = document.getElementsByTagName("p");
//     for (var i = 0; i < Element.length; i++) {
//         alert(Element[i].innerHTML);
//         Element[i].innerHTML = "GeeksforGeeks.";
//     }
// }
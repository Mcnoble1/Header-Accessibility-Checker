let heading = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
console.log(heading);
let headingArray = Array.from(heading);
console.log(headingArray)
let headingArrayLength = headingArray.length;
console.log(headingArrayLength);
let headingArrayIndex = 0;
let headingArrayElement = headingArray[headingArrayIndex];
console.log(headingArrayElement);
let headingArrayElementText = headingArrayElement.innerText;
console.log(headingArrayElementText);
let headingArrayElementTextLength = headingArrayElementText.length;
console.log(headingArrayElementTextLength);

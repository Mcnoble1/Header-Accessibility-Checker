const heading = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const mainArray = [];
heading.forEach(element => {
    mainArray.push(element.localName);
});
console.log(mainArray);
// const newArray = mainArray.sort();
// console.log(newArray);

// const mainArray = ['h2','h3','h1','h5','h4'];
// const newArray = ['h1','h2','h3','h4','h5'];

function sortHeading() {
    let i = 0;
    while (i < mainArray.length) {
        const e = document.getElementsByTagName(mainArray[i])[0];
            if ( e === `h${1}` ) {
                console.log('no change')
            } else if ( e !== `h${1}` ) {
                const d = document.createElement(`h${i + 1}`);
                d.innerHTML = e.innerHTML;  
                e.parentNode.replaceChild(d, e);
                console.log(e)
                console.log(d)
                i++;
             }
}};
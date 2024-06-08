//
// let numbers =[1,2,3,4,5,6,7];
//
// function isEven(element) {
//     return element % 2 === 0;
// }
//
// function isOdd(element) {
//     return element % 2 !== 0;
// }
//
// let evenNums = numbers.filter(isEven);
// console.log(evenNums);
//
// let oddNums = numbers.filter(isOdd);
// console.log(evenNums);
//
// const ages = [16,17,18,18,19,20,60];
//
//
// function isAdult(element) {
//     return element >= 18;
// }
// function isChild(element) {
//     return element < 18;
// }
//
// const adults = ages.filter(isAdult);
// const childs = ages.filter(isChild);
//
// console.log(adults);
// console.log(childs);


const words = ["apple","orange","banana","kiwi","pomegranate","coconut"];

function getShortWords(element) {
    return element.length <= 6;
}
function getLongWords(element) {
    return element.length > 6;
}

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);
console.log(shortWords);
console.log(longWords);
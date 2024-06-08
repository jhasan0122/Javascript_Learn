//
//
// // Function declaration
//
// function hello1() {
//     console.log("Hello");
// }
//
//
// // FUnction Expression
//
// const hello = function () {
//     console.log("Hello");
// }
//
// // hello();
//
//
// // setTimeout(hello1,3000)
// // setTimeout(hello,3000)
// setTimeout(function () {
//     console.log("Hello");
// },3000);
//


// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map(square);
//
// console.log(squares);
//
// function square(element) {
//     return Math.pow(element,2);
// }

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function (element) {
    return Math.pow(element,2);
});
console.log(squares);


const cubes = numbers.map(function (element) {
        return Math.pow(element,3);
    }
);
console.log(cubes);


const evenNumbers = numbers.filter(function (element) {
    return element % 2 === 0;
});
const oddNumbers = numbers.filter(function (element) {
    return element % 2 !== 0;
});

const total = numbers.reduce(function (accumulator,element) {
    return accumulator + element;
})

console.log(evenNumbers);
console.log(oddNumbers);
console.log(total);




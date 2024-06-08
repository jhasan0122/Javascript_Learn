//
//
// let numbers = [1,2,3,4,5]
//
// function display(elements) {
//     console.log(elements);
// }
//
// function double(element,index,array) {
//     array[index] = element * 2;
// }
// function triple(element,index,array) {
//     array[index] = element * 3;
// }
// function square(element,index,array) {
//     array[index] = Math.pow(element,2);
// }
// function cube(element,index,array) {
//     array[index] = Math.pow(element,3);
// }
//
//
//
// numbers.forEach(cube);
//
// numbers.forEach(display);

let fruits = ["aPple","ranGe","BanAna","CocoNut"];

function display(element) {
    console.log(element);
}

function upperCase(element,index,array) {
    array[index] = element.toUpperCase();
}

function lowerCase(element,index,array) {
    array[index] = element.toLowerCase();
}
function capitalize(element,index,array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

fruits.forEach(upperCase);
console.log(...fruits);

fruits.forEach(lowerCase);

fruits.forEach(capitalize);

fruits.forEach(display);

console.log(...fruits);
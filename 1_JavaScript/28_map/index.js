//
// const numbers = [1,2,3,4,5];
//
// function square(element) {
//     return Math.pow(element,2);
// }
// function cube(element) {
//     return Math.pow(element,3);
// }
//
//
//
// const  squares = numbers.map(square);
// const  cubes = numbers.map(cube);
//
// console.log(cubes);


const students = ["Spongebob","Patrick","Squidward","Sandy"];

function upperCase(element) {
    return element.toUpperCase();
}
function lowerCase(element) {
    return element.toLowerCase();
}

const studentUpper = students.map(upperCase);
console.log(studentUpper);
console.log(students);

const dates = ["2024-1-10","2025-2-20","2026-3-30"];

function formatDates(element) {
    const parts = element.slice("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

const formatedDates = dates.map(formatDates);

console.log(formatedDates);

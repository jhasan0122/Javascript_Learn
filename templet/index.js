// let a =1;
// let b=2;
//
// [a,b] = [b,a];
//
// console.log(a);
// console.log(b);

//
// const colors = ["red","green","blue","black","white"];
//
// [colors[0] , colors[4]] = [colors[4] , colors[0]];
//
// // console.log(colors);
//
// const [firstColor,secondColor,thirdColor,...extraColors] = colors;
//
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

const person1 ={
    firstName : "Jehan",
    lastName : "Hasan",
    age : 30,
    job : "Fry cook",
}
const person2 ={
    firstName : "Patrik",
    lastName : "Star",
    age : 34,
}

const {firstName,lastName,age,job}= person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
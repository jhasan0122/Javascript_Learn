// Destructuring = extract values from array amd objects,
//                then assign them to variables in a convenient way
//                     [] = to perform array destructuring
//                     () = to perform object destructuring



// let a = 1;
// let b = 2;
//
// [a,b] = [b,a];
//
// console.log(a);
// console.log(b);

// const colors = ["red","green","blue","black","white"];
//
// [colors[0],colors[4]] = [colors[4],colors[0]];
//
// console.log(colors);
//
// const [firstColor,secondColor,thirdColor,...extra] = colors;
//
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extra);

function displayPerson({firstName,lastName,age,job="Unemployed"}) {
    console.log(`Name: ${firstName} ${lastName}` );
    console.log(`Age: ${age}` );
    console.log(`Job: ${job}` );
}


const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age : 30,
    job: "Fry Cook",
}
const person2 = {
    firstName: "Patric",
    lastName: "Star",
    age : 34,
}
//
// const {firstName,lastName,age,job="unemployed"} = person2;
//
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

displayPerson(person1);
displayPerson(person2);
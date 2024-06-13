//
// let fruits = ["apple","orange","banana","coconut","pineapple"];
// fruits.sort((a,b) => b - a);
//
// console.log(fruits);
//
//
// let numbers = [1,10,2,9,3,8,4,7,5,6];
//
// numbers.sort((a,b) => a - b);
// numbers.sort((a,b) => b - a);
//
// console.log(numbers);

const people = [{name: "Spongebob", age: 30 , gpa: 3.0},
                                            {name: "Patrix", age: 37 , gpa: 1.5},
                                            {name: "Squidward", age: 51 , gpa: 2.5},
                                            {name: "Sandy", age: 27 , gpa: 4.0}];

// people.sort((a,b)=> b.age - a.age);
// people.sort((a,b)=> b.gpa - a.gpa);
// people.sort((a,b)=> a.name.localeCompare(b.name));
people.sort((a,b)=> b.name.localeCompare(a.name));

console.log(people);


const person1 = {
    firstName : "Jehan",
    lastName : "Hasan",
    age : 30,
    isEmployed: true,

    sayHello: function () { console.log("Hi I am Jehan") },
    eat: function () {console.log("I am eating a Krabby Patty")},

}
const person2 = {
    firstName : "Patric",
    lastName : "Star",
    age : 42,
    isEmployed: false,

    sayHello:  () =>  console.log("Hey I am Patric...") ,
    eat:  () =>console.log("Pattric is eating a roast beef and pizza"),
}

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
//
// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();

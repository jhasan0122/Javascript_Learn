//
// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent : true,
//     hobbies : ["karate","jellyfishing","cooking"],
//     address: {
//         street : "124 Conch St.",
//         city: "Bikini Bottom",
//         country : "Int. Water"
//     }
// }
//
// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[0]);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.country);
//
// for(const property in person.address){
//     console.log(person.address[property]);
// }

class Person{
    constructor(name,age,...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street,city,country) {
        this.street = street;
        this.country = country;
        this.city = city;
    }
}

const person1 = new Person("Spongebob",30,
                                    "124 Conch St.",
                                            "Bikini Bottom",
                                            "International Order");
const person2 = new Person("Patric",37,
                                    "128 Conch St.",
                                            "Bikini Bottom",
                                            "International Order");
const person3 = new Person("Squidward",45,
                                    "126 Conch St.",
                                            "Bikini Bottom",
                                            "International Order");

console.log(person3.name);
console.log(person3.age);
console.log(person3.address.street);
console.log(person3.address.city);
console.log(person3.address.country);
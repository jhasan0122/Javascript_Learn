
const person1 ={
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function () {console.log(`Hi I am ${this.name}`)},
    eat: function (){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();
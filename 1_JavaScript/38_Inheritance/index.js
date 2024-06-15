
class Aniaml{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Aniaml{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Aniaml{
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Aniaml{
    name = "hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const  rabit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabit.alive = false;


console.log(rabit.alive);
rabit.eat();
rabit.sleep();
rabit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();


console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();
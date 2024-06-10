

const fruits= [{name:"Apple",color:"red",calories:95},
                                        {name:"Orange",color:"orange",calories:45},
                                        {name:"banana",color:"yellow",calories:105},
                                        {name:"coconut",color:"white",calories:159},
                                        {name:"pineapple",color:"yellow",calories:37}];

console.log(fruits[3].name);
console.log(fruits[3].calories);

fruits.push({name:"grapes",color:"purple",calories: 62});
fruits.pop();


fruits.splice(1,2);
// console.log(fruits);

// Foreach

fruits.forEach(fruit => console.log(fruit));

//  Map

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);


//      Filter

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowerCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowerCalFruits);
console.log(highCalFruits);


//      Reduce

const maxFruits =
    fruits.reduce((max,fruit) =>
        (fruit.calories > max.calories) ? fruit : max)
const minFruits =
    fruits.reduce((min,fruit) =>
        (fruit.calories < min.calories) ? fruit : min)

console.log(maxFruits);
console.log(minFruits);

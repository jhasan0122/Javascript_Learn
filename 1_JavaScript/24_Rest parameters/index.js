
function opeFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}


// const food1 = "pizza";
// const food2 = "Hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";
//
// // opeFridge(food1,food2,food3,food4,food5)
//
// const foods =  getFood(food1,food2,food3,food4,food5);
// console.log(foods);

function sum(...numbers) {
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}


function avg(...numbers) {
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result/numbers.length;
}

// console.log(sum(1,2,3));
// console.log(avg(75,100,85,90,50))

function conbineString(...strings) {
    return strings.join(" ");
}


const fullName = conbineString("Jehan","Hasan","Adib","III")

console.log(fullName);
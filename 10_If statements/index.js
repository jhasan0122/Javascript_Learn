
//
// let age = 25;
//
// if(age >= 18){
//     console.log("You are old enough to enter the site");
// }
// else if(age<0){
//     console.log("You age cant be below 0");
// }
// else{
//     console.log("You must be 18 to enter the site");
// }

const myText = document.getElementById('myText');

const  mySubmit = document.getElementById('mySubmit');

const resultElement = document.getElementById('resultELement');

let age;

mySubmit.onclick = function () {

    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `"You are too old to enter this site"`;
    }
    else if(age == 0){
        resultElement.textContent = `You are just born`;
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(age < 0){
        resultElement.textContent = `Your age cant be 0`;
    }
    else{
        resultElement.textContent = `You must be 18 to enter the site`;
    }
}


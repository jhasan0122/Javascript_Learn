
// const min = 50;
// const max = 100;
//
//
// let randomNum = Math.floor(Math.random() * 6) +1;
// randomNum = Math.floor(Math.random() * 100) +1;
//
// randomNum = Math.floor(Math.random() * (max-min)) + min;
//
// console.log(randomNum);


const myButton = document.getElementById('myButton');
const label1 = document.getElementById('myLabel1');
const label2 = document.getElementById('myLabel2');
const label3 = document.getElementById('myLabel3');

const min = 1;
const max = 6;

let randomNum1,randomNum2,randomNum3;

myButton.onclick = function () {
    randomNum1 = Math.floor(Math.random() * (max) + min);
    randomNum2 = Math.floor(Math.random() * (max) + min);
    randomNum3 = Math.floor(Math.random() * (max) + min);
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;

}
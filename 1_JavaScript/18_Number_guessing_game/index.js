

const  minNum = 1;
const  maxNum = 100;
const ans = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


let attemps= 0;

let guess ;
let running =true;

console.log(ans);

while (running){

    guess = window.prompt(`Guess a number between ${minNum} to ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attemps++;
        if(guess < ans){
            window.alert("Too low");
        }
        else if(guess > ans){
            window.alert("Too high");
        }
        else{
            window.alert(`Correct! The ans was ${ans}. It took ${attemps} attemps`);
            running = false;
        }
    }


}
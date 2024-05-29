

// function happyBirthDay(username,age){
//     console.log("Happy birthDay to you");
//     console.log("Happy birthDay to you");
//     console.log(`Happy birthDay dear ${username}`);
//     console.log("Happy birthDay to you");
//     console.log(`you are ${age} years old`);
// }
//
// happyBirthDay("Jehan",25);

function add(x,y){
    let result = x + y;
    return result;
}

function substract(x,y) {
    return x-y;
}
function multiply(x,y) {
    return x*y;
}

function isEven(number) {
    return number % 2 ==0;
}

// function isValidEmail(email) {
//     if(email.includes("@")){
//         return true;
//     }
//     return false;
// }
function isValidEmail(email) {
    return email.includes("@");
}



console.log(add(5,3));
console.log(substract(5,3));
console.log(multiply(5,3));
console.log(isEven(11));
console.log(isValidEmail("BroFake@com"));



let userName = "Bro Code";



// console.log(userName.charAt(0));

// console.log(userName.indexOf('o'));   //first occur
// console.log(userName.lastIndexOf('o'));   //last occur
// console.log(userName.length);


// userName = userName.trim();
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();
// userName = userName.repeat(3);
// console.log(userName);



// let result = userName.startsWith(" ");   //begin
// result = userName.includes(" ");    //contain
//
// if(result){
//     console.log("Your username can't begin with ' ' ")
// }
// else{
//     console.log(userName);
// }


let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll('-','/');

phoneNumber = phoneNumber.padStart(20,"0")
phoneNumber = phoneNumber.padEnd(15,"0")

console.log(phoneNumber);
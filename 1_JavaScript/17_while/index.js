
//While
// let username = "";
//
// while (username === ""){
//     username  = window.prompt(`Enter your name:`);
// }

// DO while

// let username ;
//
// do{
//     username  = window.prompt(`Enter your name:`);
// }while (username === "");


// console.log(`Hello ${username}`);

let loggedIn = false;
let username ;
let password;

while (!loggedIn){
    username = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password:`);

    if(username === "myUserName" && password ==="myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Please try again");
    }
}

// No method chaining
let username = window.prompt("Enter your username:");

// username = username.trim();
//
// let letter =username.charAt(0);
// letter = letter.toUpperCase();
//
// let extraChar = username.slice(1);
// extraChar = extraChar.toLowerCase();
//
// username = letter + extraChar;

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();


console.log(username);
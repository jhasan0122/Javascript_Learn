

let username;

// username = window.prompt("Whats your username");
//
// console.log(username);

document.getElementById("mySubmit").onclick = function (){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
    console.log(username);
}
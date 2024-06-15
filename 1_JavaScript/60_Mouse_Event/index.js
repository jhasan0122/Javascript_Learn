
const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

// function changeColor(event) {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕 ";
// }

// myBox.addEventListener("click",function (event) {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕 ";
// });

// myBox.addEventListener("click", (event)=> {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 🤕 ";
// });
//
// myBox.addEventListener("mouseover",event=>{
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Dont do it  😵";
// });
//
// myBox.addEventListener("mouseout",event=>{
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click me 😁";
// });


myBtn.addEventListener("click", (event)=> {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕 ";
});

myBtn.addEventListener("mouseover",event=>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Dont do it  😵";
});

myBtn.addEventListener("mouseout",event=>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click me 😁";
});
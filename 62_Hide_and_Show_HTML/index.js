
const myButton = document.getElementById("myButton");

const myImg = document.getElementById("myImg");

myButton.addEventListener("click",event=>{
    myImg.style.display = "none";
    myButton.textContent = "Show";
});
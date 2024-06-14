
const myBox = document.getElementById("myBox");

// document.addEventListener("keydown",event=>{
//    // console.log(`Key down = ${event.key}`);
//    myBox.textContent = "😊";
//    myBox.style.backgroundColor = "tomato";
// });
// document.addEventListener("keyup",event=>{
//    // console.log(`Key up = ${event.key}`);
//    myBox.textContent="😀";
//    myBox.style.backgroundColor = "lightblue";
// });

const moveAmmount = 100;
let x = 0;
let y = 0;
document.addEventListener("keydown",event=>{
   if(event.key.startsWith("Arrow")){

      event.preventDefault();

      switch (event.key){
         case "ArrowUp":
            y -= moveAmmount;
            break;
         case "ArrowDown":
            y += moveAmmount;
            break;
         case "ArrowLeft":
            x -= moveAmmount;
            break;
         case "ArrowRight":
            x += moveAmmount;
            break;
      }
      myBox.style.top = `${y}px`;
      myBox.style.left = `${x}px`;
   }
});
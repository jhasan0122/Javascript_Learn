
let buttons = document.querySelectorAll(".myButton");

//  `ADD HTML/CSS PROPERTIES

// buttons.forEach(button=>{
//     button.style.backgroundColor = "green";
//     button.textContent += "😁"
// });

//  CLICK EVENT LISTENER
// buttons.forEach(button=>{
//    button.addEventListener("click",event=>{
//        event.target.style.backgroundColor = "tomato";
//    })
// });

//  CLICK EVENT LISTENER

// buttons.forEach(button =>{
//     button.addEventListener("mouseover",event =>{
//         event.target.style.backgroundColor = "hsl(203, 92%, 50%)";
//     })
// })
// buttons.forEach(button =>{
//     button.addEventListener("mouseout",event =>{
//         event.target.style.backgroundColor = "hsl(203, 92%, 61%)";
//     })
// })

//  ADD AN ELEMENT

// const  newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButton";
// document.body.append(newButton);
// buttons = document.querySelectorAll(".myButton");
// console.log(buttons);


// Remove AN ELEMENT

buttons.forEach(button =>{
    button.addEventListener("click",event=>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButton");
        console.log(button);
    });

});




// STEP 1: CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2: ADD ATTRIBUTE/PROPERTIES
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3: APPEND ELEMENT TO DOM

// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
// document.getElementById("box2").prepend(newH1);

// const box3 =document.getElementById("box3");
// document.body.insertBefore(newH1,box3);


// WITHOUT ID FOR EVERY BOX

// const boxes = document.querySelectorAll(".box");
//
// document.body.insertBefore(newH1,boxes[3]);


//  REMOVE HTML ELEMENT

document.getElementById("box1").removeChild(newH1);

// STEP 1: CREATE THE ELEMENT

const newListItem = document.createElement("li");

// STEP 2: ADD ATTRIBUTE/PROPERTIES

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";



// STEP 3: APPEND ELEMENT TO DOM

// document.body.append(newListItem);
// document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const orange =document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem,orange);

// const banana =document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem,banana);


// WITHOUT ID FOR EVERY ITEM

// const listItems = document.querySelectorAll("#fruits li");
//
// document.getElementById("fruits").insertBefore(newListItem,listItems[1]);


//  REMOVE HTML ELEMENT

document.getElementById("fruits").removeChild(newListItem);


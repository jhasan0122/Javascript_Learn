
// function sayHello() {
//     window.alert("Hello");
// }

// setTimeout(function () {window.alert("Hello")},3000);


let timeOutId;

function startTimer() {
    timeOutId = setTimeout(()=> window.alert("Hello"),3000);
    console.log("Started");
}

function clearTimer() {
    clearTimeout(timeOutId)
    console.log("Cleared");
}




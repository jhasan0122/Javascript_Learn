//
//
//
// hello(wait);
//
// function hello(callback) {
//     console.log(`Hello`);
//     callback();
// }
//
// function wait() {
//     console.log('Wait!');
// }
//
// function leave() {
//     console.log("Leave!");
// }
//
// function goodbye() {
//     console.log(`Goodbye`);
// }

function sum(callback,x,y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

sum(displayPage,5,9);

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}
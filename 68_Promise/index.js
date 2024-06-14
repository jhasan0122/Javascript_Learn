
// function walkDog(callback) {
//     setTimeout(()=>{
//         console.log("You walk the dog 🐕");
//         callback();
//     },1500);
// }
function walkDog() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{

            const dogWalked = false;
            if(dogWalked){
                resolve("You walk the dog 🐕");
            }
            else{
                reject("You didnt walked the dog");
            }


        },1500);
    });
}
// function cleanKitchen(callback) {
//     setTimeout(()=>{
//         console.log("You clean the kitchen");
//         callback();
//     },2500);
// }
function cleanKitchen() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You clean the kitchen");
            }
            else{
                reject("You didnt clean the kitchen");
            }


        },2500);
    });
}
// function takeOutTrash(callback) {
//     setTimeout(()=>{
//         console.log("You Take out the trash");
//         callback();
//     },500);
// }
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You Take out the trash");
            }
            else{
                reject("You dint take out the trash");
            }

        },500);
    });
}

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{
//             console.log("You finished all the chores");
//         });
//     });
// });

// walkDog().then(value => console.log(value));
walkDog().then(value => { console.log(value) ; return cleanKitchen()})
         .then(value => {console.log(value) ; return takeOutTrash()})
         .then(value => {console.log(value) ; console.log("You finished all the chores")})
          .catch(error => {
              console.log(error);
          });

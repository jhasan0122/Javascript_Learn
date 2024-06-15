//
// try{
//     console.log(x);
//     //     NETWORK ERROR
//     //     PROMISE REJECTION
//     //     SECURITY ERROR
// }
// catch (error){
//     console.log(error);
// }
// finally {
//     //     CLOSE FILE
//     //     CLOSE CONNECTION
//     //     RELEASE RESOURCES
//     console.log("This always executes");
//
// }
//



try{
    const dividend = Number(window.prompt("Enter a divident: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You cant divide bt zero");
    }
    if(isNaN(divisor) || isNaN(dividend)){
        throw new Error("Value must be a number");
    }

    const result = dividend / divisor;

    console.log(result);
}
catch (error){
    console.error(error);
}

console.log("You have reached the end!");
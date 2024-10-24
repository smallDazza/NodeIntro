// try, catch, throw, finally

// try{
//     //experimentation or execution
//     //throw some error message
// }
// catch{
//     //statements
// }
// finally{
//     //always runs
// }

try{
    let a = 15, b = 0;
    if (b === 0) {
        // throw "Trying to divide by zero...";
        throw new Error("New Error: Division by Zero!!!!")
    }
}
catch (error) {
    console.error("Cannot divide by zero !!");
    console.log(error);
}
finally{
    console.log("I always run !!!!.....");
}
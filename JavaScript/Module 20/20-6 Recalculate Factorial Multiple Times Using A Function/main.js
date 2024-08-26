// let factorial = 1;
// for(let i = 1; i <= 10; i++){
//     factorial = factorial * i;
// }

// console.log(factorial);

function factorial(num){
    let fact = 1;

    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }

    return fact;
}

let myFactorial = factorial(30);

console.log("My Factorial is ", myFactorial);
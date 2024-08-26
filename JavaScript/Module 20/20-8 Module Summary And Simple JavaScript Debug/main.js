// function getFactorial(number){
//     let factorial = 1;
//     for(let i = 1; i <= number; i++){
//         factorial = factorial * 1;
//     }
//     return factorial;
// }
// const myFactorial = getFactorial(8);
// console.log(myFactorial);

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i; // Multiply by i instead of 1
    }
    return factorial;
}

const myFactorial = getFactorial(8);
console.log(myFactorial);


//celcius to farenheit

function celsiusToFarenheit(celsius){
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
}

const myfahrenheit = celsiusToFarenheit(30);
console.log(myfahrenheit);
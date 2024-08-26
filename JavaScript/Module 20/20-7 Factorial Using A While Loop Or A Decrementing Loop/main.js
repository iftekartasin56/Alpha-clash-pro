// function getFactorial(number){
//     let factorial = 1;

//     let i = 1;

//     while(i <= number){

//         factorial = factorial * i;

//         i++;
//     }

//     return factorial;
// }

// const myFactorial = getFactorial(6);

// console.log(myFactorial); 


function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(i>=1){
        factorial = factorial *i;
        i--;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);


//for loop reverse

function getFactorial1(number){
    let factorial1 = 1;
    for(let i =number; i>= 1; i--){
        factorial1 = factorial1 * i;
    }
    return factorial1;
}

const myFactorial2 = getFactorial1(6);
console.log(myFactorial2);
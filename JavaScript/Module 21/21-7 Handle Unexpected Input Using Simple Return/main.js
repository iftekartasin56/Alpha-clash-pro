// const fibo = [0, 1];

// for(let i = 2; i<= 20; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }

// console.log(fibo);


/*

function fibonacciSeries(num){
    let fibo = [0, 1];
    for(let i = 2; i<= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }

    return fibo;
}

const totalNum = fibonacciSeries(20);
console.log(totalNum);

*/


function fibonacciSeries(num){

    if(typeof num != num){
        return 'Please Give a Number';
    };
    if(num < 2 ){
        return 'Please enter a positive number greater than 1';
    };

    let fibo = [0, 1];
    for(let i = 2; i<= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    };
    return fibo;
}

const totalNum = fibonacciSeries(-200);
console.log(totalNum);
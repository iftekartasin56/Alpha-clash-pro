const numbers = [44, 23, 34, 32, 54, 5, 78];

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const elm = numbers[i];

    sum = sum + elm;
}

console.log(sum);

function arrayTotal(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const elm = numbers[i];
        sum = sum + elm;
    }
    return sum;
}

let totalSum = arrayTotal(numbers);
console.log(totalSum);
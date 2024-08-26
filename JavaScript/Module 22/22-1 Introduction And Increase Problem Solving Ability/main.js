function getLargestNumber(numbers){
    let max = numbers[0];  //

    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > max){
            max = element;
        }
    }
    return max;
}

let largestNumber = getLargestNumber([12, 20, 30, 40, 50, 60, 70, 80, 1000, 5800, 90, 100, 200, 300, 400, 500, 600, 700]);
console.log(largestNumber);



function getSmallestNumber(numbers){
    let min = numbers[0];  //

    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < min){
            min = element;
        }
    }
}
let smallNumber = getSmallestNumber([12, 20, 30, 40, 50, 60, 70, 80, 1000, 5800, 90, 100, 200, 300, 400, 500, 600, 700]);
console.log(smallNumber);

//find even number in array
function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = findEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
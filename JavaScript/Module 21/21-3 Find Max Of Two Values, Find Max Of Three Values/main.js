const business = 450;
const minister = 350;
const army = 750;

if(business > minister){
    console.log(`Business is bigger ---> ${business}`);
}else{
    console.log(`Minister is bigger ---> ${minister}`);
}

var max = Math.max(business, minister, army);
console.log(`Largest is ----> ${max}`);


function findLargest(first, second){
    if(first > second){
        return first;
    }else{
        return second;
    }
}

var LargestNumber = findLargest(250, 50);
console.log(LargestNumber);

//Task -1 : Create a Function that takes three numbers as input parameter and returns you the largest number of the three

function findLargestNumber(a, b, c) {
    return Math.max(a, b, c);
}
let number1 = 10;
let number2 = 20;
let number3 = 30;

let largest = findLargestNumber(number1, number2, number3);
console.log("The largest number is: " + largest); 

//Task - 2: write a function to find the smallest of three number.

function findSmallestNumber(a, b, c) {
    return Math.min(a, b, c);
}

let num1 = 10;
let num2 = 20;
let num3 = 5;

let smallest = findSmallestNumber(num1, num2, num3);
console.log("The smallest number is: " + smallest);
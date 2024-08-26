function largestElement(numbers){
    let largest = 0;

    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }

    return largest;
}
const myNumbers = largestElement([12, 15, 54, 250, 150, 212, 321, 255]); 
console.log(myNumbers);

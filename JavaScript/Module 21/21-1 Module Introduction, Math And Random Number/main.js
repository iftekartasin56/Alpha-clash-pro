const myNumber = -5;
const output = Math.abs(myNumber);
console.log(output);

const myNumber1 = 6.6398;
const output1 = Math.ceil(myNumber1);
console.log(output1);

const myNumber2 = 15.8985;
const output2 = Math.floor(myNumber2);
console.log(output2);

const myNumber3 = 31.58;
const output3 = Math.round(myNumber3);
console.log(output3);


const output4 = Math.random()*10;
const rounded = Math.round(output4);
console.log(rounded);

for(let i = 0; i <= 6; i++){
    const output5 = Math.random() * 6;
    const rounded1 = Math.round(output5);
    console.log(rounded1);
}
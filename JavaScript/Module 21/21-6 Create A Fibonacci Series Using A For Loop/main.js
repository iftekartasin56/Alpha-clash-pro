/*

3rd = 2nd + 1st
4th = 3rd + 2nd
5th =  4th + 3rd
6th = 5th + 4th

nth = (n-1)th + (n-2)th

*/

const fibo = [0, 1];

for(let i = 2; i<= 20; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log(fibo);
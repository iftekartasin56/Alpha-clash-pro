const greetings = "Hello, how are you";

function reverseString(text){
    let reverse = '';
    for(const letter of text){
        reverse = letter + reverse;
    }
}

const reverse = reverseString(greetings);

console.log(reverse);
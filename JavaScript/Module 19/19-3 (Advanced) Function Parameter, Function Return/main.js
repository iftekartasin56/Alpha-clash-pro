function bringSingara(taka){
    console.log("Eat for biryani ---> ",taka);
}

bringSingara(500);


function fullName(fname, lname){
    console.log("Your Full Name is : ", fname, lname);
}

fullName("Iftekar", "Tasin");


function sumNumber(a){
    console.log("Total Sum - ", a)
}
var total_sum = 200+150+300+250+854;
sumNumber(total_sum);

// function priceSomething(clothes){
//     console.log("Price Something = ", clothes);

//     var person = 5;
//     var quantity = clothes * person;

//     return quantity;
// }

// var totalPrice = 2500;
// var personPrice = priceSomething(totalPrice);

// console.log(personPrice);


function nothing(taka){
    console.log("Total Taka - ", taka);

    var price = 50;
    var priceQuantity = taka / price;

    return priceQuantity;
}

var money = 250;
var Price = nothing(money);

console.log(Price);

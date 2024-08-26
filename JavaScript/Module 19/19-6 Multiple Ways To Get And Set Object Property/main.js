var computer ={
    price: 20000,
    storage: 156,
    color: 'silver',
    processor: 'intel i5'
}

console.log(computer.processor);

//set a object property value
computer.price = 18000;

console.log(computer);

//different ways to set a value of an object property

computer.price = 15000;
computer["price"] = 14000;
console.log(computer);


var propertyName = "price";

computer[propertyName] = 12000;

console.log(computer);
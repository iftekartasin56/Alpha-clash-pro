const products = [
    {name: 'laptop', price: 43000},
    {name: 'shirt', price: 500},
    {name: 'watch', price: 3680},
    {name: 'phone', price: 55000},
];

let totalPrice = 0;

for(const product of products){
    totalPrice = totalPrice + product.price;
}

console.log(totalPrice);

const cart = [
    {name: 'laptop', price: 43000, 'Quantity': 1},
    {name: 'shirt', price: 500, 'Quantity': 8},
    {name: 'watch', price: 3680, 'Quantity': 3},
    {name: 'phone', price: 55000, 'Quantity': 1},
];

let cartTotal = 0;

for(const product of cart){
    const productTotal = product.price * product.Quantity;

    cartTotal = cartTotal + productTotal;
}

console.log(cartTotal);
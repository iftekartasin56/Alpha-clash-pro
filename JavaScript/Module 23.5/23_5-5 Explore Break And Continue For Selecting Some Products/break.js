const products= [
    {name: 'iphone 14 phone', 'price': 70000},
    {name: 'samsung s24 phone', 'price': 124000},
    {name: 'dell laptop', 'price': 50000},
    {name: 'lenovo laptop', 'price': 55000},
    {name: 'asus laptop', 'price': 35000},
    {name: 'smartwatch samsung', 'price': 2000},
    {name: 'apple watch', 'price': 4500},
    {name: 'one plus phone', 'price': 27000},
];

for(const product of products){
    // if(product.price < 5000){
    //     break;
    // }

    if(product.price < 10000){
        continue;
    }
    console.log(product);
}
const products= [
    {name: 'iphone 14 phone', 'price': 70000},
    {name: 'samsung s24 phone', 'price': 124000},
    {name: 'dell laptop', 'price': 50000},
    {name: 'lenovo laptop', 'price': 55000},
    {name: 'asus laptop', 'price': 35000},
    {name: 'smartwatch samsung', 'price': 7000},
    {name: 'apple watch', 'price': 20000},
    {name: 'one plus phone', 'price': 27000},
];

function searchProducts(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
            result.push(product);
        }
    }
    return result;
}

const matched = searchProducts(products, 'phone');

console.log(matched);
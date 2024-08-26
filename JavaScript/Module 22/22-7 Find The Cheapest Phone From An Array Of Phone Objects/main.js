const phones = [
    {name: 'samsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'waltotn m20', price: 25000, camera: 8, storage: 64},
    {name: 'Iphone 11pro max', price: 75000, camera: 12, storage: 128},
    {name: 'Iphone 12pro ', price: 85000, camera: 12, storage: 128},
    {name: 'Iphone 13pro max', price: 95000, camera: 12, storage: 128},
    {name: 'Iphone 14pro ', price: 105000, camera: 12, storage: 128},
    {name: 'Iphone 15pro max', price: 115000, camera: 12, storage: 128},
    {name: 'Iphone 16pro ', price: 125000, camera: 12, storage: 128},
];

let cheapest = phones[0];

for(const phone of phones){
    //compare price only
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);

var myArray = [
    {"ID": 1, "Cost": 200},
    {"ID": 2, "Cost": 1000},
    {"ID": 3, "Cost": 50},
    {"ID": 4, "Cost": 500}
]

var lowest = Number.POSITIVE_INFINITY;
var highest = Number.NEGATIVE_INFINITY;
var tmp;
for (var i=myArray.length-1; i>=0; i--) {
    tmp = myArray[i].Cost;
    if (tmp < lowest) lowest = tmp;
    if (tmp > highest) highest = tmp;
}
console.log(highest, lowest);
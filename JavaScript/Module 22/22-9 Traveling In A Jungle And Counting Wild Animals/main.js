function animalCount(miles){
    const animalRate10 = 10;
    const animalRate10to20 = 50;
    const animalRateupto20 = 100;
    if(miles <= 10){
        const count = miles * animalRate10;
        return count;
    }else if(miles <= 20){
        const first10 = 10 * animalRate10;
        const restMiles = miles - 10;
        const seconddeseanimals  = restMiles * animalRate10to20;
        const totalAnimals = first10 + seconddeseanimals;
        return totalAnimals;
    }else{
        const first10 = 10 * animalRate10;
        const seconddeseanimals  = 10 * animalRate10to20;
        const restMiles = miles - 20;
        const restdenseAnimals = restMiles * animalRateupto20;
        const totalAnimals =  first10 + seconddeseanimals + restdenseAnimals;
        return totalAnimals;
    }
}
const animals = animalCount(35);
console.log(animals);
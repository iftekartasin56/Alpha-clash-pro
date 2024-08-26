/*

 chair = 3cft/1
 table = 10cft/1
 bed = 50cft/1

*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood   = 3;
    const perTableWood   = 10;
    const perBedWood   = 50;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWood;
}

const firstOption = woodCalculator(1, 1, 1);
console.log(firstOption);
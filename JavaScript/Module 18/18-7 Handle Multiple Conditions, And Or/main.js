var gotJob = true;
var moneySaved = 1500000;
var hasFlat = true;

/*
if(gotJob == false){
    console.log("lets got to marriage.");
}else{
    console.log("You can go another one.");
}
*/

if(gotJob && moneySaved > 200000 && hasFlat == true){
    console.log("lets got to marriage.");
}else{
    console.log("You can go another one.");
}

if(gotJob || moneySaved > 200000 || hasFlat == true){
    console.log("lets got to marriage.");
}else{
    console.log("You can go another one.");
}

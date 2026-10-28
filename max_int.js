let val = [2,3,5,7,9,1];
let max = val[0];
for(let i = 1; i < val.length; i++){
    if(val[i] > max){
        max = val[i];
    }
}
console.log("The maximum value is: " + max);    
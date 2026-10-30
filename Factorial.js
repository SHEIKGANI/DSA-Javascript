

// function factorial(n){
//     if(n===1){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// console.log(factorial(6));


// -------------Iterative Apporach------------

function fnIterative(n){
    let result = 1;
    for(let i = 1;i <= n;i++){
        result = result * i;
    }
    return result;
}

console.log(fnIterative(5));
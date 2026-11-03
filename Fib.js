// Input = 5
//Ouput = 5

// function fib(n){
//     if(n === 0) return 0;
//     if(n === 1) return 1;

//     return fib(n-1)+fib(n-2);
// }
// console.log(fib(9));

///Power of n

function pow(a,b){
    if(b === 0)return 1;
    return a * pow(a,b-1);
}
console.log(pow(4,3));
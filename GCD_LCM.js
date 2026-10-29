// let a = 12;
// let b = 18;
// while(b !== 0){
//     let reminder = a % b;
//     a = b;
//     b = reminder;
// }
// console.log(a);

/////--------------leetcode--------------//////

// var findGCD = function (nums) {
//   let a = Math.min(...nums);
//   let b = Math.max(...nums);
//   while (b !== 0) {
//     let reminder = a % b;
//     a = b;
//     b = reminder;
//   }
//   return a;
// };

//////------LCM------//////

// const x = 15;
// const y = 45;
// let a = x;
// let b = y;
// // Euclidean Algorithm to find GCD
// while (b !== 0) {
//   let rem = a % b;
//   a = b;
//   b = rem;
// }
// const gcd = a;
// const lcm = (x * y) / gcd;
// console.log(lcm);

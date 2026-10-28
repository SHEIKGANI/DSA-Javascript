// Math + Recursion Program Basic 

// *************************************************
// golden rule of recursion
// 1.last_digits = num % 10;
// 2.reverse = reverse * 10 + last_digits;
// 3.num = Math.floor(num / 10);
// ************************************************

// --------count the number of digits in a number using recursion----------
// Input = 390123211
// output = 9

// let val = 3901211;
// let max= 0;
// while(val > 0){
//     val = Math.floor(val/10);
//     max++;
// }
// console.log(max);

// ------reverse the number using recursion----------

// let val = 4321;
// let reverse = 0;
// while(val > 0){
//     last_digits = val % 10;
//     reverse = reverse * 10 + last_digits;
//     val = Math.floor(val / 10);
// }
// console.log(reverse);

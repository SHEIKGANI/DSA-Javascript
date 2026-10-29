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

// ---------------Palindrome Number------------------//

// let num = 1331;
// let original = num;
// let reverse = 0;

// while(num > 0){
//     last_digits = num%10;
//     reverse = reverse*10 + last_digits;
//     num = Math.floor(num / 10);
// }
// if(original === reverse){
//     console.log("Palindrome Number")
// }else{
//     console.log("Not a Palindrome Number")
// }
 

// ------:leetcode Problem :-----
// var isPalindrome = function(x) {
//     let reverse = 0;
//     let copy = x;
//     while(copy > 0){
//         const last_digits = copy % 10;
//         reverse = reverse*10 + last_digits;
//         copy = Math.floor(copy/10);
//     }
//     return reverse == x;
// };
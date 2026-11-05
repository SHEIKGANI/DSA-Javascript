///-------Reverse Array-------///

// let arr = [10,20,30,40];
// let start = 0;
// let end = arr.length - 1;
// while(start < end){
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
// }
// console.log(arr);

//////--------Reverse String--------////

// let str = "Hello";
// let Arrstr = str.split("");
// let start = 0;
// let end = Arrstr.length - 1;
// while(start < end){
//     let temp = Arrstr[start];
//     Arrstr[start] = Arrstr[end];
//     Arrstr[end] = temp;
//     start++;
//     end--;
// }
// console.log(Arrstr.join(""));


///////////Remove Duplicates from an Array////////
let arr = [1,2,3,3,4,4,5,5,6];

let uniqueArr = [...new Set(arr)];

console.log(uniqueArr);

// let uniqueArr = [];
// for(let i = 0; i < arr.length; i++){
//     if(!uniqueArr.includes(arr[i])){
//         uniqueArr.push(arr[i]);
//     }   
// }

// for(let i = 0; i < arr.length; i++){
//     let isUnique = true;
//     for(let j = 0; j < uniqueArr.length; j++){
//         if(arr[i] === uniqueArr[j]){
//             isUnique = false;
//             break;
//         }
//     }
//     if(isUnique){
//         uniqueArr.push(arr[i]);
//     }
// }
// console.log(uniqueArr);

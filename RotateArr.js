function reverse(arr, start, end) {
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

let arr = [1, 2, 3, 4, 5];
let d = 2;
d = d % arr.length;
//Left rotation
reverse(arr, 0, d - 1);
reverse(arr, d, arr.length - 1);
reverse(arr, 0, arr.length - 1);
//right rotation
// reverse(arr,0,arr.length - 1);
// reverse(arr,0,d - 1);
// reverse(arr,d,arr.length - 1);
console.log(arr);
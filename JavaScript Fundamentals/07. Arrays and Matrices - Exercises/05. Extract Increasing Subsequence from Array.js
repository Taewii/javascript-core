function extractIncreasingSubSeq(arr) {
    let biggest = arr[0];
    let result = [];

    for (const num of arr) {
        if (num >= biggest) {
            result.push(num);
            biggest = num;
        }
    }

   // second solution

   // return arr.filter(x => {
   //      if (x >= biggest) {
   //          biggest = x;
   //          return true;
   //      }
   //  }).join('\r\n');

    return result.join('\r\n');
}

console.log(extractIncreasingSubSeq([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubSeq([1, 2, 3, 4]));
console.log(extractIncreasingSubSeq([20, 3, 2, 15, 6, 1]));
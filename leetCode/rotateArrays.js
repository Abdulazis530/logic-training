// var rotate = function (nums, k) {

//     let rightIndex = nums.length - k;
//     let leftIndex = 0


//     while (leftIndex < k) {
//         [nums[leftIndex], nums[rightIndex]] = [nums[rightIndex], nums[leftIndex]];
//         [nums[rightIndex - 1], nums[rightIndex]] = [nums[rightIndex], nums[rightIndex - 1]];
//         rightIndex++
//         leftIndex++
//     }
//     return nums

// };


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
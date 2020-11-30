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


var rotate = function (nums, k) {

    let temp
    let count = 0
    while (count < k) {
        temp = nums[nums.length - 1]
        for (let i = nums.length - 1; i > 0; i--) {
            nums[i] = nums[i - 1]
        }
        count++
        nums[0] = temp
    }

    return nums

}


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
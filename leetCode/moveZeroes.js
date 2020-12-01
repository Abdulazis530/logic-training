// // Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements

// // Input: [0,1,0,3,12]
// // Output: [1,3,12,0,0]

// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


const moveArray = (nums) => {
    let anchor = 0;
    for (let tracker = 0; tracker < nums.length; tracker++) {
        if (nums[tracker] !== 0) {
            [nums[anchor], nums[tracker]] = [nums[tracker], nums[anchor]];
            anchor++
        }
    }

    return nums

}

//old style
// var moveZeroes = function(nums) {
//     let anchor=0

//     for(let checker=0;checker<nums.length;checker++){
//         if(nums[checker]!==0){
//             let temp= nums[checker]
//             nums[checker]=nums[anchor]
//             nums[anchor]=temp
//             anchor++
//         }
//     }
//     return nums

//     }


console.log(moveArray([1, 1, 9, 9, 0, 5, 0, 6, 0, 8, 1]));
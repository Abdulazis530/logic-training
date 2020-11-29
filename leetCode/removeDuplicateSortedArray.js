const removeDuplicates = (nums) => {
    nums.push("separator")
    for (let current = 0; current < nums.length; current++) {
        if (nums[current] === "separator") break
        if (nums[current] === nums[current - 1]) continue
        nums.push(nums[current])
    }
    const indexSeparator = nums.indexOf("separator")
    nums.splice(0, indexSeparator + 1)
    return nums.length
};

console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 6, 6]));
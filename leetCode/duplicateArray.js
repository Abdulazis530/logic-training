// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

//example:
// Input: [1,2,3,1]
// Output: true

//example:
// Input: [1,2,3,4]
// Output: false

//example:
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

//the most efective way is using set

var containsDuplicate = function (nums) {

    let numbers = new Set();

    for (let num of nums) {
        if (!numbers.has(num)) {
            numbers.add(num);
        } else {
            return true;
        }
    }

    return false;

};
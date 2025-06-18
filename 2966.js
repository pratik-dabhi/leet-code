// 2966. Divide Array Into Arrays With Max Difference

/* You are given an integer array nums of size n where n is a multiple of 3 and a positive integer k.

Divide the array nums into n / 3 arrays of size 3 satisfying the following condition:

The difference between any two elements in one array is less than or equal to k.
Return a 2D array containing the arrays. If it is impossible to satisfy the conditions, return an empty array. And if there are multiple answers, return any of them. */

/* Example 1:

Input: nums = [1,3,4,8,7,9,3,5,1], k = 2

Output: [[1,1,3],[3,4,5],[7,8,9]]

Explanation:

The difference between any two elements in each array is less than or equal to 2. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    
    // Sort the array in ascending order
    const sortedNums = nums.sort((a, b) => a - b); 

    const result = [];     // Stores groups of 3 numbers
    let currentGroup = []; // Temporarily holds each group

    // Group the sorted array into subarrays of 3 elements
    for (const num of sortedNums) {
        currentGroup.push(num);
        if (currentGroup.length === 3) {
            result.push(currentGroup);
            currentGroup = [];
        }
    }

    // Validate each group: difference between max and min should be ≤ k
    for (let i = 0; i < result.length; i++) {
        const [min, , max] = result[i]; // first and third elements (sorted)
        if (max - min > k) {
            return []; // Invalid group found
        }
    }

    return result; // All groups valid
};

console.log(divideArray([1,3,4,8,7,9,3,5,1],2))
// #3151. Special Array I

/*  An array is considered special if the parity of every pair of adjacent elements is different. In other words, one element in each pair must be even, and the other must be odd. */

/* You are given an array of integers nums. Return true if nums is a special array, otherwise, return false. */

// Example 1:

// Input: nums = [1]

// Output: true

// Explanation:

// There is only one element. So the answer is true.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    
    if (nums.length === 1) {
        return true;
    }

    for (let i = 0; i < nums.length; i++) {
        const currentIsOdd = nums[i] % 2 !== 0;

        // Check with next element if not at the last index
        if (i < nums.length - 1) {
            const nextIsOdd = nums[i + 1] % 2 !== 0;

            if ((currentIsOdd && !nextIsOdd) || (!currentIsOdd && nextIsOdd)) {
                continue;
            }
        }

        // Special check for last element with previous one
        if (
            i === nums.length - 1 &&
            (
                (currentIsOdd && nums[i - 1] % 2 === 0) ||
                (!currentIsOdd && nums[i - 1] % 2 !== 0)
            )
        ) {
            continue;
        }

        return false;
    }

    return true;
};

console.log(isArraySpecial([2,3,4,5,8,1,4,5,8,3,1]));


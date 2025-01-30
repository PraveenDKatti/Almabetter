/* Determine the maximum sum of a subset of integers from a given array such that the sum is 
divisible by three, using an efficient approach to evaluate possible combinations. */

/* Example 1:
Input:
nums = [3,6,5,1,8]

Output:
18

Explanation:
Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3). */


var maxSumDivThree = function(nums) {
    // Your code goes here
    let totalSum = 0;
    let remainderOneMin = Infinity;
    let remainderTwoMin = Infinity;

    for (const num of nums) {
        totalSum += num;

        if (num % 3 === 1) {
            // Update the minimums for remainders 1 and 2
            remainderTwoMin = Math.min(remainderTwoMin, remainderOneMin + num);
            remainderOneMin = Math.min(remainderOneMin, num);
        } else if (num % 3 === 2) {
            // Update the minimums for remainders 2 and 1
            remainderOneMin = Math.min(remainderOneMin, remainderTwoMin + num);
            remainderTwoMin = Math.min(remainderTwoMin, num);
        }
    }

    // Adjust the sum based on its remainder when divided by 3
    if (totalSum % 3 === 0) return totalSum;
    if (totalSum % 3 === 1) return totalSum - remainderOneMin;
    return totalSum - remainderTwoMin;
};


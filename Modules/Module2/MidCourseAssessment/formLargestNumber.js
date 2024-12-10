/* Create the largest concatenated number from a list of non-negative integers, 
returning it as a string without leading zeros unless the result is "0". */


/* Example 2:
Input:
nums = [3,30,34,5,9]

Output:
"9534330"

Explanation:
Arranging the numbers in the order of "9", "5", "34", "3", "30" produces the largest number. */


var largestNumber = function(nums) {
    // Your code goes here
    nums = nums.map(n=>String(n))
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length-1;j++){
            if(nums[j]+nums[j+1]<nums[j+1]+nums[j]){
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
            }
        }
    }
    return nums.join("")
};
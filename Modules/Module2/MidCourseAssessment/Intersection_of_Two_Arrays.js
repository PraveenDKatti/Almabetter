/* write a Javascript function that returns array of common elements of two arrays, 
including duplicates, based on their frequency in both arrays. */

/* Example 2:
Input:
nums1 = [4,9,5], nums2 = [9,4,9,8,4]

Output:
[4,9]

Explanation:
Both 4 and 9 appear in both arrays, so they are included in the intersection. */

const intersect = function(nums1, nums2) {
    // your Code Goes Here
    let count = {}
    let commonArr = []
    for(let i=0; i<nums1.length; i++){
        let num = nums1[i]
        count[num] = (count[num]||0)+1
    }
    for(let i=0; i<nums2.length; i++){
        let num = nums2[i]
        if(count[num]){
            commonArr.push(num)
            count[num]--
        }
    }
    return commonArr
 };
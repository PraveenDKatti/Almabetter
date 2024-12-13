/* Find all groups of consecutive identical characters in a string s that have a size of 3 or more, 
and return their starting and ending indices as intervals, sorted by the starting index. */

/* Example 3:
Input:
s = "abcdddeeeeaabbbcd"

Output:
[[3,5],[6,9],[12,14]]

Explanation:
The large groups are "ddd", "eeee", and "bbb". */

function largeGroupPositions(s) {
    // Your code goes here
    let largeGroup = []
    let start = 0
    for(let i=1;i<s.length;i++){
        if(s[start] !== s[i]){
            if(i-start >= 3){
                largeGroup.push([start,i-1])
            }
            start = i
        }
    }
    if (s.length - start >= 3) {
        largeGroup.push([start, s.length - 1]);
    }
    return largeGroup
};
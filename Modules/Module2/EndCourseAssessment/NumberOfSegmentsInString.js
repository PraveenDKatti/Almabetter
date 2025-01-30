/* To count the number of contiguous segments of non-space characters in a given string. 
The goal is to identify and quantify sequences that are separated by spaces, 
providing insight into the structure of the string. */

/* Example 1:
Input:
s = "Hello, my name is John"

Output:
5

Explanation:
The five segments are ["Hello,", "my", "name", "is", "John"] */

var countSegments = function(s) {
    // Your code goes here
    if(s.length === 0) return 0
    return s.trim().split(" ").length
 };
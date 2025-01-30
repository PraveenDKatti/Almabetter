/* To count the number of good numbers of length n, where a good number is defined as a number composed 
only of even digits (0, 2, 4, 6, 8) and does not start with 0 (except for the single-digit number 0). */

/* Example 2:
Input:
2

Output:
20

Explanation:
The good numbers of length 2 are combinations of even and odd digits. 
The even digits are 0, 2, 4, 6, 8 and odd digits are 1, 3, 5, 7, 9. */


var countGoodNumbers = function(n) {
    // You code goes here
    if (n === 0) return 1; // Edge case for length 0
    if (n === 1) return 5; // Single-digit numbers
    
    return 4 * Math.pow(5, n - 1); // 4 options for the first digit, 5^(n-1) for the rest
};
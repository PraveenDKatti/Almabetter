/* To determine the number of valid ways to decode a string of digits into letters based on a given mapping, 
where each digit or combination of digits represents a letter from 'A' to 'Z'. 
The solution must account for invalid groupings that do not correspond to valid letters. */

/* Example 2:
Input:
s = "226"

Output:
3

Explanation:
"226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6). */


var numDecodings = function(s) {
    // Your code goes here
     if (!s || s[0] === '0') return 0;
 
     const dp = [1, 1]; // dp[i] represents the number of ways to decode the first i characters
 
     for (let i = 2; i <= s.length; i++) {
         const singleDigit = s[i - 1];
         const twoDigit = s.slice(i - 2, i);
 
         dp[i] = 0; // Initialize dp[i] to 0
 
         if (singleDigit !== '0') {
             dp[i] += dp[i - 1]; // Add ways for valid single-digit decode
         }
 
         if (parseInt(twoDigit, 10) >= 10 && parseInt(twoDigit, 10) <= 26) {
             dp[i] += dp[i - 2]; // Add ways for valid two-digit decode
         }
     }
 
     return dp[s.length];
 };
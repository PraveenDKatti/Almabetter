/* To determine if Player 1 can win a game by selecting numbers from either end of an integer array, 
given both players play optimally. The function should return true if Player 1 can achieve a 
score greater than or equal to Player 2's score after all elements are picked. */


/* Example 2:
Input:
[1,5,233,7]

Output:
true

Explanation:
Player 1 first chooses 1. Then player 2 has to choose between 5 and 7. 
No matter which number player 2 choose, player 1 can choose 233. Finally, 
player 1 has more score (234) than player 2 (12), so you need to return 
True representing player1 can win. */

var PredictTheWinner = function(nums) {
    // Your code goes here
     const n = nums.length;
    // Create a 2D DP array
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Base case: when there's only one number, the player takes it
    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }

    // Fill the DP table for all subarray lengths
    for (let len = 1; len < n; len++) {
        for (let i = 0; i < n - len; i++) {
            const j = i + len;
            // Choose either the start or end of the subarray
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }

    // If the score difference is >= 0, Player 1 can win
    return dp[0][n - 1] >= 0;
}
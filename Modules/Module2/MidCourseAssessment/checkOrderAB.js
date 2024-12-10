/* Write a function to check whether all 'A's in a given string appear before all 'B's, 
returning true if the condition is satisfied and false otherwise. */

/* Example 1:
Input:
s = "aaabbb"

Output:
true

Explanation:
The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5. Hence, 
every 'a' appears before every 'b' and we return true. */

var checkString = function(s) {
    // Your code goes here
    let appear = false
    for(let c of s){
      if(c === 'B'){
          appear = true
      }
      else if(c === 'A' && appear){
          return false
    }
    }
    return true
  };
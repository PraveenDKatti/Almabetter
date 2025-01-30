/* To convert a given integer into its equivalent Roman numeral representation by applying the standard mappings of integers to Roman symbols. 
The conversion must accurately follow the rules of Roman numeral formation, 
including the use of subtraction for specific values (e.g., 4 as IV and 9 as IX) to ensure correctness in representation. */

/* Example 2:
Input:
num = 58

Output:
"LVIII"

Explanation:
L = 50, V = 5, III = 3. */

var intToRoman = function(num) {
    // Your code goes here
      const romanNumerals = [
          [1000, "M"],
          [900, "CM"],
          [500, "D"],
          [400, "CD"],
          [100, "C"],
          [90, "XC"],
          [50, "L"],
          [40, "XL"],
          [10, "X"],
          [9, "IX"],
          [5, "V"],
          [4, "IV"],
          [1, "I"]
      ];
  
      let result = "";
      for (const [value, symbol] of romanNumerals) {
          while (num >= value) {
              result += symbol;
              num -= value;
          }
      }
      return result;
  }
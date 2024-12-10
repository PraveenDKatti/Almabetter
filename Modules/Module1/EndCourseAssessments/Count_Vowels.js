/* write a JavaScript function that takes a string as input and returns the total count of vowels (a, e, i, o, u) 
present in the string. The function should consider both uppercase and lowercase vowels. */

/* Example 1:
Input:
str = "Hello World!"

Output:
3

Explanation:
The vowels in the string are e, o, and o, totaling 3 vowels. */


function countVowels(str) {
    //matching the vowels [a,e,i,o,u] using regular expression with insensitive flag
   let match = str.match(/[aeiou]/ig)
   
   //if there is a match return count of matched Vowels, if match is Null returns 0
   return match?match.length:0
 }
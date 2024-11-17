/* Write a JavaScript program to compare Left Shift(s) and Right Shift(s) to see if they are equal.
If it does, output "YES", otherwise output "NO".

Left Shift (L): Moves all characters in the string one step to the left, 
            placing the first character at the end.
Right Shift (R): Moves all characters in the string one step to the right, 
            placing the last character at the beginning. */


/* Example 2:
Input:
s = "abcd"
            
Output:
NO
            
Explanation:
For s = "abcd", the left shift yields "bcda" and the right shift yields "dabc", which are different. 
Thus, there is no V for which both shifts yield S.
 */

// Do not remove nor make any changes in  main() function
function main() {
    var s = readLine();
    console.log((lShift(s) === rShift(s)) ? 'YES' : 'NO');
}
function lShift(s) {
    // Your code goes here
    return s.substr(1)+s.charAt(0)
}
function rShift(s) {
    // Your code goes here
    return s.charAt(s.length-1)+s.substr(0,s.length-1)
}
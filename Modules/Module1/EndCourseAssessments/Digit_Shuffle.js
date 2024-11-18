/* write a JavaScript function that determines if it’s possible to rearrange the digits of a 
given positive integer N to create a multiple of 5. */

/* Example 3:
Input:
n = 108

Output:
true

Explanation:
The digits can be rearranged to form 180, which is a multiple of 5. */


// Do not remove nor make any changes in  main() function
function main() {
    var n = parseInt(readLine());
    console.log(isMultipleOfFive(n));
}
function isMultipleOfFive(n) {
    // Your code goes here
    let digits = n.toString().split("");
    return digits.includes("0")||digits.includes("5")
}
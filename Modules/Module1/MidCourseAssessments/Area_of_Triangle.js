/* Calculate and return the area of triangle using Heron’s formula. The function should return 
the area of the triangle as a floating-point number. */

/* Example 1:
Input:
side1 = 5, side2 = 6, side3 = 7

Output:
14.696938456699069

Explanation:
Using Heron's formula, s = (5 + 6 + 7) / 2 = 9.
Then, Area = √(9 * (9 - 5) * (9 - 6) * (9 - 7)) ≈ 14.70. */


// Do not remove nor make any changes in  main() function
function main() {
    var side1 = parseInt(readLine());
    var side2 = parseInt(readLine());
    var side3 = parseInt(readLine());
    console.log(getTriangleArea(side1, side2, side3));
}
function getTriangleArea(side1, side2, side3) {
  // Your code goes here
  let sp = 0.5*(side1+side2+side3)
  let area = Math.sqrt(sp*(sp-side1)*(sp-side2)*(sp-side3))
  return area
}
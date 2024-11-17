/* write a function that takes two integers and returns their XOR result without using the XOR operator. */

/* Example 1:
Input:
x = 1
y = 2

Output:
3

Explanation:
The binary representations are:
x = 1 → 01
y = 2 → 10

The XOR operation without using ^ would produce 11 in binary, which equals 3 in decimal. */

// Do not remove nor make any changes in  main() function
function main() {
    var x = parseInt(readLine());
    var y = parseInt(readLine());
    console.log(myXOR(x, y));
}
function myXOR(x, y)
{
  // Your code goes here
  return (x & (~y)) | ((~x ) & y)
}
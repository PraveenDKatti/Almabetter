/* Write a function that take a string and a positive number as inputs and return a new string 
with the original string repeated the specified number of times. */

/* Example 1:
Input:
str = "hello";
num = 3;

Output:
hellohellohello

Explanation:
The string "hello" is repeated 3 times, resulting in "hellohellohello". */


// Do not remove nor make any changes in  main() function
function main() {
    var str = readLine();
    var n = parseInt(readLine());
    console.log(string_copies(str,n));
}
function string_copies(str,n) 
{
  // Your code goes here
  let i=1
  let repeatedStr = str
  while(i<n){
    repeatedStr+=str
    i++
  }
  return repeatedStr
}
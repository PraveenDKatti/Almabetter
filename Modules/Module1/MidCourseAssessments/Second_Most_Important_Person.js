/* Write a program to find the second largest number in a, b, c to find the 
second most important among A, B, C.
 */

/*  Example 1:
Input:
a = 15 b=20 c=10

Output:
15 */

// Do not remove nor make any changes in  main() function
function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());
    var c = parseInt(readLine());
    console.log(secondImportant(a,b,c));
}

//Solution
const secondImportant = function(a,b,c){
   // Your code goes here
   return [a,b,c].sort()[1]
};


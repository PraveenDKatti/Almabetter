/* write a function that will return a new string with each word’s first letter capitalized. */

/* Example 1:
Input:
hello world

Output:
Hello World

Explanation:
Each word’s first letter capitalized. */

//  Do not remove nor make any changes in  main() function
function main() {
    var str = readLine();
    console.log(capitalizeWords(str));
}
function capitalizeWords(str) {
  // Your code goes here
  return str.split(" ").map((w)=>w.replace(w.charAt(0),w.charAt(0).toUpperCase())).join(" ")
}
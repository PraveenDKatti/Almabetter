/* Add the prefix to the string with "Py", if it's not already prefixed. */

/* Example 1:
Input:
thon

Output:
Python

Explanation:
"Py" added as it's not already prefixed. */

// Do not remove nor make any changes in  main() function
function main() {
    var str = readLine();
    console.log(addPy(str));
}
function addPy(str) {
  // Your code goes here
  if(str.startsWith("Py"))
    return str
    else
    return "Py"+str
}
/* Write a function to validate if a given string is a valid password or not using Regular Expression */

/* Example 1:
Input:
Abc123!@

Output:
true */


// Do not remove nor make any changes in  main() function
function main() {
    var password = readLine();
    console.log(isValidPassword(password));
}
function isValidPassword(password) {
  //Your code goes here
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_+])[a-zA-Z0-9!@#$%^&*_+]{8,}$/
  return regex.test(password)
}
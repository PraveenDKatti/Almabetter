/* write a JavaScript function that checks if a given string represents a valid phone number.  
The phone number should: Contain exactly 10 digits. Start with 7, 8, or 9.
No additional characters (like spaces or hyphens) are allowed. */

/* Example 1:
Input:
phoneNumber = "9876543210"

Output:
true

Explanation:
The number starts with 9, contains exactly 10 digits, and meets all the validation requirements. */


// Do not remove nor make any changes in  main() function
function main() {
    var phoneNumber = parseInt(readLine());
    console.log(isValidPhoneNumber(phoneNumber));
}
function isValidPhoneNumber(phoneNumber) {
  // Your code goes here
  return /^[789][0-9]{9}$/.test(phoneNumber)
}
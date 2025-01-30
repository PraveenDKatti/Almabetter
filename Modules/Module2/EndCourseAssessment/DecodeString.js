/* To implement a function that decodes a given encoded string following the format k[encoded_string], 
where encoded_string is repeated k times. The function should handle valid inputs with well-formed 
square brackets and return the fully decoded string. */


/* Example 2:
Input:
s= "3[a2[c]]"

Output:
accaccacc

Explanation:
The string can be decoded by first decoding "a2[c]" to "acc", and then repeating that three times. */


var decodeString = function(s) {
	// Your code goes here
      let stack = [];
    let currentString = '';
    let currentNumber = 0;

    for (let char of s) {
        if (!isNaN(char)) {
            // If it's a number, build the current number
            currentNumber = currentNumber * 10 + Number(char);
        } else if (char === '[') {
            // Push the current number and string onto the stack
            stack.push(currentString);
            stack.push(currentNumber);
            currentString = '';
            currentNumber = 0;
        } else if (char === ']') {
            // Pop the number and previous string from the stack
            let repeatTimes = stack.pop();
            let previousString = stack.pop();
            currentString = previousString + currentString.repeat(repeatTimes);
        } else {
            // Append the character to the current string
            currentString += char;
        }
    }

    return currentString;
}
/* write a JavaScript function that will convert a given temperature from Fahrenheit to Celsius.
Use the formula to convert Fahrenheit to Celsius: Celsius = (Fahrenheit - 32) * 5/9. */

/* Example 1:
Input:
fahrenheit = 90

Output:
32.22222222222222

Explanation:
The temperature 90°F converts to (90 - 32) * 5/9 ≈ 32.22°C. */

//  Do not remove nor make any changes in  main() function
function main() {
    var a = parseInt(readLine());
    console.log(fahrenheitToCelsius(a));
}
function fahrenheitToCelsius(fahrenheit) {
  // Your code goes here
  return (fahrenheit-32)*5/9
}
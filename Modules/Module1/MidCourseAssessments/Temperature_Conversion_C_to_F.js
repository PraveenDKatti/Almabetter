/* write a JavaScript function that will convert a given temperature from Celsius to Fahrenheit
Use the formula to convert Celsius to Fahrenheit: Fahrenheit = (Celsius * 9/5) + 32. */

/* Example 1:
Input:
celsius = 25

Output:
77

Explanation:
The temperature 25°C converts to (25 * 9/5) + 32 = 77°F. */

// Do not remove nor make any changes in  main() function
function main() {
    var celsius = parseInt(readLine());
    console.log(celsiusToFahrenheit(celsius));
}
function celsiusToFahrenheit(celsius) {
  //  Your code goes here
  return 9/5*celsius + 32
}
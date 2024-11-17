/* Given a string that represents the coordinates of a square of the chessboard. Coordinates start with letter 
ends with digit. Return true if square is white, and false if square is black. */

/* Example 2:
Input:
coordinates = "h3"

Output:
true

Explanation:
From the chessboard above, the square with coordinates "h3" is white, so return true. */


// Do not remove nor make any changes in  main() function
function main() {
    var coordinates = readLine();
    console.log(squareIsWhite(coordinates));
}
var squareIsWhite = function(coordinates) {
  // Your code goes here
  let letter = ["a","b","c","d","e","f","g","h"]
  const [l,n] = coordinates.split("")
  if(letter.indexOf(l)%2==0&&n%2==0||letter.indexOf(l)%2==1&&n%2==1){
    return true
  }
  return false
};
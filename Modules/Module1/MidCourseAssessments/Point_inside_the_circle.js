/* write a function that takes the circle's center coordinates, radius, and a point's coordinates as input. 
It should return true if the point lies strictly inside the circle and false otherwise. */

/* Example 1:
Input:
Center of the circle: (0, 0)
Radius of circle: 5
Point inside the circle: (2, 2)

Output:
true

Explanation:
The distance between the point (2, 2) and the circle's center (0, 0) is less than the radius 5. 
Therefore, the point lies strictly inside the circle. */


// Do not remove nor make any changes in  main() function
function main() {
	/*Input:
	Center of the circle (x, y)
	Radius of circle: r
	Point inside a circle (a, b) */
    var x = parseInt(readLine());
    var y = parseInt(readLine());
    var r = parseInt(readLine());
    var a = parseInt(readLine());
    var b = parseInt(readLine());
    console.log(check_a_point(a, b, x, y, r));
}
function check_a_point(a, b, x, y, r) {
    // Your code goes here
    let p = (a-x)**2+(b-y)**2
    let c = r**2
    return p<=c?true:false
}
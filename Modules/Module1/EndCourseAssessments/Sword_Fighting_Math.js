/* write a JavaScript function that takes an array of positive integers (representing sword lengths) and 
returns the number of unique triangles that can be formed from them.
For any three lengths, a, b, and c (where a <= b <= c), a triangle can be formed if: a + b > c */

/* Example 1:
Input:
arr = [3, 5, 4]; n = 3;

Output:
1

Explanation:
The only triangle possible is formed by using lengths 3, 4, and 5. */


// Do not remove nor make any changes in  main() function
function main() {
    var arr = readLine().split(" ").map(x => parseInt(x));
    var n = parseInt(readLine());
    console.log(findNumberOfTriangles(arr, n));
}

function findNumberOfTriangles(arr, n) {
    // Your code goes here
    arr.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
        let k = i + 2;
        
        for (let j = i + 1; j < n; j++) {
            while (k < n && arr[i] + arr[j] > arr[k]) {
                k++;
            }

            if (k > j) {
                count += k - j - 1;
            }
        }
    }
    return count;
}
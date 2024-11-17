/* Write a function to return the number of positive integers less than or equal to num 
whose digit sums are even. */

/* Example 2:
Input:
num = 30

Output:
14

Explanation:
The 14 integers less than or equal to 30 whose digit sums are even are 2, 4, 6, 8, 11, 
13, 15, 17, 19, 20, 22, 24, 26, and 28. */


// Do not remove nor make any changes in  main() function
function main() {
    var num = parseInt(readLine());
    console.log(countEven(num));
}
var countEven = function(num) {
     // Your code goes here
     let count = 0
     for(let i=1;i<=num;i++){
        let digitSum = sum(i)
        digitSum%2==0?count++:count
     }
     return count
};

function sum(n){
    let total = 0
    while(n>0){
        total+=n%10
        n=parseInt(n/10)
    }
    return total
}
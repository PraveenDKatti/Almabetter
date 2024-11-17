/* Write a function to push all the zeros to the end of the array, while keeping the order of 
all other elements the same. */

/* Example 1:
Input:
arr[] = {1, 2, 0, 4, 3, 0, 5, 0};

Output:
[1, 2, 4, 3, 5, 0, 0, 0] */


// Do not remove nor make any changes in  main() function
function main() {
    var arr = readLine().split(" ").map(x => parseInt(x));
    console.log(pushZerosToEnd(arr));
}
function pushZerosToEnd(arr) {
    // Your code goes here
    let zeroes = 0
    for(i=0;i<arr.length;i++){
        if(arr[i]!=0){
            arr[zeroes++]=arr[i]
        }
    }
    for(i=zeroes;i<arr.length;i++){
        arr[i]=0
    }
    return arr
}
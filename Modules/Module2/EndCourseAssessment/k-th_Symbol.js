/* To find the k-th symbol in the n-th row of a sequence generated by transforming binary symbols. 
The transformation rules involve replacing 0 with 01 and 1 with 10 iteratively. */

/* Example 2:
Input:
n = 2, k = 1

Output:
0

Explanation:
The second row is 01, so the first symbol is 0.
row 1: 0 row 2: 01 */


var kthGrammar = function(n, k) {
    // Your code goes here
   let row = "0"
   let temp = ""
   let i=0
   while(n>1){
       for(let i=0;i<row.length;i++){
           if(row[i]=="0")
               temp += "01"
           else
                temp += "10"
       }
    n--
    i++
    row = temp
    temp = ""
    }
    return row[k-1]
};
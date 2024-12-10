/* Compare two strings after processing backspace operations represented by the '#' character, 
and determine if the resulting strings are equal. */


/* Example 1:
Input:
s = "ab#c", t = "ad#c"

Output:
true

Explanation:
Both s and t become "ac". */


var backspaceCompare = function(s, t) {
    // Your code goes here
    let s2 = []
    let t2 = []
    for(let c of s){
        if(c!=='#')
            s2.push(c)
        else{
            s2.pop()
        }
    }
    for(let c of t){
        if(c!=='#')
            t2.push(c)
        else{
            t2.pop()
        }
    }
    return s2.join("") === t2.join("")
};
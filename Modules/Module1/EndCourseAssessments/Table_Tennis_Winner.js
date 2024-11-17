/* A game shall be won by the player first scoring 11 points except in the case when both players 
have 10 points each, then the game shall be won by the last player who scored last point.
return WIN if player reaches the condition, else return LOSE. */

/* 1 represents players's point. 0 represents Opponent's point. */

/* Example 1:
Input:
11111111110000000000

Output:
LOSE

Explanation:
Both players reach 10 points each. Opponent scores the final point, gaining a 2-point lead. */


// Do not remove nor make any changes in  main() function
function main() {
    var s = parseInt(readLine()).toString()
    console.log(winorlose(s));
}
function winorlose(s){
    // Your code goes here
    let arsh = 0
    let opp = 0
    let i = 0
    while(i<s.length){
        s[i]==1?arsh++:opp++
        if(arsh==10&&opp==10)
            return s[i]==1?"WIN":"LOSE"
        i++
    }
    return arsh>opp?"WIN":"LOSE"
}
